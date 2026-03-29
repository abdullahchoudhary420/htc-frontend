import { Heart, Award, Handshake } from "lucide-react";
import SEO from "@/components/SEO";
import htc2Image from "@/assets/htc2.jpeg";
import bg1Image from "@/assets/bg1.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love what we do — and it shows in every bite. From classic favorites to fun, new flavors, our passion for ice cream drives us to bring joy to every freezer, every shop, and every customer we serve.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We believe in quality without compromise. That means choosing trusted brands, storing at perfect temperatures, and delivering ice creams just the way they were meant to be — cool, creamy, and utterly delicious.",
    },
    {
      icon: Handshake,
      title: "Trust",
      description:
        "Our customers count on us for consistency, freshness, and honest service. Whether it’s a single stick or a full freezer delivery, we make sure that our ice cream truck is there for the customers.",
    },
  ];

  const stats = [
    { number: "800+", label: "Events Catered in Charleston" },
    { number: "15", label: "Years of Ice Cream Truck Experience" },
    { number: "20", label: "Delicious Ice Cream Flavors" },
    { number: "98%", label: "Customer Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Hometown Catering | Ice Cream Truck Catering Charleston SC"
        description="Family-owned ice cream truck catering company serving Charleston SC and the Lowcountry since 2010. 800+ events, licensed & insured, 5-star rated. Serving weddings, corporate events, birthday parties & HOA events."
        keywords="about hometown catering Charleston SC, ice cream truck company Charleston, local ice cream catering Charleston, Lowcountry ice cream truck, licensed insured ice cream catering SC"
        canonical="https://hometown-catering.com/about"
      />
      {/* About Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-slate-dark mb-6">
                About Hometown Catering – Charleston's Premier Ice Cream Truck & Dessert Catering
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, Hometown Catering began with one mission:
                to bring delicious ice cream to Charleston's events through our premium ice cream truck and dessert catering services.
                Whether it's a birthday party, school fair, wedding, or corporate event, we're proud to be the most trusted name in Charleston ice cream catering and dessert food truck services.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, our love for ice cream and commitment to quality have never wavered. We serve the greater Charleston area including Mount Pleasant, Summerville, James Island, and beyond. We take pride in serving only the best — from top-tier pre-packaged favorites to creatively curated presentations that elevate every event. Whether it's a birthday, corporate gathering, school fair, or community festival, our dessert catering food truck brings a taste of joy wherever we go.

              </p>
            </div>
            <div>
              <img
                src={htc2Image}
                alt="Charleston Ice Cream Truck Catering – Hometown Team Preparing for Events and Weddings"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-dark mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do, from crafting our
              ice cream to serving it at your special event.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-bronze rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-dark mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secondary Image & Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 md:order-1">
              <img
                src={bg1Image}
                alt="Hometown Catering Ice Cream Selection"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-dark mb-6">Bringing the Scoop to Your Doorstep</h2>
              <p className="text-lg text-gray-700 mb-6">
                What sets Hometown Catering apart isn't just our ice cream—it's the experience. We believe that an ice cream truck arrival should be a magical moment that stops the clock and brings everyone together.
              </p>
              <p className="text-lg text-gray-700">
                Our modern fleet is designed to handle events of all sizes, from intimate neighborhood gatherings to massive corporate festivals. With 6 vans ready to roll, we ensure your event gets the attention and speed it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-bronze">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
