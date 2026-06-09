/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight, AppWindow, Wrench, Database, HelpCircle, HardHat, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SubpageContent } from '../types';

interface ContentPageProps {
  key?: string;
  content: SubpageContent;
  pageId: string;
  onCtaClick: () => void;
  currentLang: 'de' | 'it';
}

export default function ContentPage({ content, pageId, onCtaClick, currentLang }: ContentPageProps) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [pageId, content]);

  // Let's pair pageIds with icons to make them visually distinct and modern
  const getPageIcon = () => {
    switch (pageId) {
      case 'verlegung':
        return <Wrench className="h-10 w-10 text-sky-500" />;
      case 'erstellung':
        return <Database className="h-10 w-10 text-emerald-500" />;
      case 'montage':
        return <HardHat className="h-10 w-10 text-indigo-600" /> ;
      case 'bereitstellung':
        return <AppWindow className="h-10 w-10 text-purple-500" />;
      case 'operativer':
        return <Sparkles className="h-10 w-10 text-amber-500" />;
      case 'immobilien':
        return <Database className="h-10 w-10 text-rose-500" />;
      default:
        return <HelpCircle className="h-10 w-10 text-sky-500" />;
    }
  };

  // Image loading safety fallback
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Hide or substitute with a beautifully styled blueprint fallback
    e.currentTarget.style.display = 'none';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 font-sans"
    >
      {/* Page Header banner */}
      <div className="relative border-b border-slate-200/60 pb-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            {/* Soft Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#10B981] uppercase mb-3">
              <span>PRE-HOME AG</span>
              <span>/</span>
              <span>{pageId === 'immobilien' ? 'Real Estate' : 'Infrastruktur'}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {content.title}
            </h1>
            
            {content.subtitle && (
              <p className="mt-2 text-lg text-slate-500 font-medium">
                {content.subtitle}
              </p>
            )}
          </div>

          <div className="shrink-0 p-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
            {getPageIcon()}
          </div>
        </div>
      </div>

      {/* Main Grid: Introduction & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
        {/* Intro copy: 7 columns */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-sky-500 pl-4">
            {currentLang === 'de' ? 'Dienstleistungskontext' : 'Contesto del Servizio'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            {content.introduction}
          </p>
        </div>

        {/* Live absolute image or stunning gallery layout: 5 columns */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="overflow-hidden rounded-2xl bg-[#0f172a] border border-slate-800 shadow-xl aspect-16/10 relative group">
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
            
            {/* Beautiful Blueprint styled structural lines as back mockup inside card */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="card-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#card-grid)" />
              </svg>
            </div>

            {/* Render Active Image with lazy and high fidelity path */}
            {content.images && content.images.length > 0 && (
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                src={content.images[activeImageIndex]}
                alt={`${content.title} - ${currentLang === 'de' ? 'Ansicht' : 'Vista'} ${activeImageIndex + 1}`}
                onError={handleImgError}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover relative z-10"
              />
            )}

            {/* Fallback floating brand tag if image fails to load */}
            <div className="absolute bottom-4 left-4 z-20 rounded-lg bg-slate-900/90 border border-slate-800/80 px-3 py-1 text-xs text-white font-mono flex items-center gap-1.5 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>PRE-HOME.CH</span>
            </div>
          </div>

          {/* Interactive Thumbnails for Multiple Images */}
          {content.images && content.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {content.images.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-16/10 overflow-hidden rounded-xl border-2 transition-all duration-200 bg-slate-905 relative ${
                    activeImageIndex === index
                      ? 'border-sky-500 scale-95 shadow-md shadow-sky-500/10'
                      : 'border-slate-100/80 hover:border-slate-300 hover:opacity-95'
                  } cursor-pointer`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumb ${index + 1}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {activeImageIndex === index && (
                    <div className="absolute inset-0 bg-sky-500/10 border-sky-500/20"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us Section (if present) */}
      {content.whyChooseUsTitle && (
        <div className="mb-16 rounded-2xl bg-slate-50/50 border border-slate-200/50 p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {content.whyChooseUsTitle}
            </h2>
            {content.whyChooseUsText && (
              <p className="mt-2 text-base text-slate-500 leading-relaxed">
                {content.whyChooseUsText}
              </p>
            )}
          </div>

          {/* Render Why Choose Us benefits as a clean modern responsive bento grid */}
          {content.benefits && content.benefits.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.benefits.map((bn, idx) => (
                <div key={idx} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{bn.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{bn.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Render Services list as distinct grid bento cards */}
          {content.services && content.services.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.services.map((sv, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block mb-4">
                    {currentLang === 'de' ? 'BEREICH' : 'AMBITO'} 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{sv.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{sv.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Steps List (standardized implementation method) */}
      {content.steps && content.steps.length > 0 && (
        <div className="mb-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {content.stepsTitle}
            </h2>
            {content.stepsHeader && (
              <p className="mt-2 text-base text-slate-500 font-medium">
                {content.stepsHeader}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.steps.map((st, idx) => (
              <div key={idx} className="relative group">
                {/* Visual connecting line for grid steps */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 border-t-2 border-dashed border-slate-200/60 z-0"></div>
                )}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-100/40 relative z-10 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-extrabold text-sky-600/10 font-mono tracking-tight mb-4 group-hover:text-sky-600/20 transition-colors">
                    {st.number}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Advantages Paragraph Section */}
      {content.advantagesTitle && (
        <div className="mb-16 rounded-2xl border border-slate-100 bg-slate-50/30 p-8 sm:p-12">
          <div className="max-w-4xl">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {content.advantagesTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {content.advantagesText}
            </p>
          </div>
        </div>
      )}

      {/* Section specific Call to Action (CTA) Box */}
      <div className="rounded-3xl bg-neutral-950 p-8 sm:p-12 text-white relative overflow-hidden" id={`cta-${pageId}`}>
        {/* Decorative Grid back */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">
              {content.ctaTitle || (currentLang === 'de' ? 'Interesse geweckt?' : 'Interessato?')}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {content.ctaText || (currentLang === 'de' 
                ? 'Kontaktieren Sie uns jetzt für eine professionelle Beratung auf Schweizer Niveau.' 
                : 'Contattaci subito per una consulenza professionale secondo gli standard svizzeri.')}
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-4.5 text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg cursor-pointer active:scale-95 transition-all w-full md:w-auto"
          >
            <span>{content.ctaButtonText || (currentLang === 'de' ? 'Angebot anfordern' : 'Richiedi Preventivo')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
