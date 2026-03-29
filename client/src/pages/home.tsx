import { Button } from "@/components/ui/button";
import { IceCream, CalendarCheck, Star, Quote, Check, MapPin, Truck, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import bgImg from "@/assets/bg1.png";

export default function Home() {
  const serviceAreas = [
    "Charleston",
    "Mount Pleasant",
    "Summerville",
    "North Charleston",
    "James Island",
    "West Ashley",
    "Daniel Island",
    "Folly Beach",
    "Goose Creek",
    "Hanahan",
    "Johns Island",
    "Moncks Corner",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Ice Cream Truck Catering Charleston SC | Hometown Catering"
        description="Charleston SC's #1 ice cream truck for weddings, corporate events, birthday parties & HOA events. Blue Bunny, Good Humor + adult cocktail pops. Serving 28+ towns in Charleston County & Berkeley County SC. Book today."
        canonical="https://hometown-catering.com/"
        keywords="ice cream truck Charleston SC, ice cream truck catering Charleston, wedding ice cream truck Charleston SC, corporate ice cream catering Charleston, birthday party ice cream truck South Carolina, adult cocktail pops Charleston SC, ice cream truck near me Charleston"
      />

      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(44, 62, 80, 0.4), rgba(44, 62, 80, 0.4)), url('https://nebula.wsimg.com/01daf0526cf76db934a75a9b28e4e02b?AccessKeyId=A84E3C0EF2C8EBA301E4&disposition=0&alloworigin=1')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Ice Cream Trucks Charleston SC | Mobile Ice Cream Catering
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
              Charleston's #1 Rated Ice Cream Truck for Weddings, Birthdays & Corporate Events.
              Serving Ice Cream Cones, Popsicles, SnoCones & Adult Alcohol Pops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Book Now
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-200">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Features Banner */}
      <section className="bg-slate-dark py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2 opacity-90" />
              <h3 className="font-bold text-lg">Serving Charleston Area</h3>
              <p className="text-white/90 text-sm">Charleston, Mount Pleasant, Summerville & More</p>
            </div>
            <div className="flex flex-col items-center">
              <CalendarCheck className="h-8 w-8 mb-2 opacity-90" />
              <h3 className="font-bold text-lg">All Event Types</h3>
              <p className="text-white/90 text-sm">Weddings, Birthdays, Corporate & School Events</p>
            </div>
            <div className="flex flex-col items-center">
              <IceCream className="h-8 w-8 mb-2 opacity-90" />
              <h3 className="font-bold text-lg">Fresh Treats Daily</h3>
              <p className="text-white/90 text-sm">Premium Ice Cream, Popsicles & Adult Alcohol Pops</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-dark mb-6">
              Ice Cream Truck Catering in Charleston SC — Hometown Catering
            </h2>
            <div className="w-24 h-1 bg-bronze mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Looking for an ice cream truck in Charleston SC? Hometown Catering is the Lowcountry's premier mobile ice cream catering service, specializing in weddings, birthday parties, corporate events, and HOA community gatherings throughout Charleston County and Berkeley County. We bring the fun — Blue Bunny novelties, Good Humor classics, refreshing popsicles, sno-cones — and our signature adult cocktail ice pops made with William Wolf Bourbon, Topper's Rhum, and Goza Tequila.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're planning a waterfront wedding in Mount Pleasant, a company picnic in North Charleston, a backyard birthday in Summerville, or a block party in Goose Creek — our vintage ice cream truck and professional team will arrive fully stocked, on time, and ready to make your event the one everyone remembers. Fully licensed, insured, and background-checked.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No competitor in Charleston SC offers what we do: a complete ice cream catering experience that serves every guest at your table — kids get the ice cream sandwiches and popsicles, and adults 21+ get the cocktail pops. One truck. Every guest happy. Book 2–8 weeks ahead to secure your date.
            </p>
          </div>

          {/* Event Type Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {[
              { to: "/weddings", label: "💒 Weddings" },
              { to: "/corporate-events", label: "🏢 Corporate Events" },
              { to: "/adult-cocktail-pops", label: "🍹 Adult Cocktail Pops" },
              { to: "/birthday-parties", label: "🎂 Birthday Parties" },
              { to: "/hoa-community-events", label: "🏘️ HOA Events" },
              { to: "/book", label: "📋 Pricing & Booking" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border border-bronze/20 rounded-lg p-3 text-center text-slate-dark text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - NEW */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-dark mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-bronze/30 -z-10"></div>

            <div className="text-center relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-bronze/20">
                <CalendarCheck className="h-10 w-10 text-bronze" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">1. Book Your Date</h3>
              <p className="text-gray-700">Contact us to check availability for your event date. We serve weddings, parties, and corporate events year-round.</p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-bronze/20">
                <Utensils className="h-10 w-10 text-bronze" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">2. Choose Your Menu</h3>
              <p className="text-gray-700">Select from our premium ice cream options, novelties, and even boozy adult popsicles for the grown-ups.</p>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-bronze/20">
                <Truck className="h-10 w-10 text-bronze" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">3. We Roll Up!</h3>
              <p className="text-gray-700">On event day, our vintage truck arrives fully stocked and staffed. We handle setup, service, and cleanup.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/booking">
              <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-3 font-semibold">
                Book our truck now for your next event!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section - NEW */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-dark mb-6">
                Proudly Serving the Charleston Area
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                As a local, family-owned business, we are widely recognized as one of the best ice cream trucks in Charleston. We travel throughout the Lowcountry to bring joy to your doorstep.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-bronze mr-2 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <Link to="/service-areas">
                <span className="text-bronze font-semibold hover:underline flex items-center cursor-pointer">
                  View All 28+ Service Areas <MapPin className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={bgImg}
                alt="Map of Charleston Ice Cream Truck Service Area"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">Bringing Sweet Treats to the Whole Lowcountry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-dark mb-4">
              Charleston Loves Our Ice Cream Truck!
            </h3>
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-700">5.0 • 24 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-bronze mb-3" />
                <p className="text-gray-700 mb-4">
                  "Amazing service! They brought their ice cream truck to my daughter's 8th birthday party in James Island.
                  The kids absolutely loved the variety of flavors and the adult cocktail pops were a huge hit for the parents too. Professional setup and cleanup!"
                </p>
                <div className="font-semibold text-slate-dark">— Sarah M.</div>
                <div className="text-sm text-gray-600">Birthday Party, James Island SC</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-bronze mb-3" />
                <p className="text-gray-700 mb-4">
                  "Hired Hometown Catering for our company's summer picnic in North Charleston. The adult cocktail pops were a massive hit!
                  Our team is still talking about the bourbon peach pops. Incredibly professional from booking to cleanup."
                </p>
                <div className="font-semibold text-slate-dark">— Michael R.</div>
                <div className="text-sm text-gray-600">Corporate Event, North Charleston SC</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-bronze mb-3" />
                <p className="text-gray-700 mb-4">
                  "Perfect addition to our wedding reception at Daniel Island! The ice cream truck was so elegant and
                  delicious. The cocktail pops for the bridal party were amazing — our guests are still talking about it!"
                </p>
                <div className="font-semibold text-slate-dark">— Jessica & David K.</div>
                <div className="text-sm text-gray-600">Wedding Reception, Daniel Island SC</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
