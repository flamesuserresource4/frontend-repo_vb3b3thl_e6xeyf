import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2r5ZkYl3pHsz8w0q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Boostez le marketing de votre restaurant camerounais
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Attirez plus de clients avec des campagnes locales, des menus en ligne optimisés, et une présence sociale percutante.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#marketing" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-medium shadow hover:bg-emerald-700 transition">Démarrer</a>
            <a href="#offres" className="inline-flex items-center rounded-full ring-1 ring-gray-300 text-gray-800 px-6 py-3 font-medium hover:bg-gray-50 transition">Voir les offres</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
