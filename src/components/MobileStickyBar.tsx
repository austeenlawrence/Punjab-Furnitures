import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl } from '../utils/helpers';
import { SHOWROOM_CONFIG } from '../data/showroomData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div 
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#10241A]/95 backdrop-blur-md border-t border-[#234633] px-3 py-2 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          id="sticky-call-btn"
          href={getCallUrl()}
          className="min-h-[44px] flex flex-col items-center justify-center py-1 px-2 rounded bg-[#183626] hover:bg-[#204532] text-[#FAF7F2] border border-[#2B543D] active:scale-95 transition-all text-center"
          aria-label={`Call Punjab Furnitures at ${SHOWROOM_CONFIG.phone}`}
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wider uppercase">Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          id="sticky-whatsapp-btn"
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex flex-col items-center justify-center py-1 px-2 rounded bg-[#D4AF37] hover:bg-[#E2BE4A] text-[#10241A] active:scale-95 transition-all text-center shadow-sm"
          aria-label="Enquire with Punjab Furnitures on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#10241A] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* DIRECTIONS */}
        <a
          id="sticky-directions-btn"
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex flex-col items-center justify-center py-1 px-2 rounded bg-[#183626] hover:bg-[#204532] text-[#FAF7F2] border border-[#2B543D] active:scale-95 transition-all text-center"
          aria-label="Get Google Maps Directions to Punjab Furnitures Showroom"
        >
          <Navigation className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-wider uppercase">Directions</span>
        </a>
      </div>
    </div>
  );
};
