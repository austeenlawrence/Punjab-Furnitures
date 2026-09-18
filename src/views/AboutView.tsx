import React from 'react';
import { Hammer, Trees, ShieldCheck, Ruler, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { SHOWROOM_CONFIG } from '../data/showroomData';
import { getWhatsAppGeneralUrl } from '../utils/helpers';

interface AboutViewProps {
  onNavigateToShowroom: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigateToShowroom }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E0D7C6] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
          Saharanpur Heritage & Workshop
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F] mt-1">
          Craftsmanship & Identity
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
          Built on generations of authentic Indian woodcraft traditions. At Punjab Furnitures, we honor solid timber, precise joinery, and bespoke furniture built for lifelong homes.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4 text-xs sm:text-sm text-[#4E4638] leading-relaxed">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132A1F]">
            Rooted in Saharanpur's World-Renowned Woodworking Hub
          </h2>
          <p>
            Saharanpur, Uttar Pradesh has for centuries stood at the crossroads of Northern India's finest timber craft. Our artisans inherit knowledge passed down from family generations—reading grain directions, feeling moisture content by hand, and shaping curves that industrial machines simply cannot replicate.
          </p>
          <p>
            While the modern furniture market has flooded with hollow engineered particle boards and short-lived laminate surfaces, Punjab Furnitures stays steadfastly loyal to authentic solid woods: seasoned Sagwan (Teakwood), genuine Sheesham (Indian Rosewood), and sustainable hardwoods.
          </p>
          <p>
            Every piece displayed in our Saharanpur showroom has been cut, jointed, sanded, and hand-polished right here in our regional workshops, guaranteeing direct workshop value without middleman markups.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="bg-[#FAF7F2] border border-[#DDD3C2] p-3 rounded flex-1 min-w-[200px]">
              <span className="text-[10px] uppercase font-bold text-[#8C6D1F] block tracking-wider">
                Timber Guarantee
              </span>
              <span className="font-bold text-[#132A1F] text-sm block mt-0.5">100% Solid Hardwoods</span>
              <p className="text-[11px] text-[#786E5D] mt-1">No hollow chipboards or weak plastic veneers in load-bearing frames.</p>
            </div>
            <div className="bg-[#FAF7F2] border border-[#DDD3C2] p-3 rounded flex-1 min-w-[200px]">
              <span className="text-[10px] uppercase font-bold text-[#8C6D1F] block tracking-wider">
                Direct Workshop
              </span>
              <span className="font-bold text-[#132A1F] text-sm block mt-0.5">Saharanpur Showroom</span>
              <p className="text-[11px] text-[#786E5D] mt-1">Visit our floor to inspect joinery, polish shades, and timber grain in person.</p>
            </div>
          </div>
        </div>

        {/* Feature Image Grid */}
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-[#DDD3C2] shadow-sm bg-[#EBE4D5]">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
              alt="Artisan woodworking joinery in Saharanpur"
              referrerPolicy="no-referrer"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-[#DDD3C2] bg-[#EBE4D5]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Showroom living furniture arrangement"
                referrerPolicy="no-referrer"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#DDD3C2] bg-[#EBE4D5]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Finishing and upholstery craft"
                referrerPolicy="no-referrer"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles Section */}
      <div className="bg-[#FAF7F2] border border-[#DDD3C2] rounded-lg p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D1F] font-semibold">
            Our Standards
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132A1F] mt-1">
            Principles That Define Every Piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E0D7C6] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center mb-3">
              <Trees className="w-5 h-5 text-[#132A1F]" />
            </div>
            <h4 className="font-display text-base font-bold text-[#14261C]">1. Seasoned Hardwoods Only</h4>
            <p className="text-xs text-[#5E5545] mt-2 leading-relaxed">
              We never work with unseasoned green wood. Every log undergoes thorough drying to prevent shrinkage, warp, or creaking over decades of everyday usage.
            </p>
          </div>

          <div className="bg-white border border-[#E0D7C6] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center mb-3">
              <Hammer className="w-5 h-5 text-[#132A1F]" />
            </div>
            <h4 className="font-display text-base font-bold text-[#14261C]">2. Authentic Joinery</h4>
            <p className="text-xs text-[#5E5545] mt-2 leading-relaxed">
              Mortise, tenon, and dovetail joinery distribute pressure evenly across table legs, bed headboards, and sofa structures, outlasting screw-only assemblies.
            </p>
          </div>

          <div className="bg-white border border-[#E0D7C6] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-[#132A1F]" />
            </div>
            <h4 className="font-display text-base font-bold text-[#14261C]">3. Lifetime Service Support</h4>
            <p className="text-xs text-[#5E5545] mt-2 leading-relaxed">
              Because we manufacture locally in Saharanpur, our clients can always request future re-polishing, upholstery re-covering, or matching add-on pieces.
            </p>
          </div>
        </div>
      </div>

      {/* The Bespoke Journey Steps */}
      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
            Custom Manufacturing
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132A1F] mt-1">
            How Bespoke Orders Work
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5343] mt-1">
            Have a custom architectural floorplan or reference photo? Here is our straightforward fabrication path.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E0D7C6] rounded-lg p-5">
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">01</span>
            <h5 className="font-display text-sm font-bold text-[#14261C] mt-2">Design & Sizing Consultation</h5>
            <p className="text-xs text-[#635B4C] mt-1">
              Share your room dimensions, reference photos, or architect layouts via WhatsApp or at our showroom.
            </p>
          </div>

          <div className="bg-white border border-[#E0D7C6] rounded-lg p-5">
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">02</span>
            <h5 className="font-display text-sm font-bold text-[#14261C] mt-2">Timber & Fabric Selection</h5>
            <p className="text-xs text-[#635B4C] mt-1">
              Select your preferred wood (Teakwood or Sheesham), stain finish (Honey, Walnut, Dark Teak), and premium fabrics.
            </p>
          </div>

          <div className="bg-white border border-[#E0D7C6] rounded-lg p-5">
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">03</span>
            <h5 className="font-display text-sm font-bold text-[#14261C] mt-2">Artisan Handcrafting</h5>
            <p className="text-xs text-[#635B4C] mt-1">
              Our Saharanpur craftsmen hand-cut, carve, and polish your furniture. We share in-progress photos during fabrication.
            </p>
          </div>

          <div className="bg-white border border-[#E0D7C6] rounded-lg p-5">
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">04</span>
            <h5 className="font-display text-sm font-bold text-[#14261C] mt-2">Inspection & Safe Delivery</h5>
            <p className="text-xs text-[#635B4C] mt-1">
              Inspect at our showroom or receive multi-layer padded freight delivery directly to your home across India.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-[#132A1F] text-[#FAF7F2] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold">
            Visit Our Saharanpur Showroom
          </h3>
          <p className="text-xs sm:text-sm text-[#CCC2B0] mt-1 max-w-lg">
            Experience the weight and tactile warmth of real Indian hardwoods in person. We are open Wednesday through Monday.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={onNavigateToShowroom}
            className="px-4 py-2.5 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Showroom Location & Timings</span>
          </button>
          <a
            href={getWhatsAppGeneralUrl("Hello Punjab Furnitures, I would like to consult with you about custom furniture.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#1C3E2D] hover:bg-[#25523C] text-white border border-[#2B573F] font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
