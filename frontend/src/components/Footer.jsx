import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Linkedin,
  Facebook,
  Scale
} from "lucide-react";
import { mockData } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientTop() + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                PS
              </div>
              <div>
                <h3 className="text-xl font-bold">Phillip Sebola Inc.</h3>
                <p className="text-slate-400 text-sm">Attorneys & Conveyancers</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Providing trusted legal services in Limpopo for over 25 years. 
              Your legal success is our commitment.
            </p>
            <div className="flex space-x-4">
              <a 
                href={mockData.social[0].url}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={mockData.social[1].url}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${mockData.contact.email}`}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block text-slate-300 hover:text-amber-400 transition-colors duration-200"
              >
                Home
              </Link>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 text-left"
              >
                Testimonials
              </button>
              <Link 
                to="/contact" 
                className="block text-slate-300 hover:text-amber-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <nav className="space-y-3">
              {mockData.services.map((service) => (
                <Link 
                  key={service.id}
                  to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-slate-300 hover:text-amber-400 transition-colors duration-200"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">{mockData.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a 
                  href={`tel:${mockData.contact.phone}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  {mockData.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a 
                  href={`mailto:${mockData.contact.email}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  {mockData.contact.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">{mockData.contact.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                Emergency Line:
              </p>
              <a 
                href={`tel:${mockData.contact.emergencyPhone}`}
                className="text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium"
              >
                {mockData.contact.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Phillip Sebola Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-slate-400 hover:text-amber-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-slate-400 hover:text-amber-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Scale className="w-4 h-4" />
                <span>Legal Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;