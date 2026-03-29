import type { AvailabilityRequest, AvailabilityResponse } from '../types';

const API_BASE_URL =
    (import.meta as ImportMeta & { env: Record<string, string> }).env[
    'VITE_API_BASE_URL'
    ] ?? 'http://localhost:3001';

// ─── Auth Token Helper ────────────────────────────────────────────────────────

/**
 * Tries to read a Supabase session token from localStorage.
 * If the user is not logged in, returns null – the availability endpoint
 * accepts unauthenticated requests.
 */
function getAuthToken(): string | null {
    try {
        // Supabase v2 stores the session under "sb-<project-ref>-auth-token"
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith('sb-') && key.endsWith('-auth-token')) {
                const raw = localStorage.getItem(key);
                if (raw) {
                    const parsed = JSON.parse(raw) as {
                        access_token?: string;
                    };
                    return parsed.access_token ?? null;
                }
            }
        }
    } catch {
        // localStorage unavailable (SSR / private mode)
    }
    return null;
}

// ─── API Helpers ──────────────────────────────────────────────────────────────

function buildHeaders(): HeadersInit {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    const token = getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
}

// ─── API Methods ──────────────────────────────────────────────────────────────

/**
 * POST /api/bookings/check-availability
 *
 * Checks whether any of the 8 vans are available for the given time slot
 * and returns a pricing quote if so.
 */
export async function checkAvailability(
    payload: AvailabilityRequest,
): Promise<AvailabilityResponse> {
    const response = await fetch(
        `${API_BASE_URL}/api/bookings/check-availability`,
        {
            method: 'POST',
            headers: buildHeaders(),
            body: JSON.stringify(payload),
        },
    );

    if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as {
            error?: string;
        };
        throw new Error(body.error ?? `Request failed with status ${response.status}`);
    }

    return response.json() as Promise<AvailabilityResponse>;
}

/**
 * POST /api/bookings
 *
 * Auth required. Submits the confirmed booking to the backend.
 */
export async function createBooking(
    payload: AvailabilityRequest & {
        total_price: number;
        deposit_paid: boolean;
        customer_name: string;
        customer_email: string;
        customer_phone: string;
        address: string;
        alcoholic_pops: boolean;
        event_type?: string;
        guest_count?: string;
        message?: string;
    }
): Promise<{ message: string; bookingId?: string }> {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
        method: 'POST',
        headers: buildHeaders(),
        body: JSON.stringify(payload),
    });

    const body = (await response.json().catch(() => ({}))) as any;

    if (!response.ok) {
        throw new Error(body.error ?? `Request failed with status ${response.status}`);
    }

    return body;
}

/**
 * GET /api/bookings
 *
 * Auth required. Fetches the authenticated user's bookings.
 */
export async function getUserBookings(): Promise<any[]> {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
        method: 'GET',
        headers: buildHeaders(),
    });

    if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as any;
        throw new Error(body.error ?? `Request failed with status ${response.status}`);
    }

    return response.json();
}

/**
 * POST /api/contact
 *
 * Submits the contact form to the backend.
 */
export async function submitContactForm(payload: any): Promise<{ success: boolean; message: string }> {
    // Map frontend camelCase to backend snake_case
    const backendPayload = {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        event_type: payload.eventType,
        event_date: payload.eventDate || new Date().toISOString().split('T')[0],
        guest_count: payload.guestCount,
        message: payload.message
    };

    const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendPayload),
    });

    if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as any;
        throw new Error(body.error ?? `Request failed with status ${response.status}`);
    }

    return response.json();
}
