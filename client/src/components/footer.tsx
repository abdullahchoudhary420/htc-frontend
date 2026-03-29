import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-3">Hometown Catering</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Charleston SC's premier ice cream truck catering service. Weddings, corporate events, birthday
              parties, HOA events, and adult cocktail ice pops throughout Charleston County & Berkeley County.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/hometowncateringsc/" className="text-bronze hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/hometowncateringllc/" className="text-bronze hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-bronze mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/book" className="hover:text-bronze transition-colors">Book an Ice Cream Truck</Link></li>
              <li><Link to="/weddings" className="hover:text-bronze transition-colors">Wedding Catering</Link></li>
              <li><Link to="/corporate-events" className="hover:text-bronze transition-colors">Corporate Events</Link></li>
              <li><Link to="/adult-cocktail-pops" className="hover:text-bronze transition-colors">Adult Cocktail Pops</Link></li>
              <li><Link to="/birthday-parties" className="hover:text-bronze transition-colors">Birthday Parties</Link></li>
              <li><Link to="/hoa-community-events" className="hover:text-bronze transition-colors">HOA Events</Link></li>
              <li><Link to="/service-areas" className="hover:text-bronze transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-bronze mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-bronze transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-bronze transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-bronze transition-colors">Menu</Link></li>
              <li><Link to="/contact" className="hover:text-bronze transition-colors">Contact</Link></li>
              <li><Link to="/blog/ice-cream-truck-cost-charleston" className="hover:text-bronze transition-colors">Pricing Guide</Link></li>
              <li><Link to="/blog/best-events-for-ice-cream-truck" className="hover:text-bronze transition-colors">Event Ideas Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-bronze transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-bronze mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-bronze flex-shrink-0 mt-0.5" />
                <span>1480 Jessen Ln Suite C<br />Charleston, SC 29492</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-bronze flex-shrink-0" />
                <a href="tel:+18439060776" className="hover:text-bronze transition-colors">(843) 906-0776</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-bronze flex-shrink-0" />
                <a href="mailto:hometowncateringsc@gmail.com" className="hover:text-bronze transition-colors text-xs">hometowncateringsc@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas SEO Text */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Serving ice cream truck catering throughout Charleston SC, North Charleston, Mount Pleasant, Summerville, Goose Creek,
            Hanahan, James Island, West Ashley, Daniel Island, Moncks Corner, Johns Island, Folly Beach, Isle of Palms, and 28+ towns
            across Charleston County and Berkeley County, South Carolina.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
          <p className="italic mb-2">
            * Additional charges may occur for travel (Price includes 30 miles from our address).
            Credit Card fee (3%) and Tax (9%) are included in all quotes.
          </p>
          <p>Copyright &copy; 2026 Hometown Catering LLC. All rights reserved. · Charleston, SC Ice Cream Truck Catering</p>
        </div>
      </div>
    </footer>
  );
}
