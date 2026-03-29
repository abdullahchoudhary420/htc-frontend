import { Card, CardContent } from "@/components/ui/card";
import menuImage from "@/assets/menu.png";
import menuImage2 from "@/assets/menu2.png";
import { IceCream, Users, Cake, Building2, MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function Menu() {
  const services = [
    {
      icon: Cake,
      title: "Wedding Ice Cream Catering",
      description: "Make your Charleston wedding reception unforgettable with our elegant ice cream truck. We offer a delightful alternative to traditional wedding cakes with premium pre-packaged treats your guests will love."
    },
    {
      icon: Users,
      title: "Birthday Party Ice Cream Truck",
      description: "Kids and adults alike love our ice cream truck at birthday parties! We bring the fun with a full menu of classic ice cream treats, creating memorable moments for your special celebration."
    },
    {
      icon: Building2,
      title: "Corporate Event Dessert Catering",
      description: "Treat your employees and clients to professional ice cream catering at your next corporate event, company picnic, or team building activity. We offer adult popsicles and premium desserts."
    },
    {
      icon: IceCream,
      title: "Private Event Catering",
      description: "From graduation parties to family reunions, our ice cream truck adds a special touch to any private event in the Charleston area. Customizable packages available for groups of all sizes."
    }
  ];

  const serviceAreas = [
    "Charleston, SC",
    "Mount Pleasant",
    "Summerville",
    "North Charleston",
    "West Ashley",
    "James Island",
    "Johns Island",
    "Daniel Island",
    "Folly Beach",
    "Isle of Palms"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Ice Cream Catering Menu | Hometown Catering Charleston"
        description="Explore our ice cream catering menu including Sundaes, Cones, and Adult Popsicles. Perfect for weddings and parties in Charleston SC."
        keywords="ice cream menu, wedding dessert menu, adult popsicles, sundae bar catering"
        canonical="https://hometown-catering.com/menu"
      />
      {/* Hero Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-dark mb-6">
            Ice Cream Truck Catering Menu - Charleston SC
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Professional dessert catering for weddings, corporate events, birthday parties, and special occasions throughout the Charleston area
          </p>
          <p className="text-lg text-gray-700">
            Looking for dessert food trucks near me in Charleston? You've found the best! Our ice cream truck brings premium pre-packaged treats and adult popsicles directly to your event.
          </p>
        </div>
      </section>

      {/* Menu Images */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-dark mb-8">
            Our Ice Cream Truck Menu
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Check out our full selection of pre-packaged ice cream treats, novelties, and adult popsicles available for your Charleston event
          </p>
          <img
            src={menuImage}
            alt="Charleston Ice Cream Truck Catering Menu - Pre-Packaged Ice Cream, Soft Serve, Sundaes, and Novelties"
            className="rounded-xl shadow-lg max-w-full mx-auto mb-6"
          />
          <img
            src={menuImage2}
            alt="Hometown Catering Dessert Menu - Premium Ice Cream Flavors, Toppings, and Adult Popsicles for Charleston Events"
            className="rounded-xl shadow-lg max-w-full mx-auto"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-12">
            Our Ice Cream Catering Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-warm-gray shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-dark text-center mb-8">
            What's Included in Our Ice Cream Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Check className="text-bronze h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-dark mb-1">Vintage Ice Cream Truck</h3>
                <p className="text-gray-700">Our classic truck provides a charming backdrop and serves as a conversation piece</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="text-bronze h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-dark mb-1">Professional Staff</h3>
                <p className="text-gray-700">Friendly, uniformed attendants to serve your guests efficiently</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="text-bronze h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-dark mb-1">Premium Ice Cream Selection</h3>
                <p className="text-gray-700">20+ pre-packaged ice cream options including classics and novelties</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="text-bronze h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-dark mb-1">Adult Alcoholic Popsicles</h3>
                <p className="text-gray-700">Premium boozy treats for 21+ events (weddings, corporate parties)</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="text-bronze h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-dark mb-1">All Supplies Included</h3>
                <p className="text-gray-700">Napkins, spoons, and everything needed for a seamless experience</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="text-bronze h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-dark mb-1">Setup & Cleanup</h3>
                <p className="text-gray-700">We handle everything so you can focus on enjoying your event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center">
              <MapPin className="text-white h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-dark mb-6">
            Ice Cream Truck Service Areas
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We proudly serve Charleston and the surrounding Lowcountry communities. If you're searching for dessert food trucks near me or ice cream truck near me, we've got you covered!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-cream rounded-lg px-4 py-3 text-slate-dark font-medium">
                {area}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream rounded-2xl p-8 border border-bronze/10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-bronze"></div>
              <h3 className="text-2xl font-bold text-slate-dark">Pricing & Travel Policies</h3>
              <div className="w-2 h-2 rounded-full bg-bronze"></div>
            </div>

            <div className="grid md:grid-cols-1 gap-8 text-left max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-bronze/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-bronze" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-dark">30-Mile Travel Radius</h4>
                    <p className="text-gray-600 text-sm">Our standard pricing includes travel up to 30 miles from our central location. Long-distance events may incur a modest travel fee.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-bronze/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-bronze" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-dark">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">All quotes include professional staff, setup, and cleanup. We believe in honest, upfront pricing. Applicable credit card fees and taxes are already included in your estimated total.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-6 italic">
            Don't see your area? Contact us! We may be able to accommodate your location.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-dark mb-4">
            Ready to Book Our Ice Cream Truck?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get a free quote for your Charleston event today! Whether it's a wedding, corporate gathering, or birthday party, we'll make it sweet and memorable.
          </p>
          <Link to="/contact">
            <Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
