import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wine, Star, Check, Phone, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function AdultCocktailPopsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Adult Cocktail Ice Pops — Charleston SC",
    "description": "Handcrafted alcoholic ice cream pops made with William Wolf Bourbon, Topper's Rhum, and Goza Tequila. 8–10% ABV. Available for events in Charleston SC. 21+ only.",
    "brand": { "@type": "Brand", "name": "Hometown Catering" },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStoreOnly",
      "seller": { "@type": "LocalBusiness", "name": "Hometown Catering", "url": "https://hometown-catering.com" },
    },
  };

  const flavors = [
    { spirit: "William Wolf Bourbon", flavors: ["Bourbon Peach", "Bourbon Vanilla Bean", "Bourbon Caramel", "Mint Julep Pop", "Bourbon Lemonade"], abv: "~9% ABV" },
    { spirit: "Topper's Rhum", flavors: ["Coconut Rhum", "Tropical Punch", "Pineapple Rhum", "Strawberry Daiquiri"], abv: "~8% ABV" },
    { spirit: "Goza Tequila", flavors: ["Classic Margarita", "Mango Tequila", "Paloma Pop", "Watermelon Tequila", "Spicy Mango Margarita"], abv: "~9–10% ABV" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <SEO
        title="Adult Cocktail Ice Pops for Events in Charleston SC | Hometown Catering"
        description="Charleston's ONLY ice cream truck with handcrafted adult cocktail ice pops. William Wolf Bourbon, Topper's Rhum & Goza Tequila. 8–10% ABV. Available for weddings, corporate events & adult parties in Charleston SC. 21+ only."
        canonical="https://hometown-catering.com/adult-cocktail-pops"
        keywords="alcoholic ice cream Charleston SC, adult cocktail pops Charleston, alcoholic popsicles wedding Charleston, William Wolf bourbon pops SC, adult ice pop catering South Carolina, cocktail pops wedding Charleston SC"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Wine className="h-14 w-14 text-bronze mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Adult Alcoholic Ice Cream Pops — Charleston, SC Catering
          </h1>
          <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Charleston's ONLY ice cream truck serving handcrafted adult cocktail ice pops made with
            William Wolf Bourbon, Topper's Rhum, and Goza Tequila. 8–10% ABV. Zero competition.
          </p>
          <div className="inline-block bg-bronze/20 border border-bronze rounded-lg px-4 py-2 mb-8">
            <span className="text-bronze font-bold">🔞 Must Be 21+ to Purchase</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-xl font-bold shadow-lg">
                Book for Your Event
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

      {/* Unique Differentiator Banner */}
      <section className="py-8 bg-bronze text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-semibold">
            🏆 Charleston's ONLY ice cream truck with premium alcoholic cocktail pops — no competitor offers this experience
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-dark mb-6">
                What Are Adult Cocktail Ice Pops?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our adult cocktail ice pops are handcrafted frozen treats made with real, premium spirits — not
                artificial flavoring. Each pop contains 8–10% ABV and is made to the same quality standard as
                your favorite craft cocktail, just frozen on a stick.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We partner with <strong>William Wolf Bourbon</strong>, <strong>Topper's Rhum</strong>, and{" "}
                <strong>Goza Tequila</strong> — brands chosen for their quality and interesting flavor profiles
                that translate beautifully into frozen form.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Available exclusively through Hometown Catering for private events in Charleston SC.
                <em> No bar. No plastic cups. No mess.</em> Just an ice-cold cocktail pop handed directly to
                your adult guests.
              </p>
              <div className="space-y-2">
                {[
                  "14 unique cocktail flavors available",
                  "8–10% ABV — real spirits, real cocktails",
                  "Serves 21+ guests at weddings, corporate events, and private parties",
                  "Age verification required — ID checked for every adult pop",
                  "Can be served alongside our regular ice cream menu (kids and adults served together)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-dark mb-4">Events That Love Our Cocktail Pops</h3>
              <div className="space-y-3">
                {[
                  { icon: "💒", event: "Weddings", desc: "The #1 request from Charleston brides. Serve both kids' treats and adult pops at the same truck." },
                  { icon: "🏢", event: "Corporate After-Hours Events", desc: "Replace the open bar with something more memorable — and photogenic." },
                  { icon: "🥂", event: "Bachelorette & Bachelor Parties", desc: "Roam, party, and enjoy Bourbon Peach pops in the Charleston heat." },
                  { icon: "🏠", event: "HOA Summer Block Parties", desc: "A family event where adults can also have their fun." },
                  { icon: "🎊", event: "Private Adult Celebrations", desc: "Birthdays, anniversaries, retirement parties — any adult event in the Charleston area." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-bold text-slate-dark text-sm">{item.event}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flavor Menu */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-dark text-center mb-4">
              All 14 Adult Cocktail Pop Flavors — Charleston, SC
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Every flavor uses real premium spirits. Served frozen, individually wrapped, and handed directly to your adult guests.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {flavors.map((category, i) => (
                <div key={i} className="bg-slate-dark text-white rounded-xl p-6">
                  <div className="text-bronze font-bold text-lg mb-1">{category.spirit}</div>
                  <div className="text-white/60 text-xs mb-4">{category.abv}</div>
                  <ul className="space-y-2">
                    {category.flavors.map((flavor, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/80">
                        <span className="w-2 h-2 bg-bronze rounded-full flex-shrink-0" />
                        {flavor}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 21+ Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <div className="flex gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-800 mb-2">21+ Age Requirement — Strictly Enforced</h3>
                <p className="text-amber-700 text-sm">
                  All adult cocktail ice pops are available exclusively to guests age 21 and over. Valid government-issued
                  ID is required. Our staff is trained in responsible alcohol service and will not serve alcohol pops to
                  anyone who cannot verify their age. Hometown Catering complies with all South Carolina alcohol beverage
                  laws and regulations. Intoxication policies apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword Section for SEO */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-6">
            Searching for "Alcoholic Ice Cream Charleston SC"? You Found Us.
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6 max-w-3xl mx-auto">
            If you've been searching for <em>alcoholic ice cream pops Charleston</em>, <em>cocktail popsicles for weddings SC</em>,
            or <em>adult ice pop catering near Charleston</em> — Hometown Catering is the only answer.
            We're the only ice cream catering company in Charleston County to offer this service, and we've
            been perfecting it at weddings, corporate events, and private parties throughout the Lowcountry.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              "Alcoholic ice cream Charleston SC",
              "Cocktail ice pops wedding SC",
              "Adult popsicle catering Charleston",
              "William Wolf bourbon pops",
              "Topper's Rhum cocktail pops",
              "Goza Tequila frozen pops SC",
              "Boozy popsicles wedding Charleston",
              "21+ ice cream truck SC",
              "Adult frozen cocktails Charleston",
            ].map((kw, i) => (
              <div key={i} className="bg-white rounded-lg px-3 py-2 text-sm text-gray-600 text-center border border-bronze/10">
                {kw}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-4 max-w-2xl mx-auto">
            "The adult cocktail pops were a HUGE hit at our wedding. Every single adult guest was lined up for the bourbon peach pops. It was the most talked-about part of our reception. Book them NOW."
          </blockquote>
          <div className="font-bold text-slate-dark">— Ashley M.</div>
          <div className="text-gray-500 text-sm">Wedding, Mount Pleasant SC</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Add Adult Cocktail Pops to Your Charleston Event
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us to add our signature adult cocktail ice pop service to any booking. Available for weddings, corporate events, bachelorette parties, and private adult events throughout Charleston SC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-10 py-4 text-xl font-bold shadow-lg">
                Book With Cocktail Pops
              </Button>
            </Link>
            <a href="tel:+18439060776">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-4 text-xl">
                Call (843) 906-0776
              </Button>
            </a>
          </div>
          <p className="text-sm text-white/60 mt-6">
            <Link to="/weddings" className="underline">Wedding Catering</Link> ·{" "}
            <Link to="/corporate-events" className="underline">Corporate Events</Link> ·{" "}
            <Link to="/menu" className="underline">Full Menu</Link> ·{" "}
            <Link to="/book" className="underline">Pricing & Booking</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
