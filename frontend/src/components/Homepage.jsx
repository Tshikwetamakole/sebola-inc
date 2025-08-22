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
  Calendar,
  Sparkles,
  TrendingUp,
  Shield,
  Zap
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
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === mockData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-amber-500/5 via-transparent to-blue-500/5 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 text-amber-300 border-amber-600/30 hover:bg-amber-600/30 transition-all duration-300 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  {mockData.about.experience} Excellence
                </Badge>
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-slate-200 to-amber-200 bg-clip-text text-transparent animate-gradient">
                  {mockData.hero.headline}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                  {mockData.hero.subheadline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleBookConsultation}
                  size="lg"
                  className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 hover:scale-105 transform"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {mockData.hero.ctaText}
                  <Sparkles className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </Button>
                <Button 
                  onClick={handleLearnMore}
                  variant="outline"
                  size="lg"
                  className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 transform"
                >
                  {mockData.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-700/50">
                {[
                  { number: mockData.about.cases.split(' ')[0], label: mockData.about.cases.split(' ').slice(1).join(' '), icon: TrendingUp },
                  { number: mockData.about.clients.split(' ')[0], label: mockData.about.clients.split(' ').slice(1).join(' '), icon: Users },
                  { number: mockData.about.experience, label: 'Experience', icon: Shield }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-amber-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-slate-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative group">
                {/* Main decorative element */}
                <div className="w-full h-96 bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-amber-600/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  <Scale className="w-32 h-32 text-amber-400/60 animate-pulse" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                  <Award className="w-12 h-12 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center shadow-xl">
                  <Zap className="w-10 h-10 text-amber-400" />
                </div>

                {/* Glowing rings */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/20 to-transparent animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200 mb-6 px-4 py-2 text-sm font-medium">
              <Scale className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Trusted Legal Excellence Since{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                {mockData.about.established}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              {mockData.about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.credentials.map((credential, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50 hover:scale-105 transform relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="pt-8 relative z-10">
                  <CheckCircle className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <p className="font-semibold text-slate-900 text-center leading-relaxed">{credential}</p>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-800 border-slate-200 mb-6 px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Comprehensive Legal{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              We provide expert legal representation across multiple practice areas, 
              ensuring our clients receive comprehensive and professional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50 hover:scale-105 transform relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className="relative mx-auto mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <IconComponent className="w-10 h-10 text-amber-700" />
                      </div>
                      
                      {/* Floating decoration */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block"
                    >
                      <Button className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300 group-hover:shadow-xl rounded-xl py-6 font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 text-amber-300 border-amber-600/30 mb-6 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-white via-slate-200 to-amber-200 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <div className="relative min-h-[350px] flex items-center">
            {mockData.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentTestimonial 
                    ? "opacity-100 transform translate-x-0 scale-100" 
                    : "opacity-0 transform translate-x-8 scale-95"
                }`}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 text-white shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
                  <CardContent className="p-10">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-7 h-7 text-amber-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <blockquote className="text-2xl leading-relaxed mb-8 italic font-light">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="space-y-2">
                      <div className="font-semibold text-xl bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">{testimonial.name}</div>
                      <div className="text-slate-300 font-medium">{testimonial.position}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-3 mt-10">
            {mockData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentTestimonial 
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/20 to-transparent"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-5xl font-bold mb-8 leading-tight">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-90 font-light max-w-3xl mx-auto leading-relaxed">
            Contact us today for a consultation and let us help you with your legal needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleBookConsultation}
              size="lg"
              className="group bg-white text-amber-600 hover:bg-slate-100 hover:text-amber-700 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 transform"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Book Consultation
              <Sparkles className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <a href={`tel:${mockData.contact.phone}`}>
              <Button 
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 transform"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
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