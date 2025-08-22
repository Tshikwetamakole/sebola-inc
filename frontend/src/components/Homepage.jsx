import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Scale, 
  Home, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Calendar
} from "lucide-react";
import { mockData } from "../mock";
import { useToast } from "../hooks/use-toast";

const iconMap = {
  Scale,
  Home,
  FileText
};

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === mockData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBookConsultation = () => {
    toast({
      title: "Consultation Request",
      description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
    });
  };

  const handleLearnMore = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600/20 text-amber-300 border-amber-600/30 hover:bg-amber-600/30 transition-colors duration-200">
                  {mockData.about.experience} Experience
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {mockData.hero.headline}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  {mockData.hero.subheadline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleBookConsultation}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {mockData.hero.ctaText}
                </Button>
                <Button 
                  onClick={handleLearnMore}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                >
                  {mockData.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">{mockData.about.cases.split(' ')[0]}</div>
                  <div className="text-slate-300">{mockData.about.cases.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">{mockData.about.clients.split(' ')[0]}</div>
                  <div className="text-slate-300">{mockData.about.clients.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">{mockData.about.experience}</div>
                  <div className="text-slate-300">Experience</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Scale className="w-32 h-32 text-amber-400/60" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4">About Us</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted Legal Excellence Since {mockData.about.established}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {mockData.about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.credentials.map((credential, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="pt-6">
                  <CheckCircle className="w-12 h-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-medium text-slate-900">{credential}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-slate-100 text-slate-800 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide expert legal representation across multiple practice areas, 
              ensuring our clients receive comprehensive and professional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-amber-200">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-amber-700" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block"
                    >
                      <Button className="w-full bg-slate-900 hover:bg-amber-600 text-white transition-all duration-300 group-hover:shadow-lg">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2260%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-amber-600/20 text-amber-300 border-amber-600/30 mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>
          
          <div className="relative min-h-[300px] flex items-center">
            {mockData.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial 
                    ? "opacity-100 transform translate-x-0" 
                    : "opacity-0 transform translate-x-4"
                }`}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="space-y-1">
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-slate-300">{testimonial.position}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {mockData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-amber-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a consultation and let us help you with your legal needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookConsultation}
              size="lg"
              className="bg-white text-amber-600 hover:bg-slate-100 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <a href={`tel:${mockData.contact.phone}`}>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {mockData.contact.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;