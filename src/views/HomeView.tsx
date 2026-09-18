import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Compass, 
  Hammer, 
  Layers, 
  ChevronRight 
} from 'lucide-react';
import { SHOWROOM_CONFIG, PRODUCTS, SHOWROOM_OFFERS, TESTIMONIALS } from '../data/showroomData';
import { PageId, ProductCategory, Product } from '../types';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl, getWhatsAppProductUrl } from '../utils/helpers';
import { ProductCard } from '../components/ProductCard';

interface HomeViewProps {
  onNavigate: (page: PageId, category?: ProductCategory, productId?: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProduct }) => {
  // Curated spotlight products for Home
  const featuredProducts = PRODUCTS.filter(p => p.badge === 'FEATURED').slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.badge === 'NEW ARRIVAL' || p.badge === 'NEW').slice(0, 3);

  // Category visual metadata with dedicated photos
  const categoryTiles = [
    {
      name: 'Sofas',
      subtitle: 'Sculptural Comfort & Sectionals',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      tag: 'Lounge Suites'
    },
    {
      name: 'Beds',
      subtitle: 'Platform, Wingback & Canopy Frames',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      tag: 'Sanctuary Sleeping'
    },
    {
      name: 'Dining Tables',
      subtitle: 'Solid Walnut & Italian Marble',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      tag: 'Feasting & Gathering'
    },
    {
      name: 'Wardrobes',
      subtitle: 'Modular Louvres & Dressing Alcoves',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      tag: 'Bespoke Storage'
    },
    {
      name: 'TV Units',
      subtitle: 'Acoustic Fluting & Floating Consoles',
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80',
      tag: 'Media Architecture'
    },
    {
      name: 'Coffee Tables',
      subtitle: 'Travertine Stone, Burl & Teak Plinths',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=800&q=80',
      tag: 'Centerpieces'
    },
    {
      name: 'Office Furniture',
      subtitle: 'Executive Hardwood Desks & Libraries',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      tag: 'Study & Library'
    },
    {
      name: 'Custom Furniture',
      subtitle: 'Tailored Sizing, Timber & Home Panelling',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
      tag: 'Master Woodcraft'
    },
    {
      name: 'Home Décor',
      subtitle: 'Hand-Turned Pedestals & Mirrors',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      tag: 'Finishing Touches'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION: Architectural, High Art Direction */}
      <section className="relative bg-[#10241A] text-[#FAF7F2] overflow-hidden border-b border-[#1D3B2B]">
        {/* Subtle decorative background texture */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183626] border border-[#27543C] text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Luxury Furniture Showroom • Saharanpur</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.12]">
                  PUNJAB FURNITURES
                </h1>
                <p className="font-display text-xl sm:text-2xl lg:text-3xl text-[#E8D8B8] font-normal italic">
                  Modern Furniture for Modern Living
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#D0C7B6] leading-relaxed max-w-xl font-sans">
                Discover refined living room suites, seasoned solid teak beds, dining ensembles, and bespoke residential woodwork. Designed with architectural restraint and crafted by Saharanpur woodworkers for distinguished modern homes.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-explore-collection-btn"
                  onClick={() => onNavigate('catalogue')}
                  className="min-h-[48px] px-6 py-3 bg-[#D4AF37] hover:bg-[#E2BE4A] active:bg-[#C4A02E] text-[#10241A] font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-visit-showroom-btn"
                  onClick={() => onNavigate('showroom')}
                  className="min-h-[48px] px-6 py-3 bg-[#183626] hover:bg-[#224A34] text-[#FAF7F2] border border-[#2B573F] font-semibold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Visit Showroom</span>
                </button>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#B5AC9C]">
                <a 
                  href={getCallUrl()} 
                  className="hover:text-white flex items-center gap-1.5 font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call: {SHOWROOM_CONFIG.phone}</span>
                </a>
                <span className="text-[#325A44]">•</span>
                <a 
                  href={getWhatsAppGeneralUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#D4AF37] hover:text-[#E8D8B8] flex items-center gap-1.5 font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Image Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-lg overflow-hidden border border-[#264D37] shadow-2xl bg-[#142A1E]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Punjab Furnitures Showroom Luxury Interior"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <div className="bg-[#10241A]/90 backdrop-blur-sm border border-[#2E543E] rounded p-3 text-xs">
                    <p className="text-[#D4AF37] font-semibold uppercase tracking-wider text-[10px]">Showroom Signature</p>
                    <p className="text-white font-medium text-sm mt-0.5">Hand-Finished Teak & Velvet Living Suite</p>
                    <p className="text-[#B3AA9B] text-[11px] mt-0.5">Available for viewing on Dehradun Road, Saharanpur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Showroom Status Quick Stripe */}
        <div className="bg-[#0C1A12] border-t border-[#1C3627] py-2.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#BFB6A4]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Showroom Open Today (Wed–Mon): 9:00 AM – 9:00 PM</span>
            </div>
            <div className="text-[11px] text-[#8F8674]">
              Dehradun Rd, Near Sapna Cinema, Khanalampura, Saharanpur
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COLLECTIONS: Non-Template Editorial Composition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E3DC CE]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#706450] font-semibold">
              Showroom Curations
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#132A1F] mt-1">
              Featured Collections
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalogue')}
            className="mt-2 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#1B3B2B] hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Editorial Layout: Hero Spotlight + Asymmetrical Mosaic + Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Main Hero Tile: Sofas & Living Suites (7 cols) */}
          <div 
            onClick={() => onNavigate('catalogue', 'Sofas')}
            className="md:col-span-7 group cursor-pointer relative aspect-[16/10] md:aspect-auto md:min-h-[360px] rounded-lg overflow-hidden border border-[#DCD3C2] shadow-sm hover:shadow-xl transition-all"
          >
            <img
              src={categoryTiles[0].image}
              alt="Sofas & Lounges Collection"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-[#0C1A12]/30 to-transparent flex flex-col justify-end p-5 sm:p-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Featured Category
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
                Sofas & Living Suites
              </h3>
              <p className="text-xs sm:text-sm text-[#D5CDBC] max-w-md mt-1 line-clamp-2">
                Deep velvets, tailored bouclés, and solid plinths configured for distinguished contemporary living rooms.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
                <span>Browse Sofas</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Secondary Stack: Beds & Dining (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            {/* Beds */}
            <div 
              onClick={() => onNavigate('catalogue', 'Beds')}
              className="group cursor-pointer relative aspect-[16/9] md:aspect-auto md:h-[170px] rounded-lg overflow-hidden border border-[#DCD3C2] shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={categoryTiles[1].image}
                alt="Beds Collection"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">Sanctuary Bedrooms</span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">Platform & Canopy Beds</h4>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-[#FAF7F2] group-hover:text-[#D4AF37]">
                  <span>Explore Beds</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Dining Tables */}
            <div 
              onClick={() => onNavigate('catalogue', 'Dining Tables')}
              className="group cursor-pointer relative aspect-[16/9] md:aspect-auto md:h-[170px] rounded-lg overflow-hidden border border-[#DCD3C2] shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={categoryTiles[2].image}
                alt="Dining Tables Collection"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">Gathering & Feast</span>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">Dining Sets & Solid Tables</h4>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-[#FAF7F2] group-hover:text-[#D4AF37]">
                  <span>Explore Dining</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Supporting Categories: Mobile Horizontal Scroll or 3-Col Desktop Grid */}
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categoryTiles.slice(3).map((cat) => (
              <div
                key={cat.name}
                onClick={() => onNavigate('catalogue', cat.name as ProductCategory)}
                className="group cursor-pointer bg-[#FFFFFF] rounded-md border border-[#E3DC CE] p-2.5 sm:p-3 hover:border-[#132A1F] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="aspect-square rounded overflow-hidden bg-[#ECE5D8] mb-2">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#14261C] group-hover:text-[#255038] line-clamp-1">
                    {cat.name}
                  </h4>
                  <p className="text-[10px] text-[#7A7161] line-clamp-1 mt-0.5">
                    {cat.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE PIECES: Spotlight Showroom Inventory */}
      <section className="bg-[#F2ECE1] py-14 sm:py-20 border-t border-b border-[#E0D7C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
                Showroom Highlights
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#132A1F] mt-1">
                Featured Showroom Pieces
              </h2>
              <p className="text-xs sm:text-sm text-[#615748] mt-1 max-w-xl">
                Ready for viewing and customized order commissions at our Saharanpur showroom.
              </p>
            </div>
            <button
              onClick={() => onNavigate('catalogue')}
              className="mt-3 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#132A1F] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
            >
              <span>Explore All 34 Pieces</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CRAFTSMANSHIP & TIMBER: Architectural Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132A1F] text-[#FAF7F2] rounded-xl overflow-hidden border border-[#234835] shadow-xl p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Storytelling */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C3E2D] text-[#D4AF37] text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Hammer className="w-3.5 h-3.5" />
                <span>Woodcraft Heritage & Engineering</span>
              </span>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#FAF7F2]">
                Seasoned Hardwoods, Hand-Finished Joinery
              </h2>

              <p className="text-xs sm:text-sm text-[#CFC5B3] leading-relaxed">
                Saharanpur is renowned across India for timber mastery. At Punjab Furnitures, we marry this generational woodcarving heritage with contemporary Scandinavian and Italian architectural forms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded bg-[#0D1E16] border border-[#20402E]">
                  <h4 className="font-display text-sm font-bold text-[#E8D8B8]">Kiln-Dried Teak</h4>
                  <p className="text-[11px] text-[#A69C8B] mt-1">High natural oil content, warp-free structural stability.</p>
                </div>
                <div className="p-3.5 rounded bg-[#0D1E16] border border-[#20402E]">
                  <h4 className="font-display text-sm font-bold text-[#E8D8B8]">North Indian Sheesham</h4>
                  <p className="text-[11px] text-[#A69C8B] mt-1">Dense, expressive grain patterns with organic tactile luster.</p>
                </div>
                <div className="p-3.5 rounded bg-[#0D1E16] border border-[#20402E]">
                  <h4 className="font-display text-sm font-bold text-[#E8D8B8]">Custom Fit Sizing</h4>
                  <p className="text-[11px] text-[#A69C8B] mt-1">Bespoke sofa lengths, wardrobe heights, and dining seats.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] font-bold text-xs uppercase tracking-widest rounded transition-colors"
                >
                  Our Philosophy
                </button>
                <a
                  href={getWhatsAppGeneralUrl("Hello Punjab Furnitures, I am interested in custom woodcraft consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1C3E2D] hover:bg-[#25523C] text-white border border-[#2F5E45] font-semibold text-xs uppercase tracking-widest rounded transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Custom Woodwork Enquiry</span>
                </a>
              </div>
            </div>

            {/* Visual Image Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="aspect-[4/5] rounded overflow-hidden border border-[#254B36]">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                  alt="Crafted bedroom joinery"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded overflow-hidden border border-[#254B36] mt-4">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80"
                  alt="Artisanal hand-finished woodwork"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW ARRIVALS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E3DC CE]">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
              Recent Additions
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#132A1F] mt-1">
              New Showroom Arrivals
            </h2>
          </div>
          <button
            onClick={() => onNavigate('new-arrivals')}
            className="mt-2 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#132A1F] hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
          >
            <span>View All New Arrivals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 6. SHOWROOM PRIVILEGES & OFFERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#DFD7C8] rounded-xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E5DEC9]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#756A56] font-semibold">
                Current Privileges
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132A1F] mt-1">
                Showroom Packages & Consultation
              </h2>
            </div>
            <button
              onClick={() => onNavigate('offers')}
              className="mt-2 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#132A1F] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
            >
              <span>View All Offers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHOWROOM_OFFERS.map((offer) => (
              <div 
                key={offer.id}
                className="bg-[#FFFFFF] border border-[#E3DC CE] rounded-lg p-5 flex flex-col justify-between hover:border-[#132A1F] hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A6E5A] font-semibold bg-[#F5F0E6] px-2 py-0.5 rounded">
                    {offer.applicableCategory}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#132A1F] mt-2 leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#595244] mt-2 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F0EAE0]">
                  <a
                    href={getWhatsAppGeneralUrl(offer.enquiryText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[40px] px-3 py-2 rounded bg-[#132A1F] hover:bg-[#204533] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Enquire Privilege</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AUTHENTIC CLIENT VOICES (No Fake Ratings or Invented Counts) */}
      <section className="bg-[#F5F0E6] py-14 sm:py-18 border-t border-b border-[#DFD7C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#736754] font-semibold">
              Client Experiences
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#132A1F] mt-1">
              Testimonials from Regional Residences
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5343] mt-2">
              Reflecting actual home installations across Saharanpur, Dehradun Road, and surrounding districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="bg-[#FAF7F2] p-5 rounded-lg border border-[#E3DC CE] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <p className="text-xs text-[#423C32] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#ECE5D8]">
                  <p className="font-display font-bold text-sm text-[#14261C]">{t.clientName}</p>
                  <p className="text-[11px] text-[#786F60]">{t.location}</p>
                  <p className="text-[10px] text-[#1B3B2B] font-medium mt-1 truncate">
                    {t.furnitureAcquired}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VISIT SHOWROOM SECTION SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10241A] text-[#FAF7F2] rounded-xl overflow-hidden border border-[#234835] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            {/* Showroom Details (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Physical Showroom
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#FAF7F2]">
                Visit Punjab Furnitures Showroom
              </h2>
              <p className="text-xs sm:text-sm text-[#C8BFAD] leading-relaxed">
                Experience the tactile beauty of solid teakwood, test cushion densities, and discuss custom dimensions with our master carpenters in Saharanpur.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#D7CEBE]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Address: </span>
                    <span>{SHOWROOM_CONFIG.address.fullFormatted}</span>
                    <p className="text-[11px] text-[#9E9482] mt-0.5">Landmark: Near Sapna Cinema on Dehradun Road</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Hours: </span>
                    <span>{SHOWROOM_CONFIG.openingHours.days} ({SHOWROOM_CONFIG.openingHours.hours})</span>
                    <span className="text-red-300 font-semibold ml-2">Tuesday Closed</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Phone / WhatsApp: </span>
                    <a href={getCallUrl()} className="underline hover:text-white">{SHOWROOM_CONFIG.phone}</a>
                  </div>
                </div>
              </div>

              {/* Showroom Action CTAs */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  id="home-visit-directions-btn"
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-5 py-2.5 rounded bg-[#D4AF37] hover:bg-[#DEBA48] text-[#10241A] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="home-visit-call-btn"
                  href={getCallUrl()}
                  className="min-h-[44px] px-5 py-2.5 rounded bg-[#1C3E2D] hover:bg-[#25523C] text-white border border-[#2B543D] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call {SHOWROOM_CONFIG.phone}</span>
                </a>

                <button
                  id="home-visit-full-page-btn"
                  onClick={() => onNavigate('showroom')}
                  className="min-h-[44px] px-4 py-2.5 rounded text-xs uppercase tracking-wider font-semibold text-[#D4AF37] hover:text-white transition-colors"
                >
                  View Showroom Map & Details →
                </button>
              </div>
            </div>

            {/* Map Preview Snapshot (5 cols) */}
            <div className="lg:col-span-5 h-64 sm:h-72 rounded-lg overflow-hidden border border-[#274D38] shadow-md">
              <iframe
                title="Punjab Furnitures Saharanpur Location"
                src={SHOWROOM_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
