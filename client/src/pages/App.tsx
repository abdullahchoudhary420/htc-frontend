import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { queryClient } from "../lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Menu from "@/pages/menu";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Booking from "@/pages/booking";
import ScrollToTop from "@/components/ScrollToTop";
import ThankYouPage from "@/pages/ThankYouPage";
import AuthPage from "@/pages/auth";
import CustomerDashboard from "@/pages/dashboard";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { AuthProvider } from "@/hooks/use-auth";

// New SEO Pages
import ServiceAreas from "@/pages/service-areas";

import WeddingsPage from "@/pages/weddings";
import CorporateEventsPage from "@/pages/corporate-events";
import AdultCocktailPopsPage from "@/pages/adult-cocktail-pops";
import BirthdayPartiesPage from "@/pages/birthday-parties";
import HOAEventsPage from "@/pages/hoa-community-events";
import BlogIceCreamCostCharleston from "@/pages/blog-ice-cream-cost";
import BlogBestEventsPage from "@/pages/blog-best-events";

function AppRouter() {
  return (
    <Routes>
      {/* Core Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<CustomerDashboard />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* SEO Landing Pages */}
      <Route path="/service-areas" element={<ServiceAreas />} />

      <Route path="/weddings" element={<WeddingsPage />} />
      <Route path="/corporate-events" element={<CorporateEventsPage />} />
      <Route path="/adult-cocktail-pops" element={<AdultCocktailPopsPage />} />
      <Route path="/birthday-parties" element={<BirthdayPartiesPage />} />
      <Route path="/hoa-community-events" element={<HOAEventsPage />} />

      {/* Blog Posts */}
      <Route path="/blog/ice-cream-truck-cost-charleston" element={<BlogIceCreamCostCharleston />} />
      <Route path="/blog/best-events-for-ice-cream-truck" element={<BlogBestEventsPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col bg-warm-gray">
              <Navigation />
              <main className="flex-grow">
                <AppRouter />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;