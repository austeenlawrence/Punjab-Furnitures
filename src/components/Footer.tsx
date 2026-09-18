import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SHOWROOM_CONFIG, CATEGORIES } from '../data/showroomData';
import { PageId, ProductCategory } from '../types';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl } from '../utils/helpers';

interface FooterProps {
  onNavigate: (page: PageId, category?: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0D1E16] text-[#E5DEC9] border-t border-[#1F3D2E] pt-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1E3B2C]">
          {/* Brand & Showroom Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#FAF7F2] uppercase">
                {SHOWROOM_CONFIG.name}
              </span>
              <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-sans mt-1">
                {SHOWROOM_CONFIG.tagline}
              </span>
            </div>
            
            <p className="text-sm text-[#C0B7A6] leading-relaxed max-w-md pt-2">
              A premier destination for architectural furniture, seasoned solid timber carpentry, and tailored upholstery in Saharanpur. Experience living, bedroom, and dining collections built to endure.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                id="footer-call-action"
                href={getCallUrl()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#173325] hover:bg-[#204533] text-xs font-medium text-white border border-[#2B523D] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{SHOWROOM_CONFIG.formattedPhone}</span>
              </a>

              <a
                id="footer-whatsapp-action"
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#D4AF37] hover:bg-[#E0C157] text-xs font-semibold text-[#0D1E16] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Showroom Location & Timings (3 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display text-lg font-semibold tracking-wider text-[#FAF7F2] uppercase border-b border-[#203D2F] pb-2">
              Showroom Location
            </h3>
            <div className="flex items-start gap-3 text-sm text-[#C5BCAE]">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <p className="font-medium text-[#FAF7F2]">Punjab Furnitures Showroom</p>
                <p>{SHOWROOM_CONFIG.address.street}, {SHOWROOM_CONFIG.address.landmark}</p>
                <p>{SHOWROOM_CONFIG.address.locality}, {SHOWROOM_CONFIG.address.city}</p>
                <p>{SHOWROOM_CONFIG.address.state} {SHOWROOM_CONFIG.address.pincode}</p>
                <a 
                  href={getDirectionsUrl()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline mt-2 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#1C3628]">
              <div className="flex items-start gap-3 text-sm text-[#C5BCAE]">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#FAF7F2]">Visiting Hours</p>
                  <p className="text-xs text-[#D4AF37] font-semibold">{SHOWROOM_CONFIG.openingHours.days}</p>
                  <p className="text-xs">{SHOWROOM_CONFIG.openingHours.hours}</p>
                  <p className="text-xs text-red-300 font-medium mt-0.5">Tuesday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-lg font-semibold tracking-wider text-[#FAF7F2] uppercase border-b border-[#203D2F] pb-2">
              Collections
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#B8AF9F]">
              {CATEGORIES.filter(c => c !== 'All').map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onNavigate('catalogue', cat)}
                    className="hover:text-[#FAF7F2] hover:underline text-left transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#1C3628] space-y-1 text-xs text-[#B8AF9F]">
              <button 
                onClick={() => onNavigate('about')} 
                className="block hover:text-[#FAF7F2] text-left transition-colors"
              >
                About Our Craftsmanship
              </button>
              <button 
                onClick={() => onNavigate('offers')} 
                className="block hover:text-[#FAF7F2] text-left transition-colors"
              >
                Showroom Privileges & Offers
              </button>
              <button 
                onClick={() => onNavigate('faq')} 
                className="block hover:text-[#FAF7F2] text-left transition-colors"
              >
                Customer FAQ & Care
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Fine Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8274]">
          <p>© {new Date().getFullYear()} Punjab Furnitures, Saharanpur. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Handcrafted Solid Wood & Luxury Upholstery</span>
            <span>English Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
