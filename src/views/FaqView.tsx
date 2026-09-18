import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Phone, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/showroomData';
import { getWhatsAppGeneralUrl, getCallUrl } from '../utils/helpers';

export const FaqView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4']);

  const categories = [
    'All',
    'Custom Orders & Bespoke',
    'Delivery & Assembly',
    'Showroom Visits',
    'Wood Care & Maintenance',
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory === 'All') return true;
    return faq.category === selectedCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E0D7C6] pb-6 text-center sm:text-left">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
          Customer Queries & Guidance
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F] mt-1">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
          Everything you need to know about bespoke manufacturing, wood seasoning, safe multi-state shipping, and visiting our Saharanpur showroom.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`faq-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => setSelectedCategory(cat)}
            className={`min-h-[38px] px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#132A1F] text-[#FAF7F2]'
                : 'bg-[#FAF7F2] text-[#554C3E] border border-[#DDD3C2] hover:bg-[#EFE9DC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className="bg-white border border-[#E0D7C6] rounded-lg overflow-hidden transition-colors hover:border-[#D4AF37]"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8C6D1F] tracking-widest block mb-1">
                    {faq.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#14261C]">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center shrink-0 text-[#132A1F] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#132A1F] text-white border-[#132A1F]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#504739] leading-relaxed border-t border-[#F5EFE4] bg-[#FCFAF7]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-[#FAF7F2] border border-[#DDD3C2] rounded-lg p-6 text-center space-y-3">
        <div className="w-10 h-10 rounded-full bg-white border border-[#DDD3C2] flex items-center justify-center mx-auto text-[#132A1F]">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="font-display text-lg font-bold text-[#14261C]">
          Have a specific design or room blueprint in mind?
        </h3>
        <p className="text-xs text-[#5C5343] max-w-md mx-auto">
          Our Saharanpur workshop master carpenters are available to review reference photos, provide timber quotes, and confirm exact manufacturing timelines.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={getWhatsAppGeneralUrl("Hello Punjab Furnitures, I have a question regarding your furniture manufacturing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask via WhatsApp</span>
          </a>
          <a
            href={getCallUrl()}
            className="px-4 py-2 bg-[#132A1F] hover:bg-[#1D3E2F] text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Call Saharanpur Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
