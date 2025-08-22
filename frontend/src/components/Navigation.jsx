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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Scale className="w-6 h-6" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-amber-500 transition-all duration-300">
                Phillip Sebola Inc.
              </h1>
              <p className="text-sm text-slate-600 font-medium">Attorneys & Conveyancers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="relative text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 py-2 px-1 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button 
              onClick={() => scrollToSection("about")}
              className="relative text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 py-2 px-1 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="relative text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 py-2 px-1 group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="relative text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 py-2 px-1 group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link 
              to="/contact" 
              className="relative text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 py-2 px-1 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`mailto:${mockData.contact.email}`}
              className="flex items-center space-x-2 text-slate-600 hover:text-amber-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-amber-50 group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Email Us</span>
            </a>
            <Button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 transform font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
              <Sparkles className="w-3 h-3 animate-pulse" />
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