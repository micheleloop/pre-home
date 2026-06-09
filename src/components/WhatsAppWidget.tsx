/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppContent } from '../types';

interface WhatsAppWidgetProps {
  content: AppContent;
}

export default function WhatsAppWidget({ content }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const phoneRaw = '41779103474';
  const customMessage = content.whatsapp.title === 'Kann ich Ihnen helfen?'
    ? 'Grüezi! Ich interessiere mich für Ihre Dienste bei PRE-HOME AG.'
    : 'Salve! Sarei interessato ai vostri servizi presso PRE-HOME AG.';

  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(customMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans" id="widget-whatsapp">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 20 }}
            className="mb-4 w-[320px] rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Header: Green Gradient */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 rounded-lg p-1 text-white/80 hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  PH
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border border-white"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">PRE-HOME AG</h4>
                  <p className="text-[10px] text-emerald-100">{content.whatsapp.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 bg-slate-50/50 space-y-3.5 max-h-56 overflow-y-auto">
              {/* Agent Bubble */}
              <div className="flex gap-2">
                <div className="h-7 w-7 rounded-full bg-slate-200 text-[10px] font-bold text-slate-600 flex items-center justify-center shrink-0">
                  DE
                </div>
                <div className="rounded-2xl rounded-tl-none bg-white p-3 text-xs text-slate-600 shadow-sm border border-slate-100 max-w-[85%] leading-relaxed">
                  <strong>{content.whatsapp.title}</strong>
                  <p className="mt-1">
                    {content.whatsapp.title === 'Kann ich Ihnen helfen?'
                      ? 'Guten Tag! Senden Sie uns hier direkt eine Nachricht per WhatsApp, oder rufen Sie uns an unter +41 (0) 77 910 34 74.'
                      : 'Salve! Mandaci un messaggio WhatsApp diretto qui, oppure chiamaci al numero +41 (0) 77 910 34 74.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-3 bg-white border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 transition-all text-center"
              >
                <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                <span>{content.whatsapp.title === 'Kann ich Ihnen helfen?' ? 'Jetzt chatten' : 'Chatta ora'}</span>
                <Send className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-xl hover:shadow-emerald-500/20 cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border border-white flex items-center justify-center text-[8px] font-bold text-white">
            1
          </span>
        </span>
        <MessageCircle className="h-7 w-7" />
      </motion.button>
    </div>
  );
}
