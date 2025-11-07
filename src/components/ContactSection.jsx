import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Merci ! Nous vous recontactons très vite.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Parlons de votre restaurant</h2>
            <p className="mt-3 text-gray-600">Expliquez-nous vos objectifs et on s'occupe de tout: contenu, publicité, fidélisation.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-700" /> +237 6 XX XX XX XX</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-700" /> contact@ndoleco.cm</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nom du restaurant</label>
                <input required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="Ex: Ndolé & Co" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Ville</label>
                <input required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="Douala / Yaoundé" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Objectif principal</label>
                <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600">
                  <option>Plus de réservations</option>
                  <option>Plus de commandes en ligne</option>
                  <option>Notoriété locale</option>
                  <option>Fidéliser la clientèle</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="Dites-nous en plus..." />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex rounded-full bg-emerald-600 text-white px-5 py-2 font-medium hover:bg-emerald-700">Envoyer</button>
            {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
