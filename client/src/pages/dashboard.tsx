import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import { getUserBookings } from '@/lib/api';
import type { Booking } from '@/types';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock, DollarSign, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CustomerDashboard() {
    const { user, isLoading: authLoading } = useAuth();
    const navigate = useNavigate();

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Only fetch if auth is fully loaded
        if (!authLoading) {
            if (!user) {
                // If not logged in, boot to auth page
                navigate('/auth');
                return;
            }

            const fetchBookings = async () => {
                setLoading(true);
                try {
                    const data = await getUserBookings();
                    setBookings(data);
                } catch (err: any) {
                    setError(err instanceof Error ? err.message : 'Failed to fetch bookings');
                } finally {
                    setLoading(false);
                }
            };

            fetchBookings();
        }
    }, [user, authLoading, navigate]);

    if (authLoading || loading) {
        return (
            <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-bronze mb-4" />
                <p className="text-gray-500 font-medium">Loading your dashboard...</p>
            </div>
        );
    }

    if (!user) {
        return null; // Will be redirected by useEffect
    }

    return (
        <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
            <SEO title="My Bookings | Hometown Catering" description="View and manage your ice cream truck bookings." />

            <div className="max-w-4xl mx-auto">
                <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-dark mb-2">My Bookings</h1>
                        <p className="text-gray-600">Welcome back, {user.user_metadata?.full_name || user.email}</p>
                    </div>
                    <Button
                        onClick={() => navigate('/booking')}
                        className="bg-bronze hover:bg-bronze/90 text-white shadow-sm self-start md:self-auto"
                    >
                        Book Another Event
                    </Button>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
                        {error}
                    </div>
                )}

                {bookings.length === 0 && !error ? (
                    <Card className="border-dashed border-2 bg-white/50 text-center py-16">
                        <CardContent>
                            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 border border-bronze/10">
                                <Calendar className="h-8 w-8 text-bronze/60" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-dark mb-2">No bookings yet</h3>
                            <p className="text-gray-500 max-w-sm mx-auto mb-6">
                                You haven't booked an ice cream truck yet. Ready to sweeten up your next event?
                            </p>
                            <Button
                                onClick={() => navigate('/booking')}
                                variant="outline"
                                className="border-bronze text-bronze hover:bg-bronze/10"
                            >
                                Check Availability Now
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-6">
                        {bookings.map((booking) => {
                            // Basic logic to determine if a booking is past
                            const eventDate = parseISO(booking.event_date);
                            const isPast = new Date() > eventDate;

                            return (
                                <Card key={booking.id} className={`overflow-hidden transition-all duration-200 hover:shadow-md border border-bronze/20 ${isPast ? 'opacity-75 bg-gray-50' : 'bg-white'}`}>
                                    <div className={`h-2 w-full ${isPast ? 'bg-gray-300' : 'bg-green-500'}`} />
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-2xl font-bold text-slate-dark text-nowrap">
                                                        {format(eventDate, 'MMM d, yyyy')}
                                                    </h3>
                                                    {isPast ? (
                                                        <Badge variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-200">Past</Badge>
                                                    ) : (
                                                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Upcoming</Badge>
                                                    )}
                                                </div>
                                                <p className="text-gray-500 text-sm flex items-center gap-1.5">
                                                    <Clock className="h-4 w-4" />
                                                    {booking.start_time} - {booking.end_time}
                                                </p>
                                            </div>

                                            <div className="bg-cream rounded-lg p-3 text-right border border-bronze/10 md:min-w-[140px]">
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Total Quote</p>
                                                <p className="text-xl font-bold text-bronze">${booking.total_price.toFixed(2)}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-gray-100">
                                            <div className="flex items-start gap-2.5">
                                                <div className="mt-0.5 rounded-full p-1 bg-green-50 text-green-600">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-dark">Status</p>
                                                    <p className="text-sm text-gray-600">Reserved (Van #{booking.van_id || 'Pending'})</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2.5">
                                                <div className="mt-0.5 rounded-full p-1 bg-amber-50 text-amber-600">
                                                    <DollarSign className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-dark">Deposit</p>
                                                    <p className="text-sm text-gray-600">
                                                        {booking.deposit_paid ? "Paid" : "Pending payment"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
