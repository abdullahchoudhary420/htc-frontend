// ─── Shared Frontend Types ────────────────────────────────────────────────────
// These mirror the backend's src/types.ts for type-safe API communication.

export interface AvailabilityRequest {
    event_date: string; // "YYYY-MM-DD"
    start_time: string; // "HH:MM" (24-hour)
    end_time: string;   // "HH:MM" (24-hour)
}

export interface QuoteBreakdown {
    hours: number;
    hourly_rate: number;
    subtotal: number;
    minimum: number;
    base_total: number;
    tax: number;
    fees: number;
    total: number;
    cash_price: number;
}

export interface AvailabilityResponse {
    available: boolean;
    vans_remaining: number;
    quote: QuoteBreakdown | null;
}

export interface Booking {
    id: string;
    user_id: string;
    van_id: number | null;
    event_date: string;
    start_time: string;
    end_time: string;
    total_price: number;
    deposit_paid: boolean;
    status: 'confirmed' | 'cancelled';
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    address: string;
    alcoholic_pops: boolean;
    created_at: string;
}
