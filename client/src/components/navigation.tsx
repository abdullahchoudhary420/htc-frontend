import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, LogOut, ChevronDown } from "lucide-react";
import Logo from "@/assets/HC-logo.png";
import { useAuth } from "@/hooks/use-auth";

export default function Navigation() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { user, logout } = useAuth();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const serviceLinks = [
    { path: "/weddings", label: "Weddings" },
    { path: "/corporate-events", label: "Corporate Events" },
    { path: "/adult-cocktail-pops", label: "Adult Cocktail Pops 🔞" },
    { path: "/birthday-parties", label: "Birthday Parties" },
    { path: "/hoa-community-events", label: "HOA & Community Events" },
    { path: "/service-areas", label: "📍 Service Areas" },
  ];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact Us" },
    ...(user ? [{ path: "/dashboard", label: "My Bookings" }] : []),
    ...(!user ? [{ path: "/auth", label: "Login/Signup" }] : []),
    { path: "/book", label: "Book Now", cta: true },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="HomeTown Catering — Charleston Ice Cream Truck" className="h-12 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Home */}
              <Link
                to="/"
                className={`relative font-medium transition-colors duration-200 ${isActive("/")
                  ? "text-bronze after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-bronze after:content-['']"
                  : "text-slate-dark hover:text-bronze"
                  }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`relative font-medium transition-colors duration-200 flex items-center gap-1 ${serviceLinks.some(l => isActive(l.path))
                    ? "text-bronze"
                    : "text-slate-dark hover:text-bronze"
                    }`}
                >
                  Services <ChevronDown className="h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-slate-dark hover:text-bronze hover:bg-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                to="/about"
                className={`relative font-medium transition-colors duration-200 ${isActive("/about")
                  ? "text-bronze after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-bronze after:content-['']"
                  : "text-slate-dark hover:text-bronze"
                  }`}
              >
                About Us
              </Link>

              {/* Menu */}
              <Link
                to="/menu"
                className={`relative font-medium transition-colors duration-200 ${isActive("/menu")
                  ? "text-bronze after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-bronze after:content-['']"
                  : "text-slate-dark hover:text-bronze"
                  }`}
              >
                Menu
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`relative font-medium transition-colors duration-200 ${isActive("/contact")
                  ? "text-bronze after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-bronze after:content-['']"
                  : "text-slate-dark hover:text-bronze"
                  }`}
              >
                Contact
              </Link>

              {user && (
                <Link
                  to="/dashboard"
                  className={`relative font-medium transition-colors duration-200 ${isActive("/dashboard")
                    ? "text-bronze"
                    : "text-slate-dark hover:text-bronze"
                    }`}
                >
                  My Bookings
                </Link>
              )}

              {!user && (
                <Link
                  to="/auth"
                  className="relative font-medium transition-colors duration-200 text-slate-dark hover:text-bronze"
                >
                  Login
                </Link>
              )}

              {user && (
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-slate-dark hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              )}

              {/* Book Now CTA */}
              <Link
                to="/book"
                className="bg-bronze hover:bg-bronze/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-sm"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-dark hover:text-bronze"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2 font-medium ${isActive("/") ? "text-bronze" : "text-slate-dark"}`}>Home</Link>

            {/* Services section in mobile */}
            <div className="border-l-2 border-bronze/30 pl-3 ml-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1 px-3">Services</p>
              {serviceLinks.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-1.5 text-sm ${isActive(link.path) ? "text-bronze" : "text-slate-dark"}`}>
                  {link.label}
                </Link>
              ))}
            </div>

            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2 font-medium ${isActive("/about") ? "text-bronze" : "text-slate-dark"}`}>About Us</Link>
            <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2 font-medium ${isActive("/menu") ? "text-bronze" : "text-slate-dark"}`}>Menu</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2 font-medium ${isActive("/contact") ? "text-bronze" : "text-slate-dark"}`}>Contact</Link>

            {user && <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium text-slate-dark">My Bookings</Link>}
            {!user && <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium text-slate-dark">Login/Signup</Link>}

            <Link to="/book" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-bold text-white bg-bronze rounded-lg text-center mt-3">
              Book Now
            </Link>

            {user && (
              <button
                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                className="w-full text-left flex items-center gap-2 px-3 py-2 font-medium text-red-600 hover:bg-red-50 rounded-lg mt-1"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
