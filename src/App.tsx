import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonial } from './components/Testimonial';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
// import { About } from './components/About';
// import { Blog } from './components/Blog';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        {/* <About /> */}
        {/* <Blog /> */}
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}