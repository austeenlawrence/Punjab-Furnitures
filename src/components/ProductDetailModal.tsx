import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, MapPin, Check, Sparkles, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, SHOWROOM_CONFIG } from '../data/showroomData';
import { getWhatsAppProductUrl, getCallUrl } from '../utils/helpers';
import { ProductCard } from './ProductCard';

interface ProductDetailModalProps {
  productId: string | null;
  onClose: () => void;
  onSelectProduct: (id: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  productId,
  onClose,
  onSelectProduct
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = PRODUCTS.find(p => p.id === productId);

  useEffect(() => {
    setActiveImageIndex(0);
    if (productId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [productId]);

  if (!product) return null;

  const allImages = [product.image, ...(product.secondaryImages || [])];
  const whatsappUrl = getWhatsAppProductUrl(product.name);
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div 
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div 
        id="product-detail-card"
        className="bg-[#FAF7F2] text-[#1D201D] w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden my-auto border border-[#DED7C8] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#132A1F] text-[#FAF7F2] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#214232] shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-[#1E3E2F] text-[#D8CFBF] hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-wider font-semibold min-h-[44px] sm:min-h-0"
              aria-label="Back to collection"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <span className="text-[#3A5F4B] hidden sm:inline">|</span>
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium truncate max-w-[200px] sm:max-w-none">
              {product.category} Collection
            </span>
          </div>

          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] p-2 rounded-full hover:bg-[#1E3E2F] text-[#D8CFBF] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Main Grid: Gallery + Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Image Showcase (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#ECE5D8] border border-[#E0D8CA]">
                <img
                  src={allImages[activeImageIndex] || product.image}
                  alt={`${product.name} luxury furniture`}
                  className="w-full h-full object-cover object-center"
                />

                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#132A1F] text-[#FAF7F2] shadow-md">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails if available */}
              {allImages.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === idx 
                          ? 'border-[#132A1F] ring-2 ring-[#D4AF37]' 
                          : 'border-[#DDD4C5] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Showroom Viewing Note */}
              <div className="bg-[#EFE9DD] rounded p-3 text-xs text-[#524B3F] flex items-start gap-2.5 border border-[#E0D7C6]">
                <MapPin className="w-4 h-4 text-[#132A1F] shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold text-[#132A1F]">Showroom Floor Inspection:</span> Experience the wood grain, joinery, and cushion comfort in person at our Dehradun Rd showroom in Saharanpur.
                </p>
              </div>
            </div>

            {/* Specifications & Actions (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#786D5A] font-medium">
                    {product.category}
                  </span>
                  <span className="text-xs font-bold tracking-wider text-[#132A1F] uppercase bg-[#E6DFD0] px-2 py-0.5 rounded">
                    ENQUIRE FOR PRICE
                  </span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#14261C] mt-2 leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-[#4E473C] mt-4 leading-relaxed font-sans">
                  {product.fullDescription}
                </p>

                {/* Key Technical Specifications Table */}
                <div className="mt-6 space-y-2.5 border-t border-b border-[#E5DEC9] py-4 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#F0EAE0]">
                    <span className="text-[#6E6555] font-medium">Materials</span>
                    <span className="text-[#1A261E] font-semibold text-right max-w-[65%]">{product.materials}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE0]">
                    <span className="text-[#6E6555] font-medium">Finish / Color</span>
                    <span className="text-[#1A261E] font-semibold text-right max-w-[65%]">{product.finish}</span>
                  </div>
                  {product.dimensions && (
                    <div className="flex justify-between py-1 border-b border-[#F0EAE0]">
                      <span className="text-[#6E6555] font-medium">Dimensions</span>
                      <span className="text-[#1A261E] font-semibold text-right max-w-[65%]">{product.dimensions}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1">
                    <span className="text-[#6E6555] font-medium">Customization</span>
                    <span className="text-[#204533] font-semibold text-right">Bespoke Sizing & Polishes Available</span>
                  </div>
                </div>

                {/* Handcrafted Features List */}
                {product.features && product.features.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D281F] mb-2 font-sans">
                      Craftsmanship Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feat, i) => (
                        <li key={i} className="text-xs text-[#524B3E] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#204533] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons: Primary WhatsApp + Secondary Call */}
              <div className="space-y-2.5 pt-4">
                <a
                  id="modal-enquire-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] px-4 py-3 bg-[#132A1F] hover:bg-[#1B3B2C] active:bg-[#0D1C14] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2.5 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  id="modal-call-showroom-btn"
                  href={getCallUrl()}
                  className="w-full min-h-[46px] px-4 py-3 bg-[#E9E2D4] hover:bg-[#DDD3C2] active:bg-[#D0C4B0] text-[#132A1F] font-semibold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2.5 border border-[#D5C9B4] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2C4F3B]" />
                  <span>Call Showroom ({SHOWROOM_CONFIG.phone})</span>
                </a>

                <p className="text-[11px] text-center text-[#786E5E] font-medium pt-1">
                  Immediate assistance directly from our Saharanpur floor specialists.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products within Same Category */}
          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t border-[#E5DEC9]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#14261C]">
                  Related in {product.category}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedProducts.map((relProduct) => (
                  <ProductCard
                    key={relProduct.id}
                    product={relProduct}
                    onSelect={(id) => {
                      onSelectProduct(id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    compactOnMobile
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
