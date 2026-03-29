import SEO from "@/components/SEO";
import BookingFlow from "@/components/BookingFlow";

export default function Booking() {
    return (
        <div className="min-h-screen">
            <SEO
                title="Book an Ice Cream Truck | Hometown Catering Charleston SC"
                description="Check real-time availability and get an instant price quote for your event. Book Hometown Catering's ice cream truck in Charleston SC for weddings, birthdays and corporate events."
                canonical="https://hometown-catering.com/booking"
                keywords="book ice cream truck Charleston, ice cream catering quote, event catering booking"
            />

            {/* Hero */}
            <section className="py-16 bg-white text-center">
                <h1 className="text-4xl font-bold text-slate-dark mb-4">
                    Book Now
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    Pick your event date and time — we'll show you how many vans are free
                    and give you a live pricing estimate instantly.
                </p>
            </section>

            {/* Booking Form */}
            <section className="pb-20 bg-cream">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BookingFlow />
                </div>
            </section>

            {/* Pricing Info */}
            <section className="py-12 bg-white">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-dark mb-6">
                        Simple, Transparent Pricing
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="border border-bronze/20 rounded-xl p-6 bg-cream flex flex-col items-center">
                            <div className="text-3xl font-bold text-bronze mb-1">$50<span className="text-lg font-normal text-gray-500">/hr</span></div>
                            <div className="font-semibold text-slate-dark mb-2">Daytime Service</div>
                            <div className="text-sm text-gray-600">9:00 AM - 6:00 PM</div>
                            <div className="text-sm font-medium text-bronze mt-1">+ cost of ice cream</div>
                            <div className="mt-auto pt-3 text-sm font-medium text-gray-700 bg-white rounded-lg px-3 py-1.5 inline-block">
                                $150 minimum
                            </div>
                        </div>
                        <div className="border border-bronze/20 rounded-xl p-6 bg-cream flex flex-col items-center">
                            <div className="text-3xl font-bold text-bronze mb-1">$75<span className="text-lg font-normal text-gray-500">/hr</span></div>
                            <div className="font-semibold text-slate-dark mb-2">Evening Service</div>
                            <div className="text-sm text-gray-600">6:00 PM - 9:00 PM</div>
                            <div className="text-sm font-medium text-bronze mt-1">+ cost of ice cream</div>
                            <div className="mt-auto pt-3 text-sm font-medium text-gray-700 bg-white rounded-lg px-3 py-1.5 inline-block">
                                $300 minimum
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">
                        Fleet capacity: up to 6 vans simultaneously. Have questions?{" "}
                        <a href="/contact" className="text-bronze hover:underline font-medium">
                            Contact us
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
}
