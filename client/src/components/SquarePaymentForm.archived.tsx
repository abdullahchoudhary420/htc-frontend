import { useEffect, useRef, useState } from 'react';
import { Loader2, Lock, CreditCard } from 'lucide-react';

const API_BASE_URL =
    (import.meta as ImportMeta & { env: Record<string, string> }).env['VITE_API_BASE_URL']
    ?? 'http://localhost:3001';

const SQUARE_APP_ID =
    (import.meta as ImportMeta & { env: Record<string, string> }).env['VITE_SQUARE_APP_ID']
    ?? '';

const SQUARE_LOCATION_ID =
    (import.meta as ImportMeta & { env: Record<string, string> }).env['VITE_SQUARE_LOCATION_ID']
    ?? '';

const SQUARE_ENV =
    (import.meta as ImportMeta & { env: Record<string, string> }).env['VITE_SQUARE_ENVIRONMENT']
    ?? 'sandbox';

const SQUARE_SDK_URL = SQUARE_ENV === 'production'
    ? 'https://web.squarecdn.com/v1/square.js'
    : 'https://sandbox.web.squarecdn.com/v1/square.js';

export interface BookingPayload {
    bookingId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    serviceType: 'full' | 'partial';
    eventDate: string;
    startTime: string;
    endTime: string;
    totalPrice: number;
    address: string;
    guestCount: number;
    eventType: string;
    message?: string;
    alcoholicPops: boolean;
}

interface PaymentFormProps {
    booking: BookingPayload;
    onSuccess: (paymentId: string) => void;
    onError: (message: string) => void;
}

declare global {
    interface Window {
        Square?: any;
    }
}

export default function SquarePaymentForm({ booking, onSuccess, onError }: PaymentFormProps) {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<any>(null);
    const paymentsRef = useRef<any>(null);
    const [loading, setLoading] = useState(true);
    const [paying, setPaying] = useState(false);
    const [initError, setInitError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const loadSquare = async () => {
            // Load the Square Web Payments SDK script if not already present
            if (!window.Square) {
                await new Promise<void>((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = SQUARE_SDK_URL;
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error('Failed to load Square SDK'));
                    document.head.appendChild(script);
                });
            }

            if (!isMounted) return;

            try {
                const payments = window.Square.payments(SQUARE_APP_ID, SQUARE_LOCATION_ID);
                paymentsRef.current = payments;

                const card = await payments.card();
                cardRef.current = card;

                if (cardContainerRef.current) {
                    await card.attach(cardContainerRef.current);
                }
                if (isMounted) setLoading(false);
            } catch (err: any) {
                if (isMounted) {
                    setInitError('Could not load payment form. Please refresh and try again.');
                    setLoading(false);
                }
            }
        };

        loadSquare().catch(() => {
            if (isMounted) {
                setInitError('Could not load payment form. Please refresh and try again.');
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
            cardRef.current?.destroy?.();
        };
    }, []);

    const handlePay = async () => {
        if (!cardRef.current) return;
        setPaying(true);
        try {
            const result = await cardRef.current.tokenize();

            if (result.status !== 'OK') {
                onError(result.errors?.[0]?.message ?? 'Card tokenization failed. Please try again.');
                return;
            }

            const response = await fetch(`${API_BASE_URL}/api/payments/deposit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sourceId: result.token,
                    paymentType: 'deposit',
                    bookingDetails: booking,
                }),
            });

            const data = await response.json() as { success: boolean; paymentId?: string; error?: string; warning?: string };

            if (!response.ok || !data.success) {
                onError(data.error ?? 'Payment failed. Please try again.');
                return;
            }

            if (data.warning) {
                console.warn('[PaymentForm] Payment succeeded with warning:', data.warning);
            }

            onSuccess(data.paymentId ?? '');
        } catch (err: any) {
            onError('An unexpected error occurred. Please try again.');
        } finally {
            setPaying(false);
        }
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-dark text-lg">Secure $50 Deposit</h3>
                    <p className="text-sm text-gray-500">This locks in your booking date. The remaining balance is due at the event.</p>
                </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-amber-50 rounded-lg border border-amber-100 p-4 text-sm">
                <div className="flex justify-between items-center">
                    <span className="text-amber-900 font-medium">{booking.eventDate} &bull; {booking.startTime} – {booking.endTime}</span>
                    <span className="font-bold text-amber-800">$50.00 today</span>
                </div>
                <p className="text-amber-700 text-xs mt-1">Service fee: ${booking.totalPrice.toFixed(2)} + cost of ice cream (due at event)</p>
            </div>

            {/* Card Form */}
            {loading && (
                <div className="flex items-center justify-center py-8 text-gray-500">
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Loading secure payment form...
                </div>
            )}
            {initError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-lg">
                    {initError}
                </div>
            )}
            <div
                ref={cardContainerRef}
                style={{ minHeight: loading ? 0 : 80 }}
                className="rounded-lg border border-gray-200 overflow-hidden"
            />

            {/* Pay Button */}
            {!initError && (
                <button
                    onClick={handlePay}
                    disabled={paying || loading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-lg shadow-md"
                >
                    {paying ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing…
                        </>
                    ) : (
                        <>
                            <Lock className="w-5 h-5" />
                            Pay $50.00 Deposit
                        </>
                    )}
                </button>
            )}

            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Secured by Square. We never store your card details.
            </p>
        </div>
    );
}
