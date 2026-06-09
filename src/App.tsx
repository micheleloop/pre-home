/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainHero from './components/MainHero';
import ContentPage from './components/ContentPage';
import ContactForm from './components/ContactForm';
import WhatsAppWidget from './components/WhatsAppWidget';
import { contentDe } from './data/contentDe';
import { contentIt } from './data/contentIt';

export default function App() {
  const [lang, setLang] = useState<'de' | 'it'>('de');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Load language settings from browser if previously toggled
  useEffect(() => {
    const saved = localStorage.getItem('pre-home-lang');
    if (saved === 'de' || saved === 'it') {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: 'de' | 'it') => {
    setLang(newLang);
    localStorage.setItem('pre-home-lang', newLang);
  };

  const activeContent = lang === 'de' ? contentDe : contentIt;

  const navigateToTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* 1. Transparent Grid Blueprint Overlay covering all page */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="root-blueprint" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="none" />
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-950" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#root-blueprint)" />
        </svg>
      </div>

      {/* 2. Premium Sticky Header */}
      <Header
        content={activeContent}
        currentLang={lang}
        setLang={handleSetLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 3. Main Views switching container */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <MainHero 
                content={activeContent}
                onNavigate={navigateToTab}
                currentLang={lang}
              />
              {/* Combine Contact section on home screen for ease of use */}
              <div className="bg-slate-50/20 py-12 border-t border-slate-100">
                <ContactForm content={activeContent} />
              </div>
            </motion.div>
          )}

          {activeTab === 'kontakte' && (
            <motion.div
              key="contacts-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="py-12"
            >
              <ContactForm content={activeContent} />
            </motion.div>
          )}

          {/* Render subpages based on matched IDs */}
          {activeTab === 'verlegung' && (
            <ContentPage
              key="verlegung"
              content={activeContent.verlegung}
              pageId="verlegung"
              currentLang={lang}
              onCtaClick={() => navigateToTab('kontakte')}
            />
          )}

          {activeTab === 'erstellung' && (
            <ContentPage
              key="erstellung"
              content={activeContent.erstellung}
              pageId="erstellung"
              currentLang={lang}
              onCtaClick={() => navigateToTab('kontakte')}
            />
          )}

          {activeTab === 'montage' && (
            <ContentPage
              key="montage"
              content={activeContent.montage}
              pageId="montage"
              currentLang={lang}
              onCtaClick={() => navigateToTab('kontakte')}
            />
          )}

          {activeTab === 'bereitstellung' && (
            <ContentPage
              key="bereitstellung"
              content={activeContent.bereitstellung}
              pageId="bereitstellung"
              currentLang={lang}
              onCtaClick={() => navigateToTab('kontakte')}
            />
          )}

          {activeTab === 'operativer' && (
            <ContentPage
              key="operativer"
              content={activeContent.operativer}
              pageId="operativer"
              currentLang={lang}
              onCtaClick={() => navigateToTab('kontakte')}
            />
          )}

          {activeTab === 'immobilien' && (
            <ContentPage
              key="immobilien"
              content={activeContent.immobilien}
              pageId="immobilien"
              currentLang={lang}
              onCtaClick={() => navigateToTab('kontakte')}
            />
          )}
        </AnimatePresence>
      </main>

      {/* 4. Float Active Whatsapp Widget */}
      <WhatsAppWidget content={activeContent} />

      {/* 5. Deep Premium Slate Footer */}
      <Footer
        content={activeContent}
        setActiveTab={setActiveTab}
        currentLang={lang}
      />
    </div>
  );
}
