import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isBefore, startOfDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, MapPin, User, Mail, Phone, CalendarCheck, AlertCircle, Loader2, CheckCircle2, IceCream } from 'lucide-react';
import { checkAvailability, createBooking } from '@/lib/api';
import type { AvailabilityResponse } from '@/types';
import { useAuth } from '@/hooks/use-auth';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { formatTime12h } from '@/lib/utils';
import { TimePicker12h } from '@/components/ui/time-picker-12h';
// [PAYMENT PAUSED] SquarePaymentForm archived to SquarePaymentForm.archived.tsx

export default function BookingFlow() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<string>('09:00');
    const [endTime, setEndTime] = useState<string>('11:00');
    const [step, setStep] = useState<'date' | 'time' | 'details' | 'confirmation'>('date');
    const [bookingId] = useState(() => crypto.randomUUID());

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        guests: '',
        eventType: '',
        message: '',
        alcoholic_pops: false
    });

    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<AvailabilityResponse | null>(null);

    const { user } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const today = startOfDay(new Date());

    // ── Restore pending booking after auth redirect ──────────────────────────────
    useEffect(() => {
        if (searchParams.get('resume') !== 'true') return;
        const pendingStr = sessionStorage.getItem('pendingBooking');
        if (!pendingStr) return;

        try {
            const pending = JSON.parse(pendingStr) as {
                date: string;
                startTime: string;
                endTime: string;
                formData: typeof formData;
                total: number;
                quote: AvailabilityResponse['quote'];
            };

            if (pending.date) setSelectedDate(new Date(pending.date + 'T12:00:00'));
            if (pending.startTime) setStartTime(pending.startTime);
            if (pending.endTime) setEndTime(pending.endTime);
            if (pending.formData) setFormData({ ...pending.formData, email: pending.formData.email || user?.email || '' });
            if (pending.quote) {
                setResult({ available: true, vans_remaining: 1, quote: pending.quote });
            }

            setAcceptPolicy(true);
            // Restored to details step (no payment step anymore)
            setStep('details');
        } catch (e) {
            console.error('Failed to restore pending booking', e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Auto-fill email from auth user
    useEffect(() => {
        if (user?.email && !formData.email) {
            setFormData(prev => ({ ...prev, email: user.email || '' }));
        }
    }, [user, formData.email]);


    const previousMonth = () => {
        setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
    };

    const isDateAvailable = (date: Date) => {
        return !isBefore(date, today);
    };

    const handleDateSelect = (date: Date) => {
        if (!isDateAvailable(date)) return;
        setSelectedDate(date);
        setStep('time');
        setError(null);
    };

    const handleTimeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        if (!selectedDate || !startTime || !endTime) {
            setError("Please fill in all time slots.");
            setLoading(false);
            return;
        }

        try {
            const dateStr = format(selectedDate, 'yyyy-MM-dd');
            const data = await checkAvailability({
                event_date: dateStr,
                start_time: startTime,
                end_time: endTime
            });
            setResult(data);
            if (data.available) {
                setStep('details');
            } else {
                setError("Fully Booked for This Slot. Please try a different time window.");
            }
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleConfirmBooking = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            sessionStorage.setItem('pendingBooking', JSON.stringify({
                date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
                startTime,
                endTime,
                formData,
                total: result?.quote?.total,
                quote: result?.quote
            }));
            navigate('/auth');
            return;
        }

        if (!result?.quote || !selectedDate) return;

        setLoading(true);
        setError(null);
        try {
            await createBooking({
                event_date: format(selectedDate, 'yyyy-MM-dd'),
                start_time: startTime,
                end_time: endTime,
                total_price: result.quote.subtotal,
                deposit_paid: false,
                customer_name: formData.name,
                customer_email: formData.email || user.email || '',
                customer_phone: formData.phone,
                address: formData.location,
                alcoholic_pops: formData.alcoholic_pops,
                event_type: formData.eventType,
                guest_count: formData.guests,
                message: formData.message,
            });
            sessionStorage.removeItem('pendingBooking');
            setStep('confirmation');
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetBooking = () => {
        setSelectedDate(null);
        setStartTime('09:00');
        setEndTime('11:00');
        setStep('date');
        setResult(null);
        setError(null);
        setAcceptPolicy(false);
        setFormData({
            name: '',
            email: user?.email || '',
            phone: '',
            location: '',
            guests: '',
            eventType: '',
            message: '',
            alcoholic_pops: false
        });
    };

    // Calendar view
    const renderCalendar = () => (
        <Card className="bg-white rounded-2xl shadow-lg border border-bronze/20 overflow-hidden">
            <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-dark">{format(currentMonth, 'MMMM yyyy')}</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={previousMonth}
                            className="p-2 hover:bg-cream rounded-lg transition-colors text-bronze"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextMonth}
                            className="p-2 hover:bg-cream rounded-lg transition-colors text-bronze"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                        <div key={`empty-${i}`} />
                    ))}
                    {daysInMonth.map(date => {
                        const available = isDateAvailable(date);
                        const isSelected = selectedDate && isSameDay(date, selectedDate);
                        const isPast = isBefore(date, today);

                        return (
                            <button
                                key={date.toISOString()}
                                onClick={() => handleDateSelect(date)}
                                disabled={!available}
                                className={`
                                    aspect-square p-2 md:p-3 rounded-xl text-center transition-all font-medium
                                    ${isSelected ? 'bg-bronze text-white shadow-md' : ''}
                                    ${available && !isSelected ? 'bg-cream hover:bg-bronze/10 text-slate-dark border border-bronze/10' : ''}
                                    ${(!available || isPast) && !isSelected ? 'bg-gray-50 text-gray-300 cursor-not-allowed opacity-50' : ''}
                                `}
                            >
                                <div className="text-sm md:text-base">{format(date, 'd')}</div>
                            </button>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );

    // Time selection view
    const renderTimeSlots = () => (
        <Card className="bg-white rounded-2xl shadow-lg border border-bronze/20 overflow-hidden">
            <CardContent className="p-6 md:p-8">
                <button
                    onClick={() => setStep('date')}
                    className="flex items-center text-bronze hover:text-bronze/80 mb-6 font-medium transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to calendar
                </button>

                <h2 className="text-2xl font-bold mb-2 text-slate-dark">Select Service Hours</h2>
                <p className="text-gray-600 mb-8 flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-bronze" />
                    {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
                </p>

                <form onSubmit={handleTimeSubmit} className="space-y-6 max-w-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="start_time" className="flex items-center gap-1.5 mb-2 text-slate-dark font-semibold">
                                <Clock className="h-4 w-4 text-bronze" />
                                Start Time
                            </Label>
                            <TimePicker12h
                                value={startTime || "09:00"}
                                onChange={(val) => setStartTime(val)}
                                className="h-12"
                            />
                        </div>
                        <div>
                            <Label htmlFor="end_time" className="flex items-center gap-1.5 mb-2 text-slate-dark font-semibold">
                                <Clock className="h-4 w-4 text-bronze" />
                                End Time
                            </Label>
                            <TimePicker12h
                                value={endTime || "11:00"}
                                onChange={(val) => setEndTime(val)}
                                className="h-12"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
                            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-bronze hover:bg-bronze/90 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md disabled:opacity-70"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                Checking...
                            </>
                        ) : 'Continue'}
                    </button>
                </form>
            </CardContent>
        </Card>
    );

    // Details form view
    const renderDetailsForm = () => (
        <Card className="bg-white rounded-2xl shadow-lg border border-bronze/20 overflow-hidden">
            <CardContent className="p-6 md:p-8">
                <button
                    onClick={() => setStep('time')}
                    className="flex items-center text-bronze hover:text-bronze/80 mb-6 font-medium transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to time selection
                </button>

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-dark">Event Details & Quote</h2>
                    <a
                        href="/menu"
                        target="_blank"
                        className="text-bronze hover:underline flex items-center gap-1 text-sm font-semibold"
                    >
                        View Menu 🍦
                    </a>
                </div>

                {result && result.quote && (
                    <div className="mb-8 rounded-xl border border-bronze/20 bg-cream p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-semibold text-green-800">
                                Vans available for your selected time!
                            </span>
                        </div>

                        <div className="bg-white rounded-lg border border-bronze/10 p-4 space-y-2 text-sm text-slate-dark shadow-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Date & Time</span>
                                <span className="font-medium text-right">
                                    {selectedDate && format(selectedDate, 'MMM d, yyyy')}<br />
                                    {formatTime12h(startTime)} - {formatTime12h(endTime)}
                                </span>
                            </div>
                            <div className="border-t border-gray-100 my-2"></div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Duration</span>
                                <span className="font-medium">{result.quote.hours.toFixed(1)} hrs</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Rate</span>
                                <span className="font-medium">${result.quote.hourly_rate}/hr</span>
                            </div>


                            <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-end">
                                <span className="font-bold text-base text-slate-dark">Estimated Total</span>
                                <div className="text-right">
                                    <div className="font-bold text-bronze text-xl">${result.quote.subtotal.toFixed(2)}</div>
                                    <div className="text-xs text-gray-500 font-normal mt-0.5">+ cost of ice cream</div>
                                </div>
                            </div>


                            <p className="text-[10px] text-gray-400 mt-2 italic text-center">
                                * Included travel up to 30 miles from our base. Long distance may incur additional charges.
                                <br />
                                Our minimums are 9am–6pm $150 and after 6pm $300, that includes the cost of ice cream and hourly rates.
                            </p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleConfirmBooking} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <Label htmlFor="name" className="text-slate-dark mb-1.5 block">Full Name *</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-bronze/60 w-5 h-5" />
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 h-12"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {(!user || !user.email) && (
                            <div>
                                <Label htmlFor="email" className="text-slate-dark mb-1.5 block">Email *</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-bronze/60 w-5 h-5" />
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="pl-10 h-12"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <Label htmlFor="phone" className="text-slate-dark mb-1.5 block">Phone Number *</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-bronze/60 w-5 h-5" />
                                <Input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 h-12"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="location" className="text-slate-dark mb-1.5 block">Event Location *</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-bronze/60 w-5 h-5" />
                                <Input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 h-12"
                                    placeholder="Address or City"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="eventType" className="text-slate-dark mb-1.5 block">Event Type *</Label>
                            <select
                                id="eventType"
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                required
                                className="w-full h-12 px-3 rounded-md border border-input bg-transparent text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <option value="">Select type</option>
                                <option value="birthday">Birthday Party</option>
                                <option value="wedding">Wedding</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="festival">Festival</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <Label htmlFor="guests" className="text-slate-dark mb-1.5 block">Expected Guests *</Label>
                            <Input
                                type="number"
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                min="1"
                                className="h-12"
                                placeholder="50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <Input
                            type="checkbox"
                            id="alcoholic_pops"
                            name="alcoholic_pops"
                            checked={formData.alcoholic_pops}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { checked } = e.target;
                                setFormData(prev => ({ ...prev, alcoholic_pops: checked }));
                            }}
                            className="w-5 h-5 border-bronze/30 rounded text-bronze focus:ring-bronze"
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label
                                htmlFor="alcoholic_pops"
                                className="text-sm font-bold text-amber-900 leading-none cursor-pointer"
                            >
                                Include Alcoholic Pops? (21+ Optional)
                            </Label>
                            <p className="text-xs text-amber-700">
                                Check this if you'd like our special adult boozy popsicles included in the selection.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="message" className="text-slate-dark mb-1.5 block">Additional Details</Label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full p-3 rounded-md border border-input bg-transparent text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                            placeholder="Any special requests or dietary restrictions..."
                        />
                    </div>

                    <div className="space-y-4 rounded-lg bg-gray-50 p-4 border border-gray-200">
                        <div className="flex items-start gap-3">
                            <Input
                                type="checkbox"
                                id="policy"
                                checked={acceptPolicy}
                                onChange={(e) => setAcceptPolicy(e.target.checked)}
                                className="w-4 h-4 mt-1 border-gray-300 rounded text-bronze focus:ring-bronze"
                                required
                            />
                            <Label htmlFor="policy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                                I understand that cancellations must be made at least <strong>48 hours</strong> before the event for a full refund of any deposits. Same-day cancellations may incur a service fee.
                            </Label>
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
                            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    <div className="pt-4 border-t border-gray-100 mt-6">
                        {!user && (
                            <p className="text-sm text-gray-500 mb-4 text-center">
                                You will be asked to sign in or create an account to finalize your booking in the next step.
                            </p>
                        )}
                        <button
                            type="submit"
                            disabled={loading || !acceptPolicy}
                            className="w-full bg-bronze hover:bg-bronze/90 text-white font-bold py-4 rounded-lg transition-transform active:scale-[0.98] shadow-lg text-lg flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader2 className="h-6 w-6 animate-spin" />
                            ) : (
                                'Confirm Booking'
                            )}
                        </button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );

    // Confirmation view
    const renderConfirmation = () => (
        <Card className="bg-white rounded-2xl shadow-lg border border-bronze/20 overflow-hidden text-center py-12">
            <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-dark">Booking Confirmed!</h2>
                <div className="mb-8 p-6 bg-cream rounded-xl max-w-md mx-auto border border-bronze/10">
                    <p className="text-gray-600 mb-2 font-medium">Your ice cream van is reserved for:</p>
                    <p className="text-xl font-bold text-slate-dark mb-2">
                        {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
                    </p>
                    <p className="text-2xl font-bold text-bronze">{formatTime12h(startTime)} - {formatTime12h(endTime)}</p>
                </div>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    A confirmation email has been sent to <strong>{formData.email || user?.email || 'your email'}</strong>. We will be in touch shortly to finalize details!
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-bronze hover:bg-bronze/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
                    >
                        View My Bookings
                    </button>
                    <button
                        onClick={resetBooking}
                        className="bg-cream hover:bg-bronze/10 text-bronze font-semibold px-8 py-3 rounded-lg transition-colors border border-bronze/20"
                    >
                        Book Another Event
                    </button>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="w-full">
            {/* Component Layout Wrapper */}
            <div className="max-w-4xl mx-auto">
                {/* Progress Indicator */}
                <div className="flex justify-between items-center mb-8 px-4 sm:px-12 relative">
                    {/* Background Track */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>

                    {/* Active Track */}
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-bronze -z-10 rounded-full transition-all duration-300"
                        style={{
                            width: step === 'date' ? '0%' :
                                step === 'time' ? '33%' :
                                    step === 'details' ? '66%' : '100%'
                        }}
                    ></div>

                    {['Date', 'Time', 'Details', 'Done'].map((label, idx) => {
                        const stepStates = ['date', 'time', 'details', 'confirmation'];
                        const isActive = step === stepStates[idx];
                        const isPast = stepStates.indexOf(step) > idx;

                        return (
                            <div key={label} className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isActive ? 'bg-bronze text-white ring-4 ring-cream' :
                                    isPast ? 'bg-slate-dark text-white' : 'bg-gray-200 text-gray-400'
                                    }`}>
                                    {isPast ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                                </div>
                                <span className={`text-xs mt-2 font-medium ${isActive || isPast ? 'text-slate-dark' : 'text-gray-400'
                                    }`}>{label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Step Content */}
                <div className="transition-all duration-300">
                    {step === 'date' && renderCalendar()}
                    {step === 'time' && renderTimeSlots()}
                    {step === 'details' && renderDetailsForm()}
                    {step === 'confirmation' && renderConfirmation()}
                </div>
            </div>
        </div>
    );
}
