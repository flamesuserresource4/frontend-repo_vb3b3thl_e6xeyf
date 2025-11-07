import React from 'react';
import { Facebook, Instagram, Receipt, Percent } from 'lucide-react';

const offers = [
  {
    title: 'Campagnes Réseaux Sociaux',
    icon: <Instagram className="h-5 w-5" />,
    desc: 'Stories, reels et posts ciblés pour Douala, Yaoundé et les environs.',
    tag: 'SMM',
  },
  {
    title: 'Publicité Facebook locale',
    icon: <Facebook className="h-5 w-5" />,
    desc: 'Annonces géolocalisées pour booster les réservations et commandes.',
    tag: 'Ads',
  },
  {
    title: 'Menus QR + Commande en ligne',
    icon: <Receipt className="h-5 w-5" />,
    desc: 'Menu digital avec QR code et suivi des statistiques de consultation.',
    tag: 'QR',
  },
  {
    title: 'Promos et fidélité',
    icon: <Percent className="h-5 w-5" />,
    desc: 'Coupons, cartes de fidélité et campagnes SMS/WhatsApp.',
    tag: 'CRM',
  },
];

export default function OfferCards() {
  return (
    <section id="offres" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Solutions clé en main</h2>
            <p className="mt-2 text-gray-600">Pensées pour les restaurants camerounais: cuisine locale, livraison et salle.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full bg-emerald-600 text-white px-5 py-2 font-medium hover:bg-emerald-700">Obtenir un devis</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((o) => (
            <div key={o.title} className="group rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  {o.icon}
                </span>
                <span className="text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 rounded-full px-2 py-0.5">{o.tag}</span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{o.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{o.desc}</p>
              <button className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-800">En savoir plus →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
