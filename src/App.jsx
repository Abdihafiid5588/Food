import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import About from './sections/About.jsx';
import MenuGrid from './sections/MenuGrid.jsx';
import TakeawayCTA from './sections/TakeawayCTA.jsx';
import Testimonial from './sections/Testimonial.jsx';
import Contact from './sections/Contact.jsx';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="min-h-screen bg-beige text-text">
      <Header />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Features />
        <About />
        <MenuGrid />
        <TakeawayCTA />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
