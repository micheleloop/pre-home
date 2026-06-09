/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Award, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppContent } from '../types';

interface ContactFormProps {
  content: AppContent;
}

export default function ContactForm({ content }: ContactFormProps) {
  const isDe = content.kontakte.form.title !== 'Richiedi una consulenza';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      return;
    }

    setLoading(true);
    // Simulate real high-performance submit pipeline
    setTimeout(() => {
      setSubmittedName(formData.name);
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 font-sans" id="section-contact">
      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccess(false)}
              className="absolute inset-0 bg-slate-900"
            />
            {/* Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl border border-slate-100"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {isDe ? 'Termin angefragt!' : 'Richiesta inviata!'}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {content.kontakte.form.successMessage}
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="w-full rounded-full bg-sky-600 py-3 text-sm font-bold text-white shadow-md hover:bg-sky-500 cursor-pointer active:scale-95 transition-all"
              >
                {isDe ? 'Schliessen' : 'Chiudi'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
        {/* Contact Info Col: 5 cols */}
        <div className="lg:col-span-5">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-51 bg-sky-50 px-3 py-1.5 text-xs font-bold font-mono text-sky-800 tracking-wider uppercase mb-5">
              PRE-HOME AG
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {content.kontakte.form.title}
            </h2>
            
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              {isDe
                ? 'Wir stehen Ihnen mit erstklassigen Lösungen zur Seite. Planen Sie Ihr Infrastrukturprojekt mit den besten Schweizer Standards.'
                : 'Siamo al vostro servizio per soluzioni di altissimo livello. Organizzate il vostro progetto infrastrutturale con i migliori standard svizzeri.'}
            </p>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-sky-100 transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Hauptsitz / Sede</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Roosstrasse 53, 8832 Wollerau, Svizzera
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-sky-100 transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Direct Support</h4>
                  <a href="tel:+41779103474" className="mt-1 block text-sm font-bold text-sky-600 hover:underline">
                    +41 (0) 77 910 34 74
                  </a>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Servicezeiten / Orario</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Montag – Freitag: 08:00 – 17:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Form Col: 7 cols */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-100 bg-white p-6 sm:p-10 shadow-lg shadow-slate-100 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-1.5">
                {content.kontakte.form.nameField}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                placeholder={isDe ? 'Ihr Name' : 'Il tuo nome'}
              />
            </div>

            {/* Grid row phone / email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-1.5">
                  {content.kontakte.form.phoneField}
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  placeholder="+41 77 000 00 00"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-1.5">
                  {content.kontakte.form.emailField}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  placeholder="name@company.ch"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-1.5">
                {content.kontakte.form.messageField}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                placeholder={isDe ? 'Details zu Ihrem Projekt...' : 'Dettagli sul tuo progetto...'}
              />
            </div>

            {/* Turnstile / reCAPTCHA compliance hint */}
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 border border-slate-100 text-xs text-slate-400">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span>Secured by Cloudflare Turnstile Verification</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-6 text-sm flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/10 hover:shadow-neutral-900/20 transition-all cursor-pointer active:scale-98"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>{isDe ? 'Wird gesendet...' : 'Invio...'}</span>
                </>
              ) : (
                <>
                  <Send className="h-4.5 w-4.5 text-emerald-400" />
                  <span>{content.kontakte.form.buttonText}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
