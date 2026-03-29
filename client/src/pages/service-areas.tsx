import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const towns = [
  {
    name: "Charleston",
    description:
      "The heart of our operation. We serve weddings, corporate picnics, HOA block parties, and birthday celebrations throughout downtown Charleston and its historic neighborhoods. Whether you're hosting at a waterfront venue or a backyard in the French Quarter, Hometown Catering brings the fun right to you.",
  },
  {
    name: "North Charleston",
    description:
      "North Charleston is one of our most active service areas. From neighborhoods like Park Circle to the Tanger Outlets corridor, we roll to company picnics, school events, and community festivals. Our fully stocked ice cream truck makes any North Charleston event unforgettable.",
  },
  {
    name: "Mount Pleasant",
    description:
      "Mount Pleasant's growing neighborhoods from I'On to Carolina Park trust Hometown Catering for graduation parties, HOA summer events, and wedding receptions. We know the area well and arrive on time, every time, fully stocked with Blue Bunny, Good Humor, and adult cocktail pops.",
  },
  {
    name: "Summerville",
    description:
      "Summerville families and corporate clients book us year-round for birthday parties, school field days, and office appreciation events. We cover all of Summerville including Nexton, The Ponds, and Downtown Summerville. Book 2–3 weeks ahead during summer — we fill up fast.",
  },
  {
    name: "Goose Creek",
    description:
      "Goose Creek HOA communities and local businesses love our ice cream truck catering. From employee appreciation days at the naval base area to neighborhood block parties, we bring premium ice cream treats and adult cocktail pops to every Goose Creek event.",
  },
  {
    name: "Hanahan",
    description:
      "Serving Hanahan's charming residential neighborhoods and local events with our signature ice cream truck service. School fundraisers, birthday parties, and summer block parties — Hanahan residents count on Hometown Catering to deliver smiles.",
  },
  {
    name: "James Island",
    description:
      "James Island weddings and family celebrations are a specialty. The laid-back Lowcountry vibe of James Island is a perfect match for our vintage ice cream truck. We serve venues, parks, and private homes throughout this beloved Charleston peninsula community.",
  },
  {
    name: "West Ashley",
    description:
      "West Ashley's diverse neighborhoods from Avondale to Bees Ferry trust Hometown Catering for corporate catering events, birthday parties, and HOA celebrations. We're familiar with every corner of West Ashley and always arrive with a full truck and friendly staff.",
  },
  {
    name: "Daniel Island",
    description:
      "Daniel Island's upscale residential and corporate environment is perfect for our professional ice cream catering service. We serve Daniel Island Club events, private neighborhood parties, corporate campus lunches, and family celebrations throughout this premier planned community.",
  },
  {
    name: "Moncks Corner",
    description:
      "Moncks Corner residents can now enjoy the same premium ice cream truck experience as downtown Charleston. We serve school events, birthday parties, and community festivals throughout Berkeley County's seat. Hometown Catering brings the Lowcountry's favorite dessert catering to your door.",
  },
  {
    name: "Johns Island",
    description:
      "The farms, venues, and growing neighborhoods of Johns Island deserve premium ice cream catering. From weddings at Bohemian Hotel Montage to backyard birthday parties, our ice cream truck and cocktail pops make every Johns Island event extraordinary.",
  },
  {
    name: "Folly Beach",
    description:
      "Folly Beach festivals, surf competitions, and waterfront parties are elevated with Hometown Catering's ice cream truck. We navigate Folly's beach roads to deliver cold, refreshing treats on even the hottest South Carolina days. Perfect for outdoor events year-round.",
  },
  {
    name: "Isle of Palms",
    description:
      "Isle of Palms' resort atmosphere calls for something special — our premium ice cream truck complete with adult cocktail pops made with William Wolf Bourbon and Topper's Rhum. IOP weddings, family reunions, and corporate retreats trust Hometown Catering to deliver.",
  },
  {
    name: "Sullivan's Island",
    description:
      "Sullivan's Island is one of Charleston's most exclusive areas, and we serve it with the same care and professionalism. Intimate weddings, family parties, and private events on Sullivan's Island get the full Hometown Catering experience — classic treats plus premium adult pops.",
  },
  {
    name: "Ladson",
    description:
      "Ladson's growing community between Summerville and North Charleston is well within our service area. Block parties, HOA events, and birthday celebrations in Ladson are served with our full truck — Blue Bunny novelties, Good Humor bars, and cocktail ice pops.",
  },
  {
    name: "Jedburg",
    description:
      "Jedburg and the growing Summerville corridor are part of our Berkeley County service zone. We bring our ice cream truck and adult popsicle catering to corporate parks, subdivision events, and private parties throughout this rapidly developing area.",
  },
  {
    name: "Ridgeville",
    description:
      "Ridgeville residents and businesses in the Berkeley County interior can count on Hometown Catering for employee appreciation events, school functions, and community celebrations. We travel throughout Berkeley County to make sure every community has access to the Lowcountry's best ice cream truck.",
  },
  {
    name: "Bonneau",
    description:
      "Bonneau and the Lake Moultrie corridor deserve sweet Lowcountry fun. Whether it's a lakefront birthday party or a community cookout, Hometown Catering's ice cream truck delivers premium ice cream and novelties to your Bonneau event.",
  },
  {
    name: "Cross",
    description:
      "Cross, SC and its surrounding rural communities are part of our expanding Berkeley County service area. We bring full ice cream truck service — complete menu, friendly staff, and adult cocktail pops — to all events in this area.",
  },
  {
    name: "St. Stephen",
    description:
      "St. Stephen events get the full Hometown Catering experience. From school fundraisers to church festivals and private birthdays, we serve St. Stephen and surrounding Berkeley County communities with our complete ice cream truck menu.",
  },
  {
    name: "Huger",
    description:
      "Huger and the Francis Marion Forest corridor trust Hometown Catering for outdoor events and community gatherings. Our ice cream truck is well-suited for rural venues and open-air events throughout this scenic Berkeley County area.",
  },
  {
    name: "Awendaw",
    description:
      "Awendaw's rural beauty and growing residential neighborhoods are within our service zone. We serve private events, school functions, and neighborhood gatherings in Awendaw with the same premium ice cream service Charleston's most popular areas enjoy.",
  },
  {
    name: "McClellanville",
    description:
      "McClellanville's charming fishing village atmosphere makes for magical events. Hometown Catering's vintage ice cream truck has served private beach parties, family reunions, and community festivals in McClellanville and the Cape Romain area.",
  },
  {
    name: "Lincolnville",
    description:
      "Lincolnville and its historic community are served by Hometown Catering's full ice cream truck experience. Community events, birthday parks, and local celebrations in Lincolnville get the sweet treatment with our classic Blue Bunny and Good Humor selections.",
  },
  {
    name: "Ravenel",
    description:
      "Ravenel's rural community and growing neighborhoods are in reach. Our ice cream truck travels to Ravenel for family birthday parties, community cookouts, and rural venue weddings. Adult cocktail pops included for 21+ guests.",
  },
  {
    name: "Hollywood",
    description:
      "Hollywood, SC brings Southern charm to every event, and Hometown Catering adds the sweetness. We serve Hollywood area weddings, private parties, and community events with our full ice cream catering menu including premium adult cocktail ice pops.",
  },
  {
    name: "Meggett",
    description:
      "Meggett's peaceful rural settings and scenic venues are perfect for our ice cream truck catering. Intimate weddings, family reunions, and farm events in Meggett are made more memorable with Hometown Catering's premium ice cream and cocktail pop service.",
  },
  {
    name: "Monks Corner",
    description:
      "Moncks Corner (Berkeley County seat) and the surrounding Lake Moultrie communities count on Hometown Catering for school events, HOA block parties, and private celebrations. We bring the full ice cream truck experience — classic treats, novelties, and adult cocktail pops — to all Berkeley County events.",
  },
];

export default function ServiceAreas() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Ice Cream Truck Catering",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Hometown Catering",
      "url": "https://hometown-catering.com",
      "telephone": "+1-843-906-0776",
    },
    "areaServed": towns.map((t) => ({
      "@type": "City",
      "name": `${t.name}, SC`,
    })),
    "description":
      "Ice cream truck catering service serving 28+ cities and towns throughout Charleston County and Berkeley County, South Carolina.",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <SEO
        title="Ice Cream Truck Service Areas — Charleston County & Berkeley County SC | Hometown Catering"
        description="Hometown Catering serves 28+ cities across Charleston County and Berkeley County SC — from Charleston and Mount Pleasant to Summerville, Goose Creek, Moncks Corner, and beyond. Book your ice cream truck today."
        canonical="https://hometown-catering.com/service-areas"
        keywords="ice cream truck Charleston County SC, ice cream truck Berkeley County SC, ice cream truck North Charleston, ice cream truck Mount Pleasant SC, ice cream truck Summerville SC, ice cream truck Goose Creek SC, mobile ice cream catering South Carolina"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            <MapPin className="h-12 w-12 text-bronze" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ice Cream Truck Service Areas in Charleston &amp; Berkeley County, SC
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Hometown Catering rolls to 28+ cities and towns across the Lowcountry. If you don't see your
            town listed, call us — chances are we serve you too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-lg font-bold shadow-lg">
                Book Your Event
              </Button>
            </Link>
            <a href="tel:+18439060776">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" /> (843) 906-0776
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Towns Grid Intro */}
      <section className="py-10 bg-bronze text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-lg font-semibold">
            Serving all of Charleston County &amp; Berkeley County — 28+ towns including Charleston, North
            Charleston, Mount Pleasant, Summerville, Goose Creek, Moncks Corner &amp; more
          </p>
        </div>
      </section>

      {/* Town Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Every Town We Serve — Ice Cream Truck Catering Near You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Their services page is down. Ours is live. If you're looking for an ice cream truck in any of
              the towns below, Hometown Catering is your local, licensed, and insured choice throughout the
              Lowcountry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {towns.map((town, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl p-6 border border-bronze/10 hover:border-bronze/40 transition-colors"
              >
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-bronze mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-dark">
                    Ice Cream Truck {town.name}, SC
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{town.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Callout */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-dark mb-6">
            Don't See Your Town? We Probably Still Come to You.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our service area covers all of Charleston County and Berkeley County, SC — that's thousands of
            square miles of Lowcountry neighborhoods, farms, waterfront venues, and suburban communities. If
            you're within 60 miles of downtown Charleston, reach out and we'll make it work.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We serve ice cream truck rentals for{" "}
            <strong>weddings, corporate events, birthday parties, HOA events, school events, and private
              parties</strong>{" "}
            throughout the entire area. Every booking includes our fully-licensed, insured, and
            background-checked team with Blue Bunny, Good Humor, and adult cocktail ice pops available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-lg font-bold shadow-lg">
                Book Now — Check Availability
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-bronze border-bronze hover:bg-bronze/5 px-8 py-4 text-lg">
                Ask About Your Location
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-dark text-center mb-8">
            Explore Our Catering Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: "/weddings", label: "Wedding Catering" },
              { to: "/corporate-events", label: "Corporate Events" },
              { to: "/adult-cocktail-pops", label: "Adult Cocktail Pops" },
              { to: "/birthday-parties", label: "Birthday Parties" },
              { to: "/hoa-community-events", label: "HOA Events" },
              { to: "/book", label: "Book a Truck" },
              { to: "/menu", label: "View Menu" },
              { to: "/contact", label: "Contact Us" },
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
    </div>
  );
}
