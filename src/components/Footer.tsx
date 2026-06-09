/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, ShieldAlert, Award, FileSpreadsheet, Phone } from 'lucide-react';
import { AppContent } from '../types';

interface FooterProps {
  content: AppContent;
  setActiveTab: (tab: string) => void;
  currentLang: 'de' | 'it';
}

export default function Footer({ content, setActiveTab, currentLang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 font-sans relative overflow-hidden" id="page-footer">
      {/* Visual background lines representing structure */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
          {/* Column 1: Brand & Coordinates */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => handleNav('home')}>
              <svg 
                viewBox="0 0 100 100" 
                className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-105"
              >
                {/* Row 1 Left */}
                <rect x="0" y="0" width="72" height="26" rx="3" fill="#ffffff" />
                {/* Row 1 Right (Gold block) */}
                <rect x="78" y="0" width="22" height="26" rx="3" fill="#edae3d" />
                {/* Row 2 Left Slim Micro-block */}
                <rect x="0" y="32" width="18" height="36" rx="3" fill="#ffffff" />
                {/* Row 2 Left Wide-block */}
                <rect x="24" y="32" width="48" height="36" rx="3" fill="#ffffff" />
                {/* Row 3 Left Bottom-left block */}
                <rect x="0" y="74" width="33" height="26" rx="3" fill="#ffffff" />
                {/* Row 3 Left Bottom-right block */}
                <rect x="39" y="74" width="33" height="26" rx="3" fill="#ffffff" />
                {/* Row 2 & 3 Right Tall Pillar */}
                <rect x="78" y="32" width="22" height="68" rx="3" fill="#ffffff" />
              </svg>
              <span className="text-lg font-extrabold tracking-tight text-white font-sans">
                PRE-HOME AG
              </span>
            </div>
            
            <p className="text-sm text-slate-400">
              {currentLang === 'de' 
                ? 'Schweizweiter Partner für erstklassige Kabelinfrastrukturen, Trassensysteme und strategisches Immobilienmanagement.'
                : 'Partner svizzero per infrastrutture di cablaggio di alta qualità, sistemi di supporto e gestione immobiliare.'}
            </p>

            <div className="flex items-start gap-2 text-sm text-slate-400 pt-2">
              <MapPin className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">PRE-HOME AG</strong>
                <span>Roosstrasse 53</span><br />
                <span>8832 Wollerau</span><br />
                <span>Svizzera / Schweiz</span>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-l-2 border-emerald-500 pl-2.5 mb-6">
              {content.footer.categoriesTitle}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('verlegung')} 
                  className="hover:text-sky-400 font-medium transition-colors text-left cursor-pointer"
                >
                  {content.nav.verlegung}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('operativer')} 
                  className="hover:text-sky-400 font-medium transition-colors text-left cursor-pointer"
                >
                  {content.nav.operativer}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('immobilien')} 
                  className="hover:text-sky-400 font-medium transition-colors text-left cursor-pointer"
                >
                  {content.nav.immobilien}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('kontakte')} 
                  className="hover:text-sky-400 font-medium transition-colors text-left cursor-pointer"
                >
                  {content.nav.kontakte}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-l-2 border-emerald-500 pl-2.5 mb-6">
              {content.footer.servicesTitle}
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              {content.footer.services.map((srv, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certified Trust Banner */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-l-2 border-emerald-500 pl-2.5 mb-6">
              Compliance & Sede
            </h3>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-3.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="font-semibold text-slate-300">Swiss Engineering Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-sky-500 shrink-0" />
                <span>Verkabelung zertifiziert</span>
              </div>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-[#10B981] shrink-0" />
                <span>Capital freigegeben: CHF 50k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate bottom registration numbers & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap justify-center text-center md:text-left">
            <span>© {currentYear} PRE-HOME AG. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="max-w-2xl text-[11px] leading-relaxed">
              {content.footer.companyDetails}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNav('kontakte')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Impressum
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('kontakte')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
