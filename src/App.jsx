import React from "react";
import Companies from "./component/Componies";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import WorldWide from "./component/WorldWide";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <WorldWide />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}
