import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cake, Star, Check, Phone } from "lucide-react";

export default function BirthdayPartiesPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Birthday Party Ice Cream Truck Charleston SC | Hometown Catering"
        description="Make your birthday party unforgettable with Charleston's favorite ice cream truck. Hometown Catering serves birthday parties of all sizes in Charleston, Mount Pleasant, Summerville, and all of Charleston County SC."
        canonical="https://hometown-catering.com/birthday-parties"
        keywords="birthday party ice cream truck Charleston SC, ice cream truck birthday party Summerville, birthday catering Charleston SC, ice cream truck kids birthday Charleston, birthday dessert catering SC"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Cake className="h-14 w-14 text-bronze mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Birthday Party Ice Cream Truck in Charleston, SC
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Give the birthday boy or girl a party they'll never forget. Our vintage ice cream truck
            rolls to your home, park, or venue anywhere in Charleston County and Berkeley County, SC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-xl font-bold shadow-lg">
                Book for a Birthday
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

      {/* Why Ice Cream Truck for Birthday */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Why an Ice Cream Truck is the Best Birthday Party Idea in Charleston
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Forget the plain sheet cake. When the ice cream truck rolls in, kids go absolutely wild — and
              parents love it just as much. Our vintage truck is the birthday party upgrade that no one
              forgets. From first birthdays to sweet sixteens to adult milestone celebrations, Hometown
              Catering has you covered throughout the Charleston SC area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🎉", title: "Any Age, Any Size", desc: "We serve toddler birthdays, teen parties, and adult milestones. Guest counts from 20 to 500+ — we scale to your party." },
              { icon: "🍦", title: "Full Premium Menu", desc: "Blue Bunny and Good Humor novelties, ice cream sandwiches, popsicles, sno-cones, and for adults 21+, our signature cocktail ice pops." },
              { icon: "📸", title: "Incredible Photo Opportunity", desc: "Our vintage ice cream truck is a stunning backdrop for birthday party photos. Parents LOVE the Instagram-worthy shots." },
              { icon: "🏡", title: "We Come to You", desc: "Home backyard, neighborhood park, community center, venue rental — we come anywhere in Charleston County and Berkeley County." },
              { icon: "😄", title: "Kids Absolutely Love It", desc: "The truck. The music. The anticipation. Nothing creates that childhood magic better than an ice cream truck pulling up to your party." },
              { icon: "✅", title: "Zero Cleanup for You", desc: "Our staff serves every guest, handles wrappers, and leaves your space as clean as they found it. You host — we handle the rest." },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 border border-bronze/10">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Birthday Areas */}
          <div className="bg-slate-dark text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Birthday Party Delivery Across Charleston SC</h3>
            <p className="text-white/80 mb-6">
              We deliver birthday ice cream truck experiences to neighborhoods across all of Charleston County
              and Berkeley County — from the Peninsula to Summerville, Mount Pleasant to Johns Island.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-sm">
              {["Charleston", "Mt. Pleasant", "Summerville", "N. Charleston", "West Ashley", "James Island",
                "Goose Creek", "Hanahan", "Daniel Island", "Folly Beach", "Johns Island", "IOP"].map((area, i) => (
                <div key={i} className="bg-white/10 rounded px-2 py-1 text-white/80">{area}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "Amazing service! They brought their ice cream truck to my daughter's birthday party in James Island. The kids absolutely loved the variety of flavors and toppings. Professional setup and cleanup too!"
          </blockquote>
          <div className="font-bold text-slate-dark">— Sarah M.</div>
          <div className="text-gray-500 text-sm">Birthday Party, James Island SC</div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-dark mb-4">Birthday Party Pricing in Charleston SC</h2>
          <p className="text-lg text-gray-600 mb-4">
            Birthday packages start from <strong>$350</strong> for up to 50 guests. Larger parties and longer service
            times are available. Per-person rates typically range from <strong>$3–7/person</strong>. Adult cocktail pops
            available as an add-on for 21+ guests.
          </p>
          <p className="text-gray-500 mb-8">Contact us for a custom quote based on your guest count, location, and menu selection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book"><Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-3 font-bold">View Full Pricing</Button></Link>
            <Link to="/booking"><Button variant="outline" className="text-bronze border-bronze hover:bg-bronze/5 px-8 py-3">Check Availability</Button></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bronze text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Book the Birthday Truck Now — Dates Fill Fast!</h2>
          <p className="text-white/90 text-lg mb-8">
            Spring and summer birthday weekends in Charleston book out weeks in advance. Reserve your date
            today and guarantee the most talked-about birthday party in the neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking"><Button className="bg-white text-bronze hover:bg-white/90 px-10 py-4 text-xl font-bold shadow-lg">Book Now</Button></Link>
            <a href="tel:+18439060776"><Button variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-4 text-xl">Call (843) 906-0776</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
