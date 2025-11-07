import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferCards from './components/OfferCards';
import MarketingDashboard from './components/MarketingDashboard';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <OfferCards />
        <MarketingDashboard />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ndolé & Co — Marketing culinaire au Cameroun</p>
          <div className="flex items-center gap-4">
            <a href="#offres" className="hover:text-emerald-700">Offres</a>
            <a href="#marketing" className="hover:text-emerald-700">Marketing</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
