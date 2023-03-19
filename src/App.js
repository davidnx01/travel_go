import React from "react";
import "./App.css";
import "./index.css";
import { Navbar, HeroContent, OurService, BestService, Destinations, Packages, Book, Testimonial, Newsletter, Footer } from "./containers";

function App() {
  return (
    <>
      <header className="hero-bg">
        <Navbar />
        <HeroContent />
      </header>
        <OurService />
        <BestService />
        <Destinations />
        <Packages />
        <Book />
        <Testimonial />
        <Newsletter />
        <Footer />
    </>
  );
}

export default App;
