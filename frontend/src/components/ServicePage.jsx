import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Scale, 
  Home, 
  FileText, 
  ArrowLeft,
  CheckCircle,
  Phone,
  Calendar,
  Mail
} from "lucide-react";
import { mockData } from "../mock";
import { useToast } from "../hooks/use-toast";

const iconMap = {
  Scale,
  Home,
  FileText
};

const ServicePage = ({ serviceId }) => {
  const { toast } = useToast();
  const service = mockData.services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon];
  const otherServices = mockData.services.filter(s => s.id !== serviceId);

  const handleBookConsultation = () => {
    toast({
      title: "Consultation Request",
      description: `Thank you for your interest in our ${service.title} services. We'll contact you within 24 hours.`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-amber-600 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-amber-600 transition-colors duration-200">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              
              <div className="space-y-4">
                <Badge className="bg-amber-600/20 text-amber-300 border-amber-600/30">
                  Professional Service
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {service.title} Services
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleBookConsultation}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <a href={`tel:${mockData.contact.phone}`}>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <IconComponent className="w-32 h-32 text-amber-400/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                    <span>What We Offer</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Our {service.title} Services?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">25+ Years Experience</h4>
                        <p className="text-slate-600">Decades of proven expertise in handling complex legal matters with successful outcomes.</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Multilingual Service</h4>
                        <p className="text-slate-600">Comprehensive legal services provided in multiple languages to better serve our diverse clientele.</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Personalized Approach</h4>
                        <p className="text-slate-600">Tailored legal strategies designed specifically for your unique situation and goals.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <Card className="bg-slate-900 text-white border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Get Expert Legal Help</CardTitle>
                  <CardDescription className="text-slate-300">
                    Contact us today for a consultation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="text-sm text-slate-300">Call Us</p>
                        <a href={`tel:${mockData.contact.phone}`} className="font-semibold hover:text-amber-400 transition-colors duration-200">
                          {mockData.contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="text-sm text-slate-300">Email Us</p>
                        <a href={`mailto:${mockData.contact.email}`} className="font-semibold hover:text-amber-400 transition-colors duration-200">
                          {mockData.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookConsultation}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Other Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Services</CardTitle>
                  <CardDescription>
                    Explore our comprehensive legal offerings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {otherServices.map((otherService) => {
                    const OtherIconComponent = iconMap[otherService.icon];
                    return (
                      <Link 
                        key={otherService.id}
                        to={`/${otherService.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-4 border border-slate-200 rounded-lg hover:border-amber-200 hover:bg-amber-50 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <OtherIconComponent className="w-6 h-6 text-slate-600 group-hover:text-amber-600" />
                          <div>
                            <h4 className="font-semibold text-slate-900 group-hover:text-amber-700">
                              {otherService.title}
                            </h4>
                            <p className="text-sm text-slate-600 line-clamp-2">
                              {otherService.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;