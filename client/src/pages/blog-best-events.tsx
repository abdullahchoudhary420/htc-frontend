import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function BlogBestEventsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Events for an Ice Cream Truck in Charleston, SC (2026 Guide)",
    "author": { "@type": "Organization", "name": "Hometown Catering" },
    "publisher": { "@type": "Organization", "name": "Hometown Catering", "url": "https://hometown-catering.com" },
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19",
    "mainEntityOfPage": "https://hometown-catering.com/blog/best-events-for-ice-cream-truck",
    "description": "Discover the best events for booking an ice cream truck in Charleston SC — weddings, HOA parties, corporate events, birthday parties, school events, and more.",
  };

  const events = [
    {
      icon: "💒",
      title: "Weddings",
      page: "/weddings",
      content: `A wedding ice cream truck might be the single most memorable addition to any Charleston reception. The vintage truck becomes a photo opportunity, the treats become the dessert people remember, and our adult cocktail ice pops — made with William Wolf Bourbon, Topper's Rhum, and Goza Tequila — give the weddings of Charleston a one-of-a-kind experience that no competitor offers.

Most couples book Hometown Catering for late-night service (9–11pm) when guests want something sweet to cap the evening. Our truck pulls up, the line forms instantly, and suddenly everyone is smiling and talking and making memories.

→ Recommended booking window: 4–8 weeks ahead for all Charleston SC wedding dates.`,
    },
    {
      icon: "🏘️",
      title: "HOA Block Parties & Community Events",
      page: "/hoa-community-events",
      content: `If you want to guarantee community attendance, announce the ice cream truck. HOA block parties and neighborhood summer events are one of our biggest booking categories in Charleston County.

The ice cream truck works perfectly for HOA events because it serves all ages simultaneously — kids get classic Blue Bunny and Good Humor treats while adults enjoy our cocktail ice pops (21+). One truck, entire neighborhood happy.

Charleston neighborhoods like Nexton, Carolina Park, I'On, and The Ponds have all had Hometown Catering at their summer events.

→ Recommended booking window: 3–5 weeks for summer HOA events, which fill our calendar quickly.`,
    },
    {
      icon: "🏢",
      title: "Corporate Events & Employee Appreciation",
      page: "/corporate-events",
      content: `No one forgets the day the ice cream truck came to the office. Employee appreciation days, company picnics, new hire welcome events, and quarterly milestone celebrations are all prime occasions for corporate ice cream catering in Charleston SC.

Hometown Catering is the only Charleston ice cream truck service with a dedicated corporate program — certificate of insurance available, invoice billing, flexible scheduling, and professional uniformed staff. We've served teams from 50 to 500 at companies across North Charleston, downtown, and throughout Charleston County.

→ Recommended booking window: 2–4 weeks for corporate events.`,
    },
    {
      icon: "🎂",
      title: "Birthday Parties",
      page: "/birthday-parties",
      content: `From first birthdays to 50th milestone parties, an ice cream truck at any birthday celebration in Charleston is an instant hit. The moment the truck pulls up with the familiar music, every kid (and adult) lights up.

We serve birthday parties at homes, parks, venues, and community centers throughout Charleston SC, Summerville, Mount Pleasant, James Island, West Ashley, and beyond. No space too big or small — we adapt to your venue.

→ Recommended booking window: 2–3 weeks for most birthday parties, longer for June–August weekends.`,
    },
    {
      icon: "🎒",
      title: "School Events & Teacher Appreciation",
      page: "/hoa-community-events",
      content: `End-of-year celebrations, field days, teacher appreciation weeks, and school fundraisers are some of the most joyful bookings we do in Charleston. There's nothing that captures the energy of 300 kids waiting for the ice cream truck like an actual ice cream truck roll-up.

We're familiar with South Carolina school scheduling and we accommodate morning, afternoon, and after-school service windows. PTA and school administration have recognized Hometown Catering as the reliable, fully-licensed choice throughout Charleston County.

→ Recommended booking window: 3–4 weeks minimum around school events.`,
    },
    {
      icon: "☀️",
      title: "Summer Camp Events",
      page: "/birthday-parties",
      content: `Summer camps in Charleston, Mount Pleasant, and Summerville hire us for end-of-session celebrations, Olympic Day treats, and themed event days. An ice cream truck is the perfect summer camp reward that gets kids (and counselors) excited.

We offer group pricing for camps and can accommodate large groups quickly — efficiently serving 200+ campers in a 60-minute window with our trained staff.

→ Recommended booking window: 4+ weeks for summer camps (peak season demand).`,
    },
    {
      icon: "🏡",
      title: "Neighborhood & Apartment Complex Events",
      page: "/hoa-community-events",
      content: `Apartment complexes, condos, and planned communities across Charleston use Hometown Catering for resident appreciation events, new lease specials, and quarterly community socials. Nothing builds community faster than free ice cream.

Property managers in the Charleston area trust us specifically because we're professional, on-time, and self-contained — no venue power required, no setup ask from management.

→ Recommended booking window: 2–3 weeks for apartment/property management events.`,
    },
    {
      icon: "🎊",
      title: "Bachelorette & Bachelor Parties",
      page: "/adult-cocktail-pops",
      content: `Charleston is one of the top bachelorette party destinations in the Southeast. Our adult cocktail ice pops — especially the Bourbon Peach from William Wolf and the Tropical Punch Rhum from Topper's — are the most Instagram-worthy treat your Charleston bachelorette crew can find.

A private bachelorette event or roaming group booking with adult cocktail pops from Hometown Catering is a uniquely Charleston experience that your group will photograph, share, and remember forever.

→ Ask about private group booking for 10–50 adults. We accommodate roaming events within Charleston.`,
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <SEO
        title="Best Events for an Ice Cream Truck in Charleston, SC | Hometown Catering"
        description="Discover the 8 best events for booking an ice cream truck in Charleston SC — weddings, HOA parties, corporate events, birthday parties, summer camps, and more. Hometown Catering serves all of Charleston County & Berkeley County."
        canonical="https://hometown-catering.com/blog/best-events-for-ice-cream-truck"
        keywords="best events ice cream truck Charleston SC, ice cream truck for weddings Charleston, HOA event ice cream truck SC, corporate ice cream catering Charleston, birthday party ice cream truck South Carolina"
      />

      {/* Hero */}
      <section className="bg-slate-dark py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-bronze text-sm font-semibold uppercase tracking-wider mb-3">Hometown Catering Blog</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Best Events for an Ice Cream Truck in Charleston, SC
          </h1>
          <p className="text-white/70 text-sm">Updated March 2026 · 6 min read · Hometown Catering</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            If you're wondering whether an ice cream truck fits your upcoming event in Charleston, SC —
            the answer is almost certainly <strong>yes</strong>. Ice cream trucks work for nearly any
            gathering that involves more than 20 people and a desire to create a memorable experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            But some events are especially well-suited. Below, we've broken down the <strong>8 best event
            types for booking an ice cream truck in Charleston</strong>, with practical tips, recommended
            booking timelines, and links to each dedicated event page.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-12">
            {events.map((event, i) => (
              <div key={i} className="border-l-4 border-bronze pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{event.icon}</span>
                  <h2 className="text-2xl font-bold text-slate-dark">{i + 1}. {event.title}</h2>
                </div>
                <div className="text-gray-700 space-y-3">
                  {event.content.split('\n\n').map((para, j) => (
                    para.startsWith('→') ? (
                      <p key={j} className="text-bronze font-semibold italic">{para}</p>
                    ) : (
                      <p key={j} className="leading-relaxed">{para}</p>
                    )
                  ))}
                </div>
                <div className="mt-4">
                  <Link to={event.page} className="text-bronze font-semibold hover:underline">
                    See our {event.title} page →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Hometown Catering?</h2>
          <p className="text-white/80 text-lg mb-8">
            Whatever your event type, Hometown Catering is Charleston's most trusted ice cream truck catering
            service. Check availability, get a quote, and lock in your date today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/booking"><Button className="bg-bronze hover:bg-bronze/90 text-white px-8 py-4 text-lg font-bold shadow-lg">Book Online</Button></Link>
            <a href="tel:+18439060776"><Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-4 text-lg">Call (843) 906-0776</Button></a>
          </div>
          <p className="text-sm text-white/60">
            Explore:{" "}
            <Link to="/blog/ice-cream-truck-cost-charleston" className="underline">Ice Cream Truck Cost in Charleston</Link> ·{" "}
            <Link to="/service-areas" className="underline">28+ Service Areas</Link> ·{" "}
            <Link to="/adult-cocktail-pops" className="underline">Adult Cocktail Pops</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
