import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitContactForm } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        navigate("/thank-you");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "1480 Jessen Ln suite c, Charleston, SC 29492, United States",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(843) 906-0776",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hometowncateringsc@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM\nSat-Sun: By Appointment",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact & Book Ice Cream Truck in Charleston SC | Hometown Catering"
        description="Contact Hometown Catering for a free quote. Charleston SC's #1 ice cream truck for weddings, corporate events, birthday parties & HOA events. Serving 28+ towns across Charleston County & Berkeley County SC."
        keywords="book ice cream truck Charleston SC, contact ice cream catering Charleston, ice cream truck quote Charleston, hire ice cream truck Charleston County SC"
        canonical="https://hometown-catering.com/contact"
      />
      <section className="py-16 bg-white text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Hometown Ice Cream Truck - Charleston SC</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Planning a party, wedding, or corporate event in Charleston? Contact Hometown Catering to book our ice cream truck and dessert catering services. We'd love to make your celebration unforgettable with our premium ice cream services!
        </p>
      </section>

      <section className="py-16 bg-warm-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Event Type</Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) => handleInputChange("eventType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="private">Private Party</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Number of Guests</Label>
                    <Select
                      value={formData.guestCount}
                      onValueChange={(value) => handleInputChange("guestCount", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select guest count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-25">1-25</SelectItem>
                        <SelectItem value="26-50">26-50</SelectItem>
                        <SelectItem value="51-100">51-100</SelectItem>
                        <SelectItem value="101-200">101-200</SelectItem>
                        <SelectItem value="200+">200+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    placeholder="Tell us about your event..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-bronze text-white py-3 px-6 rounded-lg font-semibold hover:bg-bronze/90 transition"
                >
                  Request Catering Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, title, details }, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-bronze rounded-full flex items-center justify-center mr-4">
                        <Icon className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{title}</div>
                        <div className="text-gray-700 whitespace-pre-line">{details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-4">Quick Response Guarantee</h4>
                <p className="mb-4">Looking to hire the best ice cream catering truck in Charleston? Fill out the form and our team will get back to you with a free quote quickly.</p>
                <p className="mb-4">We usually respond within 2–4 hours during business hours.</p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/hometowncateringsc/" className="text-bronze hover:text-slate-dark">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/hometowncateringllc/" className="text-bronze hover:text-slate-dark">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}