/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, HardHat, LandPlot, ArrowRight, Zap, Building2, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AppContent } from '../types';
import heroBg from '../assets/images/hero_cable_install_1780999449507.png';

interface MainHeroProps {
  content: AppContent;
  onNavigate: (tabId: string) => void;
  currentLang: 'de' | 'it';
}

export default function MainHero({ content, onNavigate, currentLang }: MainHeroProps) {
  // We can render cards that match the three main divisions
  const cards = [
    {
      tabId: 'verlegung',
      title: content.home.card1Title,
      text: content.home.card1Text,
      icon: (colorClass: string) => <ShieldCheck className={`h-6 w-6 ${colorClass}`} />,
      tag: currentLang === 'de' ? 'Trassensysteme' : 'Infrastrutture',
      colorClass: 'text-emerald-600 group-hover:text-white',
      bgHoverClass: 'bg-emerald-55 bg-emerald-50/50 group-hover:bg-emerald-500',
      textColorClass: 'text-emerald-600',
      borderColorClass: 'border-slate-100 hover:border-emerald-500 shadow-sm'
    },
    {
      tabId: 'operativer',
      title: content.home.card2Title,
      text: content.home.card2Text,
      icon: (colorClass: string) => <HardHat className={`h-6 w-6 ${colorClass}`} />,
      tag: currentLang === 'de' ? 'Operatives Support' : 'Supporto Cantiere',
      colorClass: 'text-sky-600 group-hover:text-white',
      bgHoverClass: 'bg-sky-50 group-hover:bg-sky-600',
      textColorClass: 'text-sky-600',
      borderColorClass: 'border-slate-100 hover:border-sky-500 shadow-sm'
    },
    {
      tabId: 'immobilien',
      title: content.home.card3Title,
      text: content.home.card3Text,
      icon: (colorClass: string) => <Building2 className={`h-6 w-6 ${colorClass}`} />,
      tag: currentLang === 'de' ? 'Vermögenswerte' : 'Gestione Asset',
      colorClass: 'text-indigo-600 group-hover:text-white',
      bgHoverClass: 'bg-indigo-50 group-hover:bg-indigo-600',
      textColorClass: 'text-indigo-600',
      borderColorClass: 'border-slate-100 hover:border-indigo-500 shadow-sm'
    }
  ];

  return (
    <div className="font-sans">
      {/* 1. Immersive Hero / Core Statement Header */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32" id="hero-banner">
        {/* Background photo and overlay from Sleek Interface Theme */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent"></div>

        {/* Modern grid architecture decorative absolute lines */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid)" />
          </svg>
        </div>

        {/* Ambient accent light orbs */}
        <div className="absolute top-1/4 left-1/5 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/5 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-xs font-bold font-mono text-emerald-400 tracking-wider uppercase mb-8 border border-slate-700/60"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>PRE-HOME AG • SWISS PRECISION</span>
          </motion.div>

          {/* Super Premium Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white font-sans max-w-5xl mx-auto leading-tight"
          >
            {content.home.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed"
          >
            {content.home.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <button
              onClick={() => onNavigate('verlegung')}
              className="rounded-lg bg-sky-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-950/45 hover:bg-sky-500 active:scale-95 transition-all cursor-pointer"
            >
              {currentLang === 'de' ? 'Dienstleistungen entdecken' : 'Esplora i Servizi'}
            </button>
            <button
              onClick={() => onNavigate('kontakte')}
              className="rounded-lg bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 text-sm font-bold hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
            >
              {currentLang === 'de' ? 'Beratungsgespräch anfordern' : 'Richiedi una consulenza'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Text Summary with spacious whitespace and exquisite layout */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="home-intro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Main Statement Title: 6 columns */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl leading-tight">
              {content.home.introTitle}
            </h2>
          </div>

          {/* Paragraph explanation blocks: 6 columns */}
          <div className="lg:col-span-6 space-y-5 text-slate-600 font-normal leading-relaxed text-sm sm:text-base">
            {content.home.introContent.map((sentence, idx) => (
              <p key={idx} className={idx === 0 ? 'text-lg font-medium text-slate-900 select-none' : ''}>
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Three Stunning Service Columns (Bento layouts) */}
      <section className="bg-slate-50/50 border-t border-b border-slate-200/40 py-20" id="home-three-pillars">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold font-mono tracking-widest text-[#10B981] uppercase">
              {currentLang === 'de' ? 'SPEZIALISIERTER ANSATZ' : 'APPROCCIO SPECIALIZZATO'}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl mt-2">
              {currentLang === 'de' ? 'Unsere operativen Standbeine' : 'Le nostre aree di intervento'}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {currentLang === 'de' 
                ? 'Wir verknüpfen technische Kompetenz mit hoher Ausführungsqualität für Ihren wirtschaftlichen Erfolg.'
                : 'Uniamo competenza tecnica e alta qualità esecutiva per garantire il vostro successo.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(card.tabId)}
                className={`group cursor-pointer rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] flex flex-col justify-between ${card.borderColorClass}`}
              >
                <div>
                  <div className={`w-12 h-12 ${card.bgHoverClass} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                    {card.icon(card.colorClass)}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#10B981] uppercase block mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-slate-800 mb-3 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {card.text}
                  </p>
                </div>

                <div className={`text-sm font-semibold mt-auto flex items-center gap-1 ${card.textColorClass}`}>
                  <span>{currentLang === 'de' ? 'Mehr erfahren' : 'Scopri di più'}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Swiss values ribbon / Technical parameters */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#10B981] font-mono block">100%</span>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {currentLang === 'de' ? 'Schweizer Standards' : 'Standard Svizzeri'}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-sky-500 font-mono block">CHF 100K+</span>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {currentLang === 'de' ? 'Nominalkapital' : 'Capitale azionario'}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono block">2x</span>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {currentLang === 'de' ? 'Hauptsprachen (DE/IT)' : 'Lingue principali (DE/IT)'}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-mono block">24/7</span>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {currentLang === 'de' ? 'WhatsApp Support' : 'Supporto WhatsApp'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
