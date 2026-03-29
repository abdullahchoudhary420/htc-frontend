import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Check, Star, Shield, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function CorporateEventsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Ice Cream Catering",
    "provider": { "@type": "LocalBusiness", "name": "Hometown Catering", "url": "https://hometown-catering.com", "telephone": "+1-843-906-0776" },
    "areaServed": "Charleston County and Berkeley County, SC",
    "description": "Professional ice cream truck catering for corporate events, employee appreciation, company picnics, and client events in Charleston SC. Fully licensed, insured, background-checked drivers.",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <SEO
        title="Corporate Ice Cream Catering Charleston SC | Hometown Catering"
        description="Professional ice cream truck catering for corporate events in Charleston, SC. Employee appreciation, company picnics, client events, office lunches. Fully licensed, insured & background-checked. Serving North Charleston, Mount Pleasant & all of Charleston County."
        canonical="https://hometown-catering.com/corporate-events"
        keywords="corporate ice cream catering Charleston SC, employee appreciation ice cream truck Charleston, corporate event ice cream South Carolina, company picnic catering Charleston, office event ice cream truck"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Briefcase className="h-14 w-14 text-bronze mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate Event Ice Cream Truck in Charleston, SC
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Boost morale, impress clients, and make your next corporate event in Charleston one your team
            won't forget. Professional ice cream truck catering with zero setup stress on your end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-xl font-bold shadow-lg">
                Get a Corporate Quote
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
              "✅ Fully Licensed & Insured",
              "✅ Background-Checked Drivers",
              "✅ 5-Star Rated Service",
              "✅ Invoice & Receipt Available",
            ].map((item, i) => (
              <div key={i} className="font-semibold text-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Corporate Ice Cream Catering — Every Company Event in Charleston
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Fortune 500 office appreciation events to local small business open houses, Hometown
              Catering delivers a professional, crowd-pleasing experience. No competitor in Charleston has
              a dedicated corporate catering program — that's your advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Employee Appreciation Events",
                desc: "Show your team you care. A surprise ice cream truck visit during lunch or after a big project launch is the morale boost that actually works. Employees remember it for years.",
              },
              {
                icon: "☀️",
                title: "Company Picnics & Summer Events",
                desc: "The perfect complement to any outdoor company event. Our truck serves 50–500+ employees efficiently in your parking lot, park, or campus grounds — anywhere in Charleston County.",
              },
              {
                icon: "🤝",
                title: "Client Appreciation Events",
                desc: "Impress clients at your next open house, ribbon cutting, or grand opening with a fully branded, professional ice cream experience that sets you apart from competitors.",
              },
              {
                icon: "🎓",
                title: "Onboarding & New Hire Events",
                desc: "Welcome new team members with style. An ice cream truck at orientation or employee week creates an immediate positive association with your company culture.",
              },
              {
                icon: "📊",
                title: "Conference & Trade Show Catering",
                desc: "Stand out at expos and trade events. Our truck generates foot traffic and creates a memorable interaction point around your booth or conference area.",
              },
              {
                icon: "🛡️",
                title: "Fully Insured & Professional",
                desc: "Certificate of insurance available on request. We meet venue and corporate site requirements. Background-checked drivers, health department compliant, and fully licensed in SC.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 border border-bronze/10">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us for Corporate */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-dark mb-6">
                Why Charleston Companies Choose Hometown Catering
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Shield className="h-5 w-5 text-bronze" />, title: "Licensed, Insured & Compliant", desc: "We meet all corporate venue requirements. COI available. Health department approved." },
                  { icon: <Star className="h-5 w-5 text-bronze" />, title: "5-Star Reviews from Corporate Clients", desc: "Charleston companies trust us. We've served teams from 50 to 500+ employees without a single complaint." },
                  { icon: <Check className="h-5 w-5 text-bronze" />, title: "Flexible Billing", desc: "Invoice-based billing available for corporate accounts. Per-person or flat-rate pricing. We make expensing easy." },
                  { icon: <Check className="h-5 w-5 text-bronze" />, title: "Zero Setup Work For You", desc: "Our team handles everything — arrival, setup, serving, and cleanup. Your only job is telling your team the truck is coming." },
                  { icon: <Check className="h-5 w-5 text-bronze" />, title: "Adult Cocktail Pops Available", desc: "For after-5 corporate events, our adult cocktail ice pops with William Wolf Bourbon and Topper's Rhum are a huge hit. 21+ only." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-bold text-slate-dark">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-dark text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Corporate Booking — What to Expect</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong className="text-white">Step 1:</strong> Submit your event details online or call us at (843) 906-0776. We respond within 24 hours.
                </p>
                <p>
                  <strong className="text-white">Step 2:</strong> We send a custom quote with menu options and pricing. Corporate invoicing available.
                </p>
                <p>
                  <strong className="text-white">Step 3:</strong> Confirm, sign, and deposit. We handle the rest including COI if required by your venue.
                </p>
                <p>
                  <strong className="text-white">Step 4:</strong> On event day, our truck arrives early, serves efficiently, and leaves your space clean.
                </p>
              </div>
              <Link to="/booking" className="block mt-6">
                <Button className="w-full bg-bronze hover:bg-bronze/90 text-white font-bold py-3">
                  Request Corporate Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-8">
            Industries We Serve in Charleston, SC
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              "Technology & Software", "Healthcare & Medical", "Real Estate & Developers",
              "Financial Services", "Law Firms & Legal", "Hospitality & Hotels",
              "Construction & Contractors", "Government & Military", "Education & Schools",
              "Retail & Consumer Brands", "Nonprofits & Charities", "Media & Marketing",
            ].map((industry, i) => (
              <div key={i} className="bg-cream rounded-lg p-3 text-sm text-gray-700 text-center font-medium">
                {industry}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don't see your industry? We've catered for nearly every type of business in Charleston County. Reach out and let's discuss your event.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="text-bronze border-bronze hover:bg-bronze/5 px-8 py-3">
                Contact Us About Your Corporate Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Star className="h-8 w-8 text-yellow-400 fill-current mx-auto mb-4" />
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "Hired them for our corporate summer event. The adult popsicles were a huge hit! Great quality ice cream. Their ice cream truck was so cool and the staff was incredibly friendly and organized."
          </blockquote>
          <div className="font-bold text-slate-dark">— Michael R.</div>
          <div className="text-gray-500 text-sm">Corporate Event, North Charleston SC</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bronze text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Wow Your Team in Charleston?</h2>
          <p className="text-white/90 text-lg mb-8">
            Book Charleston's most professional ice cream truck catering for your next corporate event. No competitor has this level of corporate service — only Hometown Catering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-white text-bronze hover:bg-white/90 px-10 py-4 text-xl font-bold shadow-lg">
                Book Corporate Event
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
