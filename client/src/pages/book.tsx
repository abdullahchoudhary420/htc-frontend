import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, DollarSign, Star, Check, Phone, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function BookPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent an ice cream truck in Charleston, SC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hometown Catering ice cream truck packages start from $150 in Charleston, SC. Pricing depends on event size, duration, product selection, and travel distance. Contact us for a custom quote tailored to your event.",
        },
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book an ice cream truck in Charleston?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 4–8 weeks in advance for weddings and large events, especially during spring and summer. For smaller events in Charleston, 2–3 weeks is typically sufficient. We occasionally accommodate last-minute bookings — call us.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer adult cocktail pops or alcoholic ice cream at events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We carry premium adult cocktail ice pops made with William Wolf Bourbon, Topper's Rhum, and Goza Tequila — ranging from 8–10% ABV. Available for weddings, corporate events, and adult gatherings in Charleston, SC. Must be 21+.",
        },
      },
      {
        "@type": "Question",
        "name": "What areas near Charleston do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of Charleston County and Berkeley County including North Charleston, Mount Pleasant, Summerville, Goose Creek, Hanahan, James Island, West Ashley, Daniel Island, Moncks Corner, Johns Island, Folly Beach, Isle of Palms, and 28+ total towns.",
        },
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hometown Catering is fully licensed, insured, and our drivers are background-checked. We are a professional catering operation that meets all South Carolina health and business code requirements.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Ice Cream Truck Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Hometown Catering",
      "url": "https://hometown-catering.com",
      "telephone": "+1-843-906-0776",
    },
    "areaServed": "Charleston County and Berkeley County, SC",
    "offers": [
      { "@type": "Offer", "name": "Wedding Ice Cream Truck Catering", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "350" } },
      { "@type": "Offer", "name": "Corporate Event Ice Cream Catering" },
      { "@type": "Offer", "name": "Birthday Party Ice Cream Truck Rental" },
      { "@type": "Offer", "name": "Adult Cocktail Ice Pops (8-10% ABV)" },
      { "@type": "Offer", "name": "HOA and Community Event Catering" },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <SEO
        title="Book an Ice Cream Truck in Charleston SC | Hometown Catering"
        description="Hire Charleston's top-rated ice cream truck for weddings, corporate events, birthday parties, and HOA events. Packages from $350. Fully licensed & insured. Serving all of Charleston County & Berkeley County SC."
        canonical="https://hometown-catering.com/book"
        keywords="ice cream truck rental Charleston SC, hire ice cream truck Charleston, book ice cream truck South Carolina, ice cream truck catering price Charleston, ice cream truck for rent Charleston"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Truck className="h-14 w-14 text-bronze" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book an Ice Cream Truck for Your Event in Charleston, SC
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Charleston's most trusted ice cream truck catering. Weddings, corporate events, birthday
            parties, HOA events, and more. Fully licensed, insured, and background-checked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-xl font-bold shadow-lg">
                Book Online Now
              </Button>
            </Link>
            <a href="tel:+18439060776">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-4 text-xl">
                <Phone className="mr-2 h-5 w-5" /> (843) 906-0776
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-bronze py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            {[
              { icon: <Check className="h-5 w-5" />, text: "Licensed & Insured" },
              { icon: <Check className="h-5 w-5" />, text: "Background-Checked Drivers" },
              { icon: <Star className="h-5 w-5 fill-current" />, text: "5.0 Stars (24 Reviews)" },
              { icon: <Check className="h-5 w-5" />, text: "Serving 28+ SC Towns" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 font-semibold">
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              What's Included in an Ice Cream Truck Rental in Charleston
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every booking with Hometown Catering is a full-service experience. No hidden fees, no
              surprises — just premium ice cream catering delivered professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Truck className="h-8 w-8 text-bronze" />,
                title: "Fully Stocked Vintage Truck",
                desc: "Our truck arrives fully loaded with Blue Bunny, Good Humor, novelties, popsicles, and more. No restocking trips — we come prepared for your guest count.",
              },
              {
                icon: <Check className="h-8 w-8 text-bronze" />,
                title: "Professional Staff & Server",
                desc: "Our friendly, uniformed staff handles all serving, so you can enjoy your event. Background-checked and trained for every event type.",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-bronze" />,
                title: "Per-Person or Flat-Rate Packages",
                desc: "Choose a flat-rate package for private events or a per-person service rate. We offer flexible pricing to match your event size and budget.",
              },
              {
                icon: <CalendarCheck className="h-8 w-8 text-bronze" />,
                title: "Event Coordination",
                desc: "We confirm timing, parking logistics, and setup requirements in advance. On event day, we arrive early and handle everything.",
              },
              {
                icon: <Star className="h-8 w-8 text-bronze" />,
                title: "Adult Cocktail Pops (Optional)",
                desc: "Add our premium adult cocktail ice pops — William Wolf Bourbon, Topper's Rhum, Goza Tequila flavors. 8–10% ABV. 21+ only.",
              },
              {
                icon: <Clock className="h-8 w-8 text-bronze" />,
                title: "Flexible Event Duration",
                desc: "We offer 1-hour minimums with additional hours available. Short corporate lunch service or a 3-hour wedding reception — we adapt to your schedule.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 border border-bronze/10">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Ice Cream Truck Rental Pricing in Charleston, SC
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing. No surprise fees. Get a custom quote for your specific event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Starter Package",
                range: "From $350",
                details: ["Up to 50 guests", "1-hour service", "Classic ice cream menu", "1 staff member", "James Island, West Ashley, Charleston areas"],
                cta: "Get a Quote",
              },
              {
                title: "Standard Package",
                range: "From $500",
                details: ["51–150 guests", "2-hour service", "Full menu + novelties", "2 staff members", "Any Charleston County location"],
                cta: "Book Now",
                featured: true,
              },
              {
                title: "Premium Package",
                range: "From $750",
                details: ["150+ guests", "3-hour service", "Full menu + adult cocktail pops", "3 staff members", "All service areas incl. Berkeley County"],
                cta: "Book Now",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 text-center ${pkg.featured ? "bg-bronze text-white shadow-xl scale-105" : "bg-white border border-bronze/20"}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${pkg.featured ? "text-white" : "text-slate-dark"}`}>
                  {pkg.title}
                </h3>
                <div className={`text-3xl font-bold mb-4 ${pkg.featured ? "text-white" : "text-bronze"}`}>
                  {pkg.range}
                </div>
                <ul className="text-left mb-6 space-y-2">
                  {pkg.details.map((d, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${pkg.featured ? "text-white/90" : "text-gray-600"}`}>
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button className={pkg.featured ? "bg-white text-bronze hover:bg-white/90 w-full font-bold" : "bg-bronze text-white hover:bg-bronze/90 w-full"}>
                    {pkg.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm">
            * Prices vary based on event location, duration, and menu selection. Per-person rates available for larger events ($3–7/person typical range). Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-10">
            Events We Cater in Charleston, SC
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: "/weddings", label: "💒 Weddings" },
              { to: "/corporate-events", label: "🏢 Corporate Events" },
              { to: "/birthday-parties", label: "🎂 Birthday Parties" },
              { to: "/hoa-community-events", label: "🏘️ HOA Events" },
              { to: "/adult-cocktail-pops", label: "🍹 Adult Cocktail Pops" },
              { to: "/service-areas", label: "📍 All Service Areas" },
              { to: "/menu", label: "🍦 View Full Menu" },
              { to: "/contact", label: "📞 Contact Us" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border border-bronze/20 rounded-lg p-4 text-center text-slate-dark font-medium hover:bg-bronze hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-10">
            Frequently Asked Questions — Ice Cream Truck Rental Charleston SC
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does it cost to rent an ice cream truck in Charleston, SC?",
                a: "Packages start from $350 for smaller events. Pricing depends on guest count, event duration, menu selection, and travel distance within Charleston County or Berkeley County. Per-person rates typically range from $3–7/person for larger events. Contact us for a custom quote.",
              },
              {
                q: "How far in advance should I book?",
                a: "We recommend 4–8 weeks advance for weddings and large events, especially spring/summer. For corporate events and parties, 2–3 weeks is typically fine. We occasionally accommodate last-minute bookings — just call us at (843) 906-0776.",
              },
              {
                q: "Do you offer alcoholic or adult ice cream pops?",
                a: "Yes! Our adult cocktail ice pops are made with William Wolf Bourbon, Topper's Rhum, and Goza Tequila with flavors ranging from 8–10% ABV. Available as an add-on to any booking. Must be 21+ to purchase.",
              },
              {
                q: "Are you licensed and insured?",
                a: "Absolutely. Hometown Catering is fully licensed, insured, and our drivers are background-checked. We meet all South Carolina health department and business requirements.",
              },
              {
                q: "What areas in Charleston do you serve?",
                a: "We serve all of Charleston County and Berkeley County — 28+ cities and towns including Charleston, North Charleston, Mount Pleasant, Summerville, Goose Creek, Hanahan, James Island, West Ashley, Daniel Island, Moncks Corner, Johns Island, Folly Beach, Isle of Palms, and more.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-bronze/10">
                <h3 className="font-bold text-slate-dark text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Charleston's Favorite Ice Cream Truck?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of Charleston families, couples, and companies who've made their events sweeter with Hometown Catering. Check availability now — dates fill up fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-10 py-4 text-xl font-bold shadow-lg">
                Book Online Now
              </Button>
            </Link>
            <a href="tel:+18439060776">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-4 text-xl">
                Call (843) 906-0776
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
