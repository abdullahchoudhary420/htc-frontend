import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Star, Check, Phone } from "lucide-react";

export default function HOAEventsPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="HOA & Community Event Ice Cream Truck Charleston SC | Hometown Catering"
        description="Ice cream truck catering for HOA events, block parties, and community celebrations in Charleston SC. Serving neighborhoods in Charleston County & Berkeley County. Fully licensed & insured. Book Hometown Catering today."
        canonical="https://hometown-catering.com/hoa-community-events"
        keywords="HOA ice cream truck Charleston SC, community event ice cream catering SC, neighborhood block party ice cream truck Charleston, HOA event catering Charleston County, community picnic ice cream truck South Carolina"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Home className="h-14 w-14 text-bronze mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HOA & Community Event Ice Cream Truck — Charleston, SC
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Make your next HOA block party, neighborhood pool party, or community celebration the one
            everyone actually shows up to. Hometown Catering brings professional ice cream truck service
            to HOA communities throughout Charleston County and Berkeley County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-xl font-bold shadow-lg">
                Book for Your HOA Event
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Why Charleston HOAs Love Hometown Catering
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Running a community event is stressful enough — your ice cream truck should be the easiest
              part. Hometown Catering handles everything from logistics to serving to cleanup. Your HOA
              board just takes the credit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Serves All Ages — Kids to Adults",
                desc: "Classic Blue Bunny and Good Humor treats for families and kids. Premium adult cocktail ice pops (21+) available for the grown-ups. One truck, every guest happy.",
              },
              {
                title: "No HOA Venue Headaches",
                desc: "Our truck is self-contained. No external power required. No kitchen setup. We park where you tell us, serve, and leave. Simple.",
              },
              {
                title: "Fully Licensed & Insured",
                desc: "Certificate of insurance available for HOA community agreements. We're licensed by the state of South Carolina and health department compliant.",
              },
              {
                title: "Drives HOA Attendance",
                desc: "Nothing gets neighbors out of their houses like announcing the ice cream truck is coming. Community engagement guaranteed.",
              },
              {
                title: "Flexible Scheduling",
                desc: "Pool parties, summer cookouts, fall festivals, end-of-school celebrations — we work around your community calendar, not the other way around.",
              },
              {
                title: "Affordable Group Pricing",
                desc: "HOA group rates available. Per-person pricing from $3–7/guest makes budgeting simple. Flat-rate packages also available for smaller planned events.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-cream rounded-xl border border-bronze/10">
                <Check className="h-6 w-6 text-bronze flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-dark mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Community Types */}
          <div className="bg-slate-dark text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Community Events We Serve in Charleston SC</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {[
                "🏊 Pool Parties", "🎆 4th of July Celebrations", "🍂 Fall Festivals",
                "🏘️ Block Parties", "🎄 Holiday Events", "🏫 School Year Kickoffs",
                "🌸 Spring Fling Events", "🎊 Subdivision Grand Openings",
                "🏆 Community Awards Events", "🎉 Year-End Celebrations",
                "🤝 Meet Your Neighbor Events", "👪 Family Fun Days",
              ].map((event, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-3 text-sm text-white/80">{event}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOA Neighborhoods We Serve */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-8">
            HOA Communities We've Served in the Charleston Area
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            From massive planned communities in Summerville to intimate neighborhoods in West Ashley, we've
            been the ice cream truck for HOA events across all of Charleston County and Berkeley County.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              "Summers Corner, Summerville", "Carolina Park, Mount Pleasant",
              "Nexton, Summerville", "The Ponds, Summerville",
              "I'On, Mount Pleasant", "Park Circle, North Charleston",
              "Mixson, North Charleston", "Oak Park, West Ashley",
              "Daniel Island neighborhoods", "Avondale, West Ashley",
              "Brickyard Plantation, Mt. Pleasant", "Dunes West, Mt. Pleasant",
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-lg p-3 text-sm text-gray-700 font-medium text-center border border-bronze/10">
                {n}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            Don't see your community?{" "}
            <a href="tel:+18439060776" className="text-bronze font-semibold hover:underline">Call us</a> — we likely serve your area.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "They were amazing at our HOA block party in Summerville. Every kid loved it, and even the adults were lined up for the cocktail pops. Professional, punctual, and absolutely worth it."
          </blockquote>
          <div className="font-bold text-slate-dark">— Sarah M.</div>
          <div className="text-gray-500 text-sm">HOA Block Party, Summerville SC</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bronze text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Book Charleston's Favorite HOA Ice Cream Truck</h2>
          <p className="text-white/90 text-lg mb-8">
            Community summer events book fast — especially May through September. Reserve your HOA event
            date now to guarantee the ice cream truck that your whole neighborhood will remember.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking"><Button className="bg-white text-bronze hover:bg-white/90 px-10 py-4 text-xl font-bold shadow-lg">Book HOA Event Now</Button></Link>
            <a href="tel:+18439060776"><Button variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-4 text-xl">Call (843) 906-0776</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
