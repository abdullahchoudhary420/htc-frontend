import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarCheck, Clock, TruckIcon, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { checkAvailability, createBooking } from '@/lib/api';
import { formatTime12h } from '@/lib/utils';
import { TimePicker12h } from '@/components/ui/time-picker-12h';
import type { AvailabilityResponse } from '@/types';
import { useAuth } from '@/hooks/use-auth';
import AuthForm from '@/components/AuthForm';
import { useNavigate } from 'react-router-dom';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
    event_date: string;
    start_time: string;
    end_time: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    address: string;
    alcoholic_pops: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookingForm() {
    const [form, setForm] = useState<FormState>({
        event_date: '',
        start_time: '',
        end_time: '',
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        address: '',
        alcoholic_pops: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<AvailabilityResponse | null>(null);
    const [confirming, setConfirming] = useState(false);

    const { user } = useAuth();
    const navigate = useNavigate();
    const addressInputRef = useRef<HTMLInputElement>(null);

    // Initial user data fill
    useEffect(() => {
        if (user) {
            setForm(prev => ({
                ...prev,
                customer_name: prev.customer_name || (user as any).user_metadata?.full_name || '',
                customer_email: prev.customer_email || user.email || ''
            }));
        }
    }, [user]);

    // Google Places Autocomplete
    useEffect(() => {
        if (result?.available && addressInputRef.current && (window as any).google) {
            const autocomplete = new (window as any).google.maps.places.Autocomplete(addressInputRef.current, {
                componentRestrictions: { country: 'us' },
                fields: ['formatted_address'],
                types: ['address']
            });

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place.formatted_address) {
                    handleChange('address', place.formatted_address);
                }
            });
        }
    }, [result?.available]);

    const handleChange = (field: keyof FormState, value: string | boolean) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        // Clear previous results when inputs change
        if (field === 'event_date' || field === 'start_time' || field === 'end_time') {
            setResult(null);
            setError(null);
        }
    };

    const handleConfirmBooking = async () => {
        if (!result?.quote) return;
        setConfirming(true);
        setError(null);
        try {
            await createBooking({
                ...form,
                total_price: result.quote.total,
                deposit_paid: false,
            });
            navigate('/thank-you');
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Failed to confirm booking');
        } finally {
            setConfirming(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const data = await checkAvailability(form);
            setResult(data);
        } catch (err: unknown) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Something went wrong. Please try again.',
            );
        } finally {
            setLoading(false);
        }
    };

    // ── Today's date in YYYY-MM-DD (for min attribute) ────────────────────────
    const today = new Date().toISOString().split('T')[0];

    const MAX_VANS = 6;
    const DAYTIME_RATE = 50;      // $/hr before 18:00

    return (
        <Card className="bg-white shadow-md border border-bronze/20">
            <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center">
                        <TruckIcon className="h-6 w-6 text-bronze" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-dark">
                            Book Now
                        </h3>
                        <p className="text-sm text-gray-500">
                            Real-time availability across our 6-van fleet
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Event Date */}
                    <div>
                        <Label htmlFor="event_date" className="flex items-center gap-1.5 mb-1.5">
                            <CalendarCheck className="h-4 w-4 text-bronze" />
                            Event Date
                        </Label>
                        <Input
                            id="event_date"
                            type="date"
                            min={today}
                            value={form.event_date}
                            onChange={(e) => handleChange('event_date', e.target.value)}
                            required
                        />
                    </div>

                    {/* Start / End Time */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="start_time" className="flex items-center gap-1.5 mb-1.5">
                                <Clock className="h-4 w-4 text-bronze" />
                                Start Time
                            </Label>
                            <TimePicker12h
                                value={form.start_time || "09:00"}
                                onChange={(val) => handleChange('start_time', val)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="end_time" className="flex items-center gap-1.5 mb-1.5">
                                <Clock className="h-4 w-4 text-bronze" />
                                End Time
                            </Label>
                            <TimePicker12h
                                value={form.end_time || "11:00"}
                                onChange={(val) => handleChange('end_time', val)}
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-bronze hover:bg-bronze/90 text-white font-semibold py-3 transition-all duration-200"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Checking…
                            </>
                        ) : (
                            'Book Now'
                        )}
                    </Button>
                </form>

                {/* Error State */}
                {error && (
                    <div className="mt-5 flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
                        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {/* Result – Fully Booked */}
                {result && !result.available && (
                    <div className="mt-5 flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4 text-amber-800">
                        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm">Fully Booked for This Slot</p>
                            <p className="text-sm mt-0.5">
                                All 6 vans are reserved for that date and time. Please try a
                                different time window or contact us directly.
                            </p>
                        </div>
                    </div>
                )}

                {/* Result – Available + Quote */}
                {result && result.available && result.quote && (
                    <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5">
                        {/* Availability banner */}
                        <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-semibold text-green-800">
                                Great news — {result.vans_remaining} van
                                {result.vans_remaining !== 1 ? 's' : ''} available!
                            </span>
                        </div>

                        {/* Quote breakdown */}
                        <div className="bg-white rounded-lg border border-green-100 p-4 space-y-2 text-sm text-gray-700">
                            <div className="flex justify-between">
                                <span>Duration</span>
                                <span className="font-medium">
                                    {result.quote.hours.toFixed(1)} hr
                                    {result.quote.hours !== 1 ? 's' : ''}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Rate</span>
                                <span className="font-medium">
                                    ${result.quote.hourly_rate}/hr
                                    {result.quote.hourly_rate === 75 && (
                                        <span className="ml-1 text-xs text-gray-400">(evening)</span>
                                    )}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium">
                                    ${result.quote.subtotal.toFixed(2)}
                                </span>
                            </div>
                            {result.quote.total > result.quote.subtotal && (
                                <div className="flex justify-between text-amber-700">
                                    <span>Minimum applied</span>
                                    <span className="font-medium">
                                        ${result.quote.minimum.toFixed(2)}
                                    </span>
                                </div>
                            )}
                            <div className="border-t border-gray-100 pt-2 pb-1 flex justify-between text-base font-bold text-slate-dark items-end">
                                <span>Estimated Total</span>
                                <div className="text-right">
                                    <div className="text-bronze text-lg">
                                        ${result.quote.total.toFixed(2)}
                                    </div>
                                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                                        + cost of ice cream
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-gray-500 mb-6">
                            * This is an estimate. Final pricing is confirmed upon booking.
                        </p>

                        {/* Auth / Confirm Booking Section */}
                        <div className="border-t border-green-200 mt-6 pt-6">
                            {!user ? (
                                <div className="space-y-4">
                                    <div className="bg-white/50 p-4 rounded-lg text-sm text-center text-slate-dark mb-4 border border-bronze/10">
                                        To lock in this date and confirm your booking, please sign in or create an account.
                                    </div>
                                    <AuthForm />
                                </div>
                            ) : (
                                <div className="text-center space-y-6">
                                    <div className="space-y-4 text-left">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="customer_name" className="text-slate-dark mb-1.5 block">Full Name *</Label>
                                                <Input
                                                    id="customer_name"
                                                    value={form.customer_name}
                                                    onChange={(e) => handleChange('customer_name', e.target.value)}
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="customer_phone" className="text-slate-dark mb-1.5 block">Phone Number *</Label>
                                                <Input
                                                    id="customer_phone"
                                                    value={form.customer_phone}
                                                    onChange={(e) => handleChange('customer_phone', e.target.value)}
                                                    placeholder="(555) 000-0000"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="address" className="text-slate-dark mb-1.5 block">Event Address *</Label>
                                            <Input
                                                id="address"
                                                ref={addressInputRef}
                                                value={form.address}
                                                onChange={(e) => handleChange('address', e.target.value)}
                                                placeholder="Street address, City, SC"
                                                required
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2 bg-amber-50 p-3 rounded-lg border border-amber-100">
                                            <input
                                                type="checkbox"
                                                id="alcoholic_pops"
                                                checked={form.alcoholic_pops}
                                                onChange={(e) => handleChange('alcoholic_pops', e.target.checked)}
                                                className="w-4 h-4 border-bronze/30 rounded text-bronze focus:ring-bronze"
                                            />
                                            <div>
                                                <Label htmlFor="alcoholic_pops" className="text-sm font-bold text-amber-900 cursor-pointer">
                                                    Include Alcoholic Pops?
                                                </Label>
                                                <p className="text-[10px] text-amber-700">Optional 21+ boozy treats</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-dark font-medium pt-2 text-center">
                                            Confirming as {user.email}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={handleConfirmBooking}
                                        disabled={confirming}
                                        className="w-full sm:w-auto min-w-[200px] bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg transition-transform active:scale-[0.98]"
                                    >
                                        {confirming ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Confirming...
                                            </>
                                        ) : (
                                            'Confirm Booking'
                                        )}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card >
    );
}
