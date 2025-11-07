import React from 'react';
import { Calendar, BarChart3, Users, MessageSquare } from 'lucide-react';

export default function MarketingDashboard() {
  const stats = [
    { label: 'Portée sociale', value: '34,2k', icon: <Users className="h-4 w-4" />, delta: '+12%' },
    { label: 'Clics campagne', value: '4,120', icon: <BarChart3 className="h-4 w-4" />, delta: '+8%' },
    { label: 'Réservations', value: '286', icon: <Calendar className="h-4 w-4" />, delta: '+5%' },
    { label: 'Avis reçus', value: '97', icon: <MessageSquare className="h-4 w-4" />, delta: '+18%' },
  ];

  return (
    <section id="marketing" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tableau de bord marketing</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Suivez l'impact de vos campagnes: réseaux sociaux, réservations, commandes et fidélité en un coup d'œil.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  {s.icon}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5">{s.delta}</span>
              </div>
              <div className="mt-4 text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Prochaine campagne</h3>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Objectif</div>
              <div className="font-medium">Remplir le service du vendredi</div>
            </div>
            <div>
              <div className="text-gray-500">Cible</div>
              <div className="font-medium">Douala • 3km • 18-45 ans</div>
            </div>
            <div>
              <div className="text-gray-500">Budget</div>
              <div className="font-medium">35 000 FCFA</div>
            </div>
          </div>
          <button className="mt-6 inline-flex rounded-full bg-emerald-600 text-white px-5 py-2 font-medium hover:bg-emerald-700">Lancer maintenant</button>
        </div>
      </div>
    </section>
  );
}
