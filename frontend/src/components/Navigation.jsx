import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Phone, Mail, Scale, Sparkles } from "lucide-react";
import { mockData } from "../mock";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    window.location.href = `tel:${mockData.contact.phone}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-200">
              PS
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
                Phillip Sebola Inc.
              </h1>
              <p className="text-sm text-slate-600">Attorneys & Conveyancers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Testimonials
            </button>
            <Link 
              to="/contact" 
              className="text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`mailto:${mockData.contact.email}`}
              className="flex items-center space-x-2 text-slate-600 hover:text-amber-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email Us</span>
            </a>
            <Button 
              onClick={handleContactClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-6 h-6 text-slate-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors duration-200 text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors duration-200 text-left"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection("testimonials")}
                    className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors duration-200 text-left"
                  >
                    Testimonials
                  </button>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <div className="space-y-4">
                      <a 
                        href={`mailto:${mockData.contact.email}`}
                        className="flex items-center space-x-3 text-slate-600 hover:text-amber-600 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email Us</span>
                      </a>
                      <Button 
                        onClick={handleContactClick}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;