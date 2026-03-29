import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wrench } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // General Information
  {
    question: "Where do you provide ice cream truck services in Charleston?",
    answer: "We serve Charleston, SC and surrounding areas including Mount Pleasant, Summerville, North Charleston, West Ashley, James Island, Johns Island, Daniel Island, and Folly Beach. If you're planning an event in the greater Charleston area, we'd love to bring our ice cream truck to you!"
  },
  {
    question: "What types of ice cream and desserts do you offer?",
    answer: "We specialize in premium pre-packaged ice cream treats featuring classic favorites like ice cream sandwiches, drumsticks, popsicles, and novelty bars. We also offer adult alcoholic popsicles for 21+ events. Our menu includes over 20 different flavors and dessert options to satisfy every guest."
  },
  {
    question: "How much does it cost to book an ice cream truck for an event?",
    answer: "Our pricing is based on an hourly service rate plus the cost of ice cream consumed at your event. This ensures you only pay for what your guests enjoy! Pricing varies based on event type, guest count, duration, and menu selections. We offer flexible packages for birthday parties, corporate events, weddings, and private gatherings. Contact us for a free customized quote based on your specific needs."
  },
  {
    question: "What's included in your ice cream catering service?",
    answer: "Our full-service ice cream truck catering includes: the vintage ice cream truck setup at your event, friendly uniformed staff to serve your guests, all ice cream products and supplies (napkins, spoons, etc.), setup and cleanup, and flexible service duration. We handle everything so you can enjoy your event stress-free!"
  },

  // Logistics & Planning
  {
    question: "How far in advance should I book your ice cream truck?",
    answer: "We recommend booking at least 2-4 weeks in advance for most events, especially during peak season (April-October). For weddings and large corporate events, booking 2-3 months ahead ensures availability. However, we sometimes accommodate last-minute requests when our schedule allows. Contact us ASAP to check availability!"
  },
  {
    question: "What's the minimum and maximum number of guests you can serve?",
    answer: "We cater events of all sizes! Our minimum booking typically accommodates 10 guests (perfect for intimate birthday parties or small corporate gatherings). We've successfully served events with 500+ guests at large corporate picnics and festivals by coordinating efficient service flow. For very large events (200+ guests), we recommend extended service time or bringing an additional serving station to keep lines short. Whether you're planning a small backyard party or a major Charleston festival, we can handle it!"
  },
  {
    question: "Do you serve Summerville, Mount Pleasant, and Folly Beach for ice cream truck events?",
    answer: "Yes! We proudly serve all of Charleston County and beyond. Our ice cream truck regularly travels to Summerville, Mount Pleasant, Folly Beach, Isle of Palms, Sullivan's Island, Daniel Island, Johns Island, James Island, West Ashley, North Charleston, and Goose Creek. We're a locally-owned Charleston business and love bringing sweet treats to every corner of the Lowcountry. Travel fees may apply for locations outside our primary service area - contact us to confirm availability for your specific location."
  },

  // Event-Specific Questions
  {
    question: "Do you provide dessert catering for weddings?",
    answer: "Absolutely! We're one of Charleston's favorite wedding dessert catering services. Our vintage ice cream truck adds a fun, nostalgic touch to your reception while serving delicious treats. We work with couples to customize the experience, coordinate timing, and ensure seamless service for your special day."
  },
  {
    question: "Do ice cream trucks work for outdoor Charleston weddings in summer?",
    answer: "Absolutely! Our ice cream trucks are perfect for outdoor Charleston weddings, even in summer heat. We bring professional freezer capacity to keep everything perfectly frozen throughout your event. Many Charleston couples choose our ice cream truck as a refreshing late-night dessert option for outdoor receptions at venues like Boone Hall Plantation, Magnolia Plantation, and waterfront locations. We arrive fully stocked and handle all setup, service, and cleanup so you can enjoy your special day worry-free."
  },
  {
    question: "Can you provide ice cream catering for large corporate events in Charleston?",
    answer: "Yes! We regularly cater corporate events, company picnics, employee appreciation days, and team-building events throughout Charleston. We can accommodate groups from 50 to 500+ guests with efficient service that keeps lines moving. Popular options include our premium ice cream novelties and adult alcoholic popsicles for professional gatherings. We've served major companies in downtown Charleston, Mount Pleasant, and North Charleston business parks. Request a corporate catering quote today!"
  },
  {
    question: "Is your ice cream truck service safe and kid-friendly for children's parties?",
    answer: "Absolutely! We're experienced in serving children's events and prioritize safety at every party. Our staff is trained, uniformed, and friendly with kids of all ages. All our ice cream products are individually pre-packaged in sealed wrappers (meeting health code standards), and we follow strict food safety protocols. Parents love that kids can clearly see and choose their treats from our display window. We keep the experience fun, organized, and stress-free for both kids and parents. Perfect for birthday parties, school events, church festivals, and family reunions throughout Charleston!"
  },

  // Customization & Special Options
  {
    question: "Can I customize the ice cream menu for my Charleston event?",
    answer: "Absolutely! We work with you to create a customized ice cream menu that fits your event theme, guest preferences, and budget. Choose from our selection of premium ice cream novelties, classic cones, popsicles, and specialty items. For adult events, add our boozy popsicles. For kids' parties, focus on fun novelties and colorful treats. We can exclude items due to allergies, dietary restrictions, or preferences. During your consultation, we'll help you design the perfect menu mix that keeps everyone happy!"
  },
  {
    question: "Can you accommodate dietary restrictions or allergies?",
    answer: "Yes, we offer a variety of ice cream options and can help you select treats that accommodate common dietary needs. We have dairy-free, gluten-free, and nut-free options available. Please let us know about any specific dietary requirements when booking so we can plan accordingly."
  },
  {
    question: "Do you serve alcoholic popsicles at events?",
    answer: "Yes! We offer premium adult alcoholic popsicles for events with guests 21 and older. These are perfect for corporate events, weddings, and adult birthday parties. We'll need to verify age-appropriate service and may require permits depending on your venue. Ask about our adult dessert menu when booking."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Everything you need to know about booking our Charleston ice cream truck for your event
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-warm-gray"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-dark hover:text-bronze">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
