import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ServicePage from "./components/ServicePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-slate-50">
      <BrowserRouter>
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Homepage />} />
            <Route path="/litigation" element={<ServicePage serviceId={1} />} />
            <Route path="/conveyancing" element={<ServicePage serviceId={2} />} />
            <Route path="/notarial-services" element={<ServicePage serviceId={3} />} />
            <Route path="/testimonials" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;