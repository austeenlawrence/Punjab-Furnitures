import React from 'react';
import { Tag, Calendar, CheckCircle2, MessageSquare, Phone, Info } from 'lucide-react';
import { OFFERS, SHOWROOM_CONFIG } from '../data/showroomData';
import { getWhatsAppGeneralUrl, getCallUrl } from '../utils/helpers';

export const OffersView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-[#E0D7C6] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
              Seasonal & Package Benefits
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F] mt-1">
              Showroom Offers & Packages
            </h1>
            <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
              Direct workshop pricing, bridal suites, and complete room packages available for showroom walk-ins and direct bespoke inquiries.
            </p>
          </div>

          {/* Transparent Policy Note */}
          <div className="bg-[#FAF7F2] border border-[#D5CABB] rounded p-3 text-xs text-[#524B3F] max-w-sm shrink-0 flex items-start gap-2">
            <Info className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
            <span>Showroom packages are subject to timber selection and custom fabric choices. Enquire directly for authentic quotations.</span>
          </div>
        </div>
      </div>

      {/* Offers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFERS.map((offer) => (
          <div
            key={offer.id}
            id={`offer-card-${offer.id}`}
            className="bg-white border border-[#E0D7C6] rounded-lg p-6 flex flex-col justify-between shadow-sm hover:border-[#D4AF37] transition-all"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#132A1F] text-[#FAF7F2] text-[11px] font-bold uppercase tracking-wider rounded">
                  <Tag className="w-3 h-3 text-[#D4AF37]" />
                  {offer.title}
                </span>

                <span className="text-[10px] font-mono font-bold text-[#7A6E5A] border border-[#DDD3C2] px-2 py-0.5 rounded bg-[#FAF7F2]">
                  CODE: {offer.code}
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#14261C] leading-snug">
                {offer.tagline}
              </h2>

              <p className="text-xs text-[#5A5243] mt-2 leading-relaxed">
                {offer.description}
              </p>

              {/* Offer Details List */}
              <div className="mt-5 space-y-2 border-t border-[#F0EBE0] pt-4">
                {offer.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#4F4638]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#132A1F] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Validity */}
              <div className="mt-4 flex items-center gap-2 text-[11px] text-[#7A6E5A]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Valid: {offer.validity}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#EAE2D2] space-y-2">
              <a
                href={getWhatsAppGeneralUrl(`Hello Punjab Furnitures, I am enquiring about your promotion "${offer.title}" (Code: ${offer.code}). Please share more details and package pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Claim via WhatsApp</span>
              </a>

              <a
                href={getCallUrl()}
                className="w-full py-2 text-center text-xs font-semibold text-[#132A1F] hover:underline block"
              >
                Call Showroom Desk
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bespoke Architecture & Bulk Project Banner */}
      <div className="bg-[#FAF7F2] border border-[#DDD3C2] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#8C6D1F]">
            Architects, Interior Designers & Bulk Orders
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#132A1F]">
            Planning a Full Residence, Villa, or Hotel Project?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5343] max-w-2xl">
            We collaborate with architects and interior designers across India. Receive wholesale timber rates, 3D custom carpentry coordination, and direct door-to-door delivery.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <a
            href={getWhatsAppGeneralUrl("Hello Punjab Furnitures, I am an architect / interior designer and would like to discuss a project requirement.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#132A1F] hover:bg-[#1D3E2F] text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors"
          >
            Project Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};
