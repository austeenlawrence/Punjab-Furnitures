import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, Clock } from 'lucide-react';
import { SHOWROOM_CONFIG } from '../data/showroomData';
import { PageId, ProductCategory } from '../types';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl } from '../utils/helpers';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, category?: ProductCategory, productId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'offers', label: 'Offers' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'showroom', label: 'Visit Showroom' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#132A1F]/95 backdrop-blur-md text-[#FAF7F2] shadow-md border-b border-[#254636]' 
        : 'bg-[#132A1F] text-[#FAF7F2] border-b border-[#1E3E2F]'
    }`}>
      {/* Top Announcement Bar (Subtle & Informative) */}
      <div className="hidden lg:block bg-[#0C1C14] text-[#E0D7C6] text-xs py-1.5 px-6 border-b border-[#1A3828]">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Dehradun Rd, Near Sapna Cinema, Saharanpur
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              Wed–Mon: 9:00 AM – 9:00 PM (Tue Closed)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={getCallUrl()} 
              className="hover:text-white transition-colors flex items-center gap-1"
              title="Call Punjab Furnitures"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{SHOWROOM_CONFIG.formattedPhone}</span>
            </a>
            <span className="text-[#3A5C48]">|</span>
            <a 
              href={getWhatsAppGeneralUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#E8D8B8] transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Showroom</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo / Wordmark */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded px-1 py-0.5"
            aria-label="Punjab Furnitures Home"
          >
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold tracking-[0.18em] text-[#FAF7F2] uppercase leading-tight group-hover:text-[#E8D8B8] transition-colors">
                PUNJAB FURNITURES
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C2B59B] uppercase font-sans font-medium">
                Saharanpur • Royal Modern Luxury
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-all rounded-sm ${
                    isActive
                      ? 'text-[#FAF7F2] bg-[#1E3E2F] border-b-2 border-[#D4AF37]'
                      : 'text-[#D5CDBD] hover:text-white hover:bg-[#1A3829]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={getCallUrl()}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1E3E2F] hover:bg-[#27503C] border border-[#2E5A44] rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden md:inline">Call</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#132A1F] bg-[#E8D8B8] hover:bg-[#F2E5CC] rounded shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#132A1F]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button (Strictly 44x44px minimum touch target) */}
          <div className="flex items-center xl:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2 rounded-md text-[#FAF7F2] hover:bg-[#1E3E2F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] flex items-center justify-center transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#E8D8B8]" />
              ) : (
                <Menu className="w-6 h-6 text-[#FAF7F2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Accessible, High Z-Index, Smooth Animation) */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-backdrop"
          className="fixed inset-0 top-16 sm:top-20 z-50 bg-black/60 xl:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            id="mobile-menu-container"
            className="bg-[#132A1F] text-[#FAF7F2] w-full max-w-sm ml-auto h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-y-auto flex flex-col justify-between border-l border-[#244534] shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Showroom Quick Status */}
              <div className="p-3 mb-6 bg-[#0E2118] border border-[#214332] rounded-md text-xs">
                <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Showroom Hours</span>
                </div>
                <p className="text-[#C5BCAE]">Wed–Mon: 9:00 AM – 9:00 PM</p>
                <p className="text-[#998E7F] text-[11px] mt-0.5">Tuesday Closed</p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      id={`mobile-nav-${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left min-h-[44px] px-4 py-3 rounded text-sm font-medium uppercase tracking-[0.14em] flex items-center justify-between transition-colors ${
                        isActive
                          ? 'text-[#FAF7F2] bg-[#1E3E2F] border-l-4 border-[#D4AF37] font-semibold'
                          : 'text-[#D7CFBF] hover:text-white hover:bg-[#1A3829]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 mt-6 border-t border-[#204030] space-y-3">
              <a
                id="drawer-whatsapp-btn"
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 bg-[#E8D8B8] hover:bg-[#F2E5CC] text-[#132A1F] font-semibold text-xs uppercase tracking-wider rounded transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                id="drawer-call-btn"
                href={getCallUrl()}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 bg-[#1A3828] hover:bg-[#254E38] text-[#FAF7F2] border border-[#2B563E] font-semibold text-xs uppercase tracking-wider rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Showroom ({SHOWROOM_CONFIG.phone})</span>
              </a>

              <a
                id="drawer-directions-btn"
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-[#C5BCAE] hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Showroom Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
