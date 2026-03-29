import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Star, Check, Phone, Wine } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function WeddingsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Ice Cream Truck Catering",
    "provider": { "@type": "LocalBusiness", "name": "Hometown Catering", "url": "https://hometown-catering.com", "telephone": "+1-843-906-0776" },
    "areaServed": "Charleston County and Berkeley County, SC",
    "description": "Premium ice cream truck catering for weddings in Charleston SC, including adult cocktail ice pops, novelties, and Lowcountry venue experience.",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <SEO
        title="Wedding Ice Cream Truck Catering Charleston SC | Hometown Catering"
        description="Add a unique, memorable touch to your Charleston wedding with Hometown Catering's ice cream truck. Classic treats + adult cocktail ice pops. Serving Lowcountry wedding venues. Book 4–8 weeks ahead."
        canonical="https://hometown-catering.com/weddings"
        keywords="wedding ice cream truck Charleston SC, wedding dessert catering Charleston, ice cream truck wedding Lowcountry SC, adult cocktail pops wedding Charleston, wedding catering ice cream truck"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Heart className="h-14 w-14 text-bronze mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wedding Ice Cream Truck in Charleston, SC
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Make your Charleston wedding unforgettable. Our vintage ice cream truck brings sweet joy to
            your reception — classic treats for all and adult cocktail pops for the grown-ups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-xl font-bold shadow-lg">
                Check Wedding Availability
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

      {/* Why Couples Love It */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Why Charleston Couples Choose Hometown Catering for Their Wedding
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An ice cream truck at your wedding isn't just dessert — it's a moment your guests will talk
              about for years. Our vintage truck parks outside your venue and creates a late-night ice cream
              experience that feels personal, fun, and completely Lowcountry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {[
                "Unique alternative to traditional wedding cake service",
                "Adult cocktail ice pops for the bridal party and guests 21+",
                "Classic treats for flower girls, ring bearers, and families",
                "Vintage truck doubles as a gorgeous photo backdrop",
                "Flexible timing — late-night dessert or cocktail hour service",
                "Professional, uniformed staff handles all serving",
                "Fully licensed, insured, and background-checked team",
                "Serving Charleston's most prestigious Lowcountry venues",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-cream rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-dark mb-4">How It Works at Your Wedding</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Book 4–8 Weeks Out", desc: "We confirm your date, venue, guest count, and menu selection. Spring and summer dates fill quickly." },
                  { step: "2", title: "Choose Your Menu", desc: "Select from classic ice cream novelties, popsicles, sno-cones, and our signature adult cocktail ice pops." },
                  { step: "3", title: "We Arrive Early", desc: "Our truck arrives 30 minutes before service time, parks at your designated spot, and gets fully set up." },
                  { step: "4", title: "Guests Are Wowed", desc: "Your guests line up, we serve, everyone smiles. We handle cleanup completely — you just enjoy the night." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-bronze text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold text-slate-dark">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Cocktail Pops Feature */}
      <section className="py-16 bg-slate-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <Wine className="h-10 w-10 text-bronze mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Adult Cocktail Ice Pops — The Signature Wedding Upgrade
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Charleston's most unique wedding catering option. Our handcrafted adult cocktail ice pops
              feature premium spirits and are the ultimate surprise for your bridal party and adult guests.
              No other ice cream truck in Charleston SC offers this — it's our signature differentiator.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            {[
              { spirit: "William Wolf Bourbon", flavors: "Bourbon Peach, Bourbon Vanilla Bean", abv: "8–10% ABV" },
              { spirit: "Topper's Rhum", flavors: "Coconut Rhum, Tropical Punch", abv: "8–10% ABV" },
              { spirit: "Goza Tequila", flavors: "Margarita, Mango Tequila, Paloma", abv: "8–10% ABV" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <div className="font-bold text-bronze text-lg mb-2">{item.spirit}</div>
                <div className="text-white/80 text-sm mb-2">{item.flavors}</div>
                <div className="text-xs text-white/60">{item.abv} · Must be 21+</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/60 text-sm">
            All adult cocktail pops require 21+ age verification. See full menu at{" "}
            <Link to="/adult-cocktail-pops" className="text-bronze hover:underline">
              /adult-cocktail-pops
            </Link>
          </p>
        </div>
      </section>

      {/* Venues We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Lowcountry Wedding Venues We've Served
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From waterfront plantation venues to downtown Charleston ballrooms, our ice cream truck
              has been the sweet ending to hundreds of Charleston weddings. We know these venues and we
              know how to make your setup seamless.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Daniel Island venues", "IOP beach weddings", "James Island ceremonies",
              "West Ashley estates", "Downtown Charleston rooftops", "Folly Beach celebrations",
              "Mount Pleasant waterfront", "Sullivan's Island private events",
              "Summerville backyard weddings", "Goose Creek community venues",
              "Johns Island farms & barns", "Berkeley County outdoor venues",
            ].map((venue, i) => (
              <div key={i} className="bg-cream text-slate-dark text-sm font-medium rounded-lg p-3 text-center">
                {venue}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-10">
            What Charleston Couples Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Perfect addition to our wedding reception! The ice cream truck was elegant and delicious. Our guests are still talking about those amazing cocktail pops!",
                name: "Jessica & David",
                event: "Wedding Reception, Daniel Island",
              },
              {
                quote: "We added the adult cocktail pops to our wedding bar package and they were hands-down the highlight of the night. Hometown Catering was professional from booking to cleanup.",
                name: "Ashley M.",
                event: "Wedding, Mount Pleasant SC",
              },
              {
                quote: "The truck made the most beautiful backdrop for photos. Every single guest loved it — kids got classic ice cream and the wedding party got the bourbon pops. 10/10.",
                name: "Sarah & Tom K.",
                event: "Lowcountry Wedding, Folly Beach",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>
                <div className="font-bold text-slate-dark">— {t.name}</div>
                <div className="text-sm text-gray-500">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bronze text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Book Your Wedding Ice Cream Truck Today</h2>
          <p className="text-white/90 text-lg mb-8">
            Spring and summer dates go fast in Charleston. Reserve your date 4–8 weeks ahead to guarantee availability. Adult cocktail pop add-on is subject to availability — ask when you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-white text-bronze hover:bg-white/90 px-10 py-4 text-xl font-bold shadow-lg">
                Book Online Now
              </Button>
            </Link>
            <a href="tel:+18439060776">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-4 text-xl">
                Call (843) 906-0776
              </Button>
            </a>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Also explore:{" "}
            <Link to="/adult-cocktail-pops" className="underline">Adult Cocktail Pops</Link> ·{" "}
            <Link to="/menu" className="underline">Full Menu</Link> ·{" "}
            <Link to="/corporate-events" className="underline">Corporate Events</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
