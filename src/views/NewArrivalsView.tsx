import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/showroomData';
import { ProductCard } from '../components/ProductCard';
import { getWhatsAppGeneralUrl } from '../utils/helpers';

interface NewArrivalsViewProps {
  onSelectProduct: (productId: string) => void;
  onNavigateToCatalogue: () => void;
}

export const NewArrivalsView: React.FC<NewArrivalsViewProps> = ({
  onSelectProduct,
  onNavigateToCatalogue,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Products with 'NEW ARRIVAL' badge or featured recently
  const newArrivals = PRODUCTS.filter((p) => p.badge === 'NEW ARRIVAL');

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Custom Furniture'];

  const filteredArrivals = newArrivals.filter((p) => {
    if (filterCategory === 'All') return true;
    return p.category === filterCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E0D7C6] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#132A1F] text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider rounded mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Season 2025–2026</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F]">
            New Arrivals
          </h1>
          <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
            The latest woodcraft creations fresh from our Saharanpur workshops. Featuring contemporary minimalist silhouettes merged with time-tested mortise-and-tenon teak craftsmanship.
          </p>
        </div>

        <button
          onClick={onNavigateToCatalogue}
          className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#132A1F] hover:text-[#8C6D1F] border border-[#DDD3C2] bg-white px-3.5 py-2 rounded transition-colors"
        >
          <span>View All 30+ Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`min-h-[38px] px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              filterCategory === cat
                ? 'bg-[#132A1F] text-[#FAF7F2]'
                : 'bg-[#FAF7F2] text-[#554C3E] border border-[#DDD3C2] hover:bg-[#EFE9DC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredArrivals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>

      {/* Workshop Craftsmanship Spotlight */}
      <div className="bg-[#FAF7F2] border border-[#DDD3C2] rounded-lg p-6 sm:p-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#8C6D1F] block">
            Timber Seasoning
          </span>
          <h4 className="font-display text-lg font-bold text-[#14261C] mt-1">
            Kiln-Dried Hardwoods
          </h4>
          <p className="text-xs text-[#5C5343] mt-2 leading-relaxed">
            All wood used in our new collections undergoes controlled moisture reduction to prevent warps, cracks, and seasonal humidity expansion in Indian climates.
          </p>
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#8C6D1F] block">
            Joinery Heritage
          </span>
          <h4 className="font-display text-lg font-bold text-[#14261C] mt-1">
            Hand-Fit Interlocking Joints
          </h4>
          <p className="text-xs text-[#5C5343] mt-2 leading-relaxed">
            Crafted without reliance on cheap nails or flimsy veneers. Hand-chiseled mortise and tenon joinery delivers multi-generational structural stability.
          </p>
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#8C6D1F] block">
            Finishing Mastery
          </span>
          <h4 className="font-display text-lg font-bold text-[#14261C] mt-1">
            Multi-Layer Hand Polishing
          </h4>
          <p className="text-xs text-[#5C5343] mt-2 leading-relaxed">
            Finished with organic grain sealers, matte PU coatings, and hand-rubbed wax oils that accentuate natural grain patterns and protect from spills.
          </p>
        </div>
      </div>
    </div>
  );
};
