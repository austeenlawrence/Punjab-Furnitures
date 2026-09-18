import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SHOWROOM_CONFIG } from '../data/showroomData';
import { Product, ProductCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';

interface CatalogueViewProps {
  initialCategory?: ProductCategory;
  onSelectProduct: (productId: string) => void;
}

export const CatalogueView: React.FC<CatalogueViewProps> = ({
  initialCategory = 'All',
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc'>('featured');

  // Filter & search logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.finish.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      // 'featured' sorting priority
      if (a.badge === 'FEATURED' && b.badge !== 'FEATURED') return -1;
      if (b.badge === 'FEATURED' && a.badge !== 'FEATURED') return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-[#E0D7C6] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
              Showroom Inventory
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F] mt-1">
              Furniture Catalogue
            </h1>
            <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
              Handcrafted living, bedroom, dining, and custom woodwork. Each piece can be tailored in custom dimensions, timber polish, and premium upholstery fabrics upon enquiry.
            </p>
          </div>

          {/* Pricing Policy Tag */}
          <div className="bg-[#FAF7F2] border border-[#D5CABB] rounded p-3 text-xs text-[#524B3F] max-w-sm shrink-0">
            <span className="font-bold text-[#132A1F] block uppercase tracking-wider text-[10px]">
              Pricing & Bespoke Enquiries
            </span>
            <span>All inventory is available to enquire for immediate pricing and custom room sizing directly from our Saharanpur showroom floor.</span>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-4">
        {/* Search Input & Sort */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#7A6E5A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="catalogue-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by furniture name, teakwood, marble, velvet..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#D8CFBF] rounded text-xs text-[#1D201D] placeholder-[#8F8675] focus:outline-none focus:ring-2 focus:ring-[#132A1F] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6E5A] hover:text-black p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Simple Sorting Control */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#7A6E5A]" />
            <span className="text-[#695F4F] font-medium hidden sm:inline">Sort:</span>
            <select
              id="catalogue-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#D8CFBF] rounded px-3 py-2 text-xs text-[#1D201D] focus:outline-none focus:ring-1 focus:ring-[#132A1F]"
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Alphabetical (A–Z)</option>
              <option value="name-desc">Alphabetical (Z–A)</option>
            </select>
          </div>
        </div>

        {/* Categories Pills (Scrollable on Mobile, Responsive Wrap on Desktop) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`cat-pill-${category.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#132A1F] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#554C3E] border border-[#DDD3C2] hover:bg-[#EFE9DC] hover:text-[#132A1F]'
                }`}
              >
                {category === 'Custom Furniture' && <Sparkles className="w-3 h-3 text-[#D4AF37]" />}
                <span>{category}</span>
                {isSelected && (
                  <span className="ml-1 text-[10px] bg-[#D4AF37] text-[#132A1F] px-1.5 py-0.2 rounded-full font-bold">
                    {category === 'All'
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.category === category).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicators */}
      {(selectedCategory !== 'All' || searchQuery) && (
        <div className="flex items-center justify-between text-xs text-[#6B6150] bg-[#EFE8DC] px-3.5 py-2 rounded">
          <div className="flex items-center gap-2">
            <span>Showing {filteredProducts.length} items</span>
            {selectedCategory !== 'All' && (
              <span className="font-semibold text-[#132A1F]">in "{selectedCategory}"</span>
            )}
            {searchQuery && (
              <span>matching "{searchQuery}"</span>
            )}
          </div>

          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-[11px] font-semibold text-[#132A1F] hover:underline uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white rounded-lg border border-[#E0D7C6]">
          <p className="font-display text-xl font-bold text-[#14261C]">No items match your criteria</p>
          <p className="text-xs text-[#6E6453] mt-2 max-w-md mx-auto">
            We offer bespoke custom furniture creation. If you cannot find what you are looking for, contact our Saharanpur carpenters directly with your design.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#132A1F] text-white text-xs font-semibold uppercase tracking-wider rounded"
            >
              Show All Products
            </button>
            <a
              href={getWhatsAppGeneralUrl("Hello Punjab Furnitures, I am looking for a specific furniture design not listed in the catalogue.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#D4AF37] text-[#132A1F] text-xs font-bold uppercase tracking-wider rounded"
            >
              Enquire Custom Design
            </a>
          </div>
        </div>
      )}

      {/* Showroom Consultation Callout */}
      <div className="bg-[#132A1F] text-[#FAF7F2] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Bespoke Dimensions & Finishes
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">
            Need Custom Sizing for Your Room?
          </h3>
          <p className="text-xs sm:text-sm text-[#CCC2B0] mt-1 max-w-xl">
            Our carpenters fabricate custom lengths, wardrobe elevations, and choice of 100+ designer fabrics to match your home blueprints.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={getWhatsAppGeneralUrl("Hello Punjab Furnitures, I would like to enquire about bespoke sizing for my home.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Enquiry</span>
          </a>
          <a
            href={getCallUrl()}
            className="px-4 py-2.5 bg-[#1C3E2D] hover:bg-[#25523C] text-white border border-[#2B573F] font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Call Showroom</span>
          </a>
        </div>
      </div>
    </div>
  );
};
