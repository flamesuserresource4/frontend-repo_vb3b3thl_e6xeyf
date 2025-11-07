import React from 'react';
import { Utensils, Megaphone } from 'lucide-react';

export default function Navbar() {
  return (
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#accueil" className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Utensils className="h-5 w-5" />
            </span>
            <span>Ndolé & Co</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#offres" className="text-gray-700 hover:text-emerald-700 transition">Offres</a>
            <a href="#marketing" className="text-gray-700 hover:text-emerald-700 transition">Marketing</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition">Contact</a>
          </nav>

          <a href="#marketing" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-700 transition">
            <Megaphone className="h-4 w-4" />
            Lancer une campagne
          </a>
        </div>
      </header>
  );
}
