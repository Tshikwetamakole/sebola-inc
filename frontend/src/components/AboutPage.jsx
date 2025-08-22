import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Scale,
  Users,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";
import { mockData } from "../mock";
import { useToast } from "../hooks/use-toast";

const AboutPage = () => {
  const { toast } = useToast();

  const handleBookConsultation = () => {
    toast({
      title: "Consultation Request",
      description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
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
            <span className="text-slate-900 font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-amber-600/20 text-amber-300 border-amber-600/30">
                  Since {mockData.about.established}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  About Phillip Sebola Inc.
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {mockData.about.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleBookConsultation}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Meet With Us
                </Button>
                <Link to="/#services">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Scale className="w-32 h-32 text-amber-400/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-amber-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{mockData.about.experience}</div>
                <p className="text-slate-600">Professional Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-amber-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{mockData.about.cases.split(' ')[0]}</div>
                <p className="text-slate-600">{mockData.about.cases.split(' ').slice(1).join(' ')}</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-amber-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{mockData.about.clients.split(' ')[0]}</div>
                <p className="text-slate-600">{mockData.about.clients.split(' ').slice(1).join(' ')}</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-amber-700" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                <p className="text-slate-600">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Our Mission</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Committed to Legal Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to providing exceptional legal services while maintaining the highest standards 
              of integrity, professionalism, and client care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-amber-700" />
                </div>
                <CardTitle className="text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  We conduct all our legal work with the highest ethical standards, 
                  ensuring transparency and honesty in every client interaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-amber-700" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  We strive for excellence in every case, leveraging our expertise 
                  and experience to achieve the best possible outcomes for our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-amber-700" />
                </div>
                <CardTitle className="text-xl">Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Our clients are at the heart of everything we do. We provide 
                  personalized attention and tailored solutions for each unique situation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-slate-100 text-slate-800 mb-4">Credentials</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Professional Qualifications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our qualifications and memberships demonstrate our commitment to maintaining 
              the highest professional standards in the legal industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mockData.credentials.map((credential, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="flex items-center space-x-4 p-6">
                  <CheckCircle className="w-8 h-8 text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">{credential}</h4>
                    <p className="text-slate-600">Professional certification and membership</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Let our experience and dedication work for you. Contact us today to discuss your legal needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookConsultation}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <a href={`tel:${mockData.contact.phone}`}>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {mockData.contact.phone}
              </Button>
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <h4 className="font-semibold text-white">Visit Our Office</h4>
                </div>
                <p className="text-slate-300">{mockData.contact.address}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-400" />
                  <h4 className="font-semibold text-white">Office Hours</h4>
                </div>
                <p className="text-slate-300">{mockData.contact.hours}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;