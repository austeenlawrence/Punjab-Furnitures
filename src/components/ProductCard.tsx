import React from 'react';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppProductUrl } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: string) => void;
  compactOnMobile?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onSelect,
  compactOnMobile = false 
}) => {
  const whatsappUrl = getWhatsAppProductUrl(product.name);

  return (
    <article 
      id={`product-card-${product.id}`}
      className="group bg-[#FFFFFF] rounded-md border border-[#E8E2D5] overflow-hidden flex flex-col justify-between hover:border-[#1B3B2B] hover:shadow-xl transition-all duration-300"
    >
      {/* Image Area with Badge & Aspect Ratio */}
      <div className="relative aspect-[4/3] bg-[#F0EAE1] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} - Punjab Furnitures`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm ${
              product.badge === 'FEATURED' 
                ? 'bg-[#132A1F] text-[#FAF7F2]' 
                : product.badge === 'NEW ARRIVAL'
                ? 'bg-[#D4AF37] text-[#132A1F]'
                : 'bg-[#5C3A21] text-[#FAF7F2]'
            }`}>
              <Sparkles className="w-2.5 h-2.5" />
              {product.badge}
            </span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <span className="text-[10px] uppercase tracking-wider bg-black/65 backdrop-blur-sm text-white px-2 py-0.5 rounded font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <button
            onClick={() => onSelect(product.id)}
            className="text-left w-full group/title focus:outline-none"
          >
            <h3 className="font-display text-base sm:text-lg font-bold text-[#14261C] group-hover/title:text-[#2A5C41] transition-colors leading-snug line-clamp-1">
              {product.name}
            </h3>
          </button>

          <p className="text-xs text-[#5E594F] mt-1.5 line-clamp-2 leading-relaxed font-sans">
            {product.shortDescription}
          </p>

          <div className="mt-2.5 pt-2 border-t border-[#F2EDE2] text-[11px] text-[#7A7264] flex items-center justify-between">
            <span className="truncate max-w-[65%]">
              <span className="font-medium text-[#423D33]">Finish:</span> {product.finish}
            </span>
            <span className="text-[#132A1F] font-semibold tracking-wide uppercase text-[10px] bg-[#F4EFE6] px-1.5 py-0.5 rounded">
              ENQUIRE FOR PRICE
            </span>
          </div>
        </div>

        {/* Dual Actions: WhatsApp & Details */}
        <div className="mt-4 pt-3 border-t border-[#EFE9DD] grid grid-cols-2 gap-2">
          <button
            id={`btn-details-${product.id}`}
            onClick={() => onSelect(product.id)}
            className="min-h-[40px] px-2.5 py-1.5 rounded text-xs font-semibold text-[#1B3B2B] bg-[#F2EDE4] hover:bg-[#E7E0D3] active:bg-[#DCD4C4] transition-colors flex items-center justify-center gap-1 uppercase tracking-wider"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <a
            id={`btn-whatsapp-${product.id}`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] px-2.5 py-1.5 rounded text-xs font-semibold text-[#132A1F] bg-[#D4AF37] hover:bg-[#DEBA48] active:bg-[#C9A42F] transition-colors flex items-center justify-center gap-1 uppercase tracking-wider shadow-xs"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageSquare className="w-3 h-3" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
};
