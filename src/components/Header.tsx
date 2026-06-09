/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ChevronDown, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppContent } from '../types';

interface HeaderProps {
  content: AppContent;
  currentLang: 'de' | 'it';
  setLang: (lang: 'de' | 'it') => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({
  content,
  currentLang,
  setLang,
  activeTab,
  setActiveTab
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hauptOptionenOpen, setHauptOptionenOpen] = useState(false);
  const [mobileHauptOpen, setMobileHauptOpen] = useState(false);

  const subpages = [
    { id: 'verlegung', label: content.nav.verlegung },
    { id: 'erstellung', label: content.nav.erstellung },
    { id: 'montage', label: content.nav.montage },
    { id: 'bereitstellung', label: content.nav.bereitstellung }
  ];

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setMobileHauptOpen(false);
    setHauptOptionenOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Company Logo and Name */}
        <div 
          onClick={() => handleNav('home')} 
          className="flex cursor-pointer items-center gap-2 group md:mr-auto"
          id="hdr-logo-container"
        >
          {/* Official PRE-HOME AG Brand Logo Mark */}
          <svg 
            viewBox="0 0 100 100" 
            className="h-6.5 w-6.5 shrink-0 transition-transform duration-300 group-hover:scale-105"
          >
            {/* Row 1 Left */}
            <rect x="0" y="0" width="72" height="26" rx="3" fill="#1f2c3f" />
            {/* Row 1 Right (Gold block) */}
            <rect x="78" y="0" width="22" height="26" rx="3" fill="#edae3d" />
            {/* Row 2 Left Slim Micro-block */}
            <rect x="0" y="32" width="18" height="36" rx="3" fill="#1f2c3f" />
            {/* Row 2 Left Wide-block */}
            <rect x="24" y="32" width="48" height="36" rx="3" fill="#1f2c3f" />
            {/* Row 3 Left Bottom-left block */}
            <rect x="0" y="74" width="33" height="26" rx="3" fill="#1f2c3f" />
            {/* Row 3 Left Bottom-right block */}
            <rect x="39" y="74" width="33" height="26" rx="3" fill="#1f2c3f" />
            {/* Row 2 & 3 Right Tall Pillar */}
            <rect x="78" y="32" width="22" height="68" rx="3" fill="#1f2c3f" />
          </svg>
          
          <span className="text-base font-extrabold tracking-tight text-[#1f2c3f] font-sans">
            PRE-HOME AG
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 md:mr-10 lg:mr-16">
          {/* Subpages / Hauptmaßnahmen dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setHauptOptionenOpen(true)}
              onClick={() => setHauptOptionenOpen(!hauptOptionenOpen)}
              className={`flex items-center gap-1 pb-1 text-sm font-semibold transition-colors font-sans cursor-pointer ${
                subpages.some(p => p.id === activeTab)
                  ? 'text-sky-600 border-b-2 border-sky-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {content.nav.hauptmassnahmen}
              <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: hauptOptionenOpen ? 'rotate(180deg)' : 'none' }} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {hauptOptionenOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  onMouseLeave={() => setHauptOptionenOpen(false)}
                  className="absolute left-0 mt-2 w-72 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 z-50 border border-slate-100"
                >
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">
                    {content.nav.hauptmassnahmen}
                  </div>
                  {subpages.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 flex items-center justify-between cursor-pointer ${
                        activeTab === item.id
                          ? 'bg-sky-50 text-sky-600 font-semibold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeTab === item.id && <Check className="h-4 w-4 animate-scaleIn text-sky-600" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Operativer Ansatz */}
          <button
            onClick={() => handleNav('operativer')}
            className={`pb-1 text-sm font-semibold transition-colors font-sans cursor-pointer ${
              activeTab === 'operativer'
                ? 'text-sky-600 border-b-2 border-sky-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {content.nav.operativer}
          </button>

          {/* Immobilienmanagement */}
          <button
            onClick={() => handleNav('immobilien')}
            className={`pb-1 text-sm font-semibold transition-colors font-sans cursor-pointer ${
              activeTab === 'immobilien'
                ? 'text-sky-600 border-b-2 border-sky-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {content.nav.immobilien}
          </button>

          {/* Contacts */}
          <button
            onClick={() => handleNav('kontakte')}
            className={`pb-1 text-sm font-semibold transition-colors font-sans cursor-pointer ${
              activeTab === 'kontakte'
                ? 'text-sky-600 border-b-2 border-sky-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {content.nav.kontakte}
          </button>
        </nav>

        {/* Right side Language switch & Call to Action button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 rounded-xl bg-slate-50 p-1 border border-slate-200/60">
            <button
              onClick={() => setLang('de')}
              className={`rounded-lg px-2 py-0.5 text-base transition-all duration-200 cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-white shadow-sm scale-110 border border-slate-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
              title="Deutsch"
            >
              🇩🇪
            </button>
            <button
              onClick={() => setLang('it')}
              className={`rounded-lg px-2 py-0.5 text-base transition-all duration-200 cursor-pointer ${
                currentLang === 'it'
                  ? 'bg-white shadow-sm scale-110 border border-slate-100'
                  : 'opacity-50 hover:opacity-100'
              }`}
              title="Italiano"
            >
              🇮🇹
            </button>
          </div>

          {/* Call to Action Button */}
          <button
            onClick={() => handleNav('kontakte')}
            className="rounded-full bg-emerald-500 text-white px-3.5 py-1.5 text-xs font-extrabold tracking-wide hover:bg-emerald-600 transition-all shadow-md cursor-pointer active:scale-95"
          >
            {currentLang === 'de' ? 'Angebot anfordern' : 'Preventivo'}
          </button>
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="flex md:hidden items-center gap-3">
          {/* Light Language Selector visible on mobile */}
          <button
            onClick={() => setLang(currentLang === 'de' ? 'it' : 'de')}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-base active:bg-slate-50 cursor-pointer transition-all"
            aria-label="Toggle language"
            title={currentLang === 'de' ? 'Switch to Italiano' : 'Wechseln zu Deutsch'}
          >
            {currentLang === 'de' ? '🇮🇹' : '🇩🇪'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Side-Drawer on Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6"
            >
              <div className="flex items-center justify-between border-b pb-4 border-slate-100">
                <span className="text-lg font-bold text-slate-900 tracking-tight">Menü</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex-1 overflow-y-auto py-6 space-y-2">
                {/* Home */}
                <button
                  onClick={() => handleNav('home')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                    activeTab === 'home'
                      ? 'bg-sky-50 text-sky-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {content.nav.home}
                </button>

                {/* Subpages Accordion */}
                <div className="rounded-xl border border-slate-100 overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => setMobileHauptOpen(!mobileHauptOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-slate-700 font-semibold text-base cursor-pointer"
                  >
                    <span>{content.nav.hauptmassnahmen}</span>
                    <ChevronDown className="h-5 w-5 transition-transform" style={{ transform: mobileHauptOpen ? 'rotate(180deg)' : 'none' }} />
                  </button>

                  <AnimatePresence>
                    {mobileHauptOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden bg-white pl-3 pr-2 border-t border-slate-100"
                      >
                        {subpages.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium mt-1 mb-1 transition-colors cursor-pointer ${
                              activeTab === item.id
                                ? 'bg-sky-50 text-sky-600 font-bold'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Operativer Ansatz */}
                <button
                  onClick={() => handleNav('operativer')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                    activeTab === 'operativer'
                      ? 'bg-sky-50 text-sky-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {content.nav.operativer}
                </button>

                {/* Immobilienmanagement */}
                <button
                  onClick={() => handleNav('immobilien')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                    activeTab === 'immobilien'
                      ? 'bg-sky-50 text-sky-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {content.nav.immobilien}
                </button>

                {/* Contacts */}
                <button
                  onClick={() => handleNav('kontakte')}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                    activeTab === 'kontakte'
                      ? 'bg-sky-50 text-sky-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {content.nav.kontakte}
                </button>
              </div>

              {/* Mobile Drawer Bottom controls */}
              <div className="border-t pt-5 border-slate-100 mt-auto space-y-4">
                {/* Language selection */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">Sprache / Lingua:</span>
                  <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 border border-slate-200">
                    <button
                      onClick={() => setLang('de')}
                      className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        currentLang === 'de' ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      <span>🇩🇪</span> Deutsch
                    </button>
                    <button
                      onClick={() => setLang('it')}
                      className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        currentLang === 'it' ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      <span>🇮🇹</span> Italiano
                    </button>
                  </div>
                </div>

                {/* Call button */}
                <button
                  onClick={() => handleNav('kontakte')}
                  className="w-full rounded-full bg-emerald-500 hover:bg-emerald-600 py-3 text-center text-sm font-bold text-white shadow-md active:scale-95 cursor-pointer"
                >
                  {currentLang === 'de' ? 'Angebot anfordern' : 'Preventivo'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
