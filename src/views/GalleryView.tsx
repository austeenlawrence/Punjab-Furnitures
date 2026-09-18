import React, { useState } from 'react';
import { Maximize2, X, MessageSquare, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/showroomData';
import { GalleryItem } from '../types';
import { getWhatsAppGeneralUrl } from '../utils/helpers';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Living', 'Bedroom', 'Dining', 'Office', 'Craftsmanship'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E0D7C6] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
          Showroom & Bespoke Installations
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F] mt-1">
          Interior Lookbook
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
          Explore curated showroom compositions and residential custom timber installations crafted by Punjab Furnitures Saharanpur.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`gallery-cat-${cat.toLowerCase()}`}
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => setActiveItem(item)}
            className="group cursor-pointer bg-white border border-[#E0D7C6] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[4/3] bg-[#EBE4D5] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2.5 bg-white/90 backdrop-blur text-[#132A1F] rounded-full shadow">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
              <span className="absolute top-3 left-3 bg-[#132A1F]/80 backdrop-blur text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-widest">
                {item.category}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-[#14261C] group-hover:text-[#8C6D1F] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs text-[#635B4C] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-[#EAE3D4] flex items-center justify-between text-[11px] text-[#7A6E5A]">
                <span className="font-medium">Saharanpur Craft</span>
                <span className="text-[#8C6D1F] font-semibold group-hover:underline">View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] md:max-h-[80vh] w-full object-contain"
              />
            </div>

            <div className="p-6 md:w-2/5 flex flex-col justify-between bg-[#FCFAF7]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#8C6D1F] bg-[#F2EADB] px-2 py-0.5 rounded">
                    {activeItem.category}
                  </span>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="p-1.5 text-[#5C5343] hover:text-black rounded"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#132A1F] mt-3">
                  {activeItem.title}
                </h3>

                <p className="text-xs text-[#595040] mt-3 leading-relaxed">
                  {activeItem.caption}
                </p>

                <div className="mt-6 p-3.5 bg-white border border-[#DDD3C2] rounded text-xs space-y-2 text-[#524A3D]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6D1F] shrink-0" />
                    <span>Saharanpur Showroom Display & Workshops</span>
                  </div>
                  <p className="text-[11px] text-[#786E5E]">
                    We recreate exact layouts, custom wood polishes, and bespoke seating configurations for private residences and hotels.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE2D2] space-y-2">
                <a
                  href={getWhatsAppGeneralUrl(`Hello Punjab Furnitures, I saw your lookbook photo "${activeItem.title}" and would like to enquire about fabricating a similar design.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for This Look</span>
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full py-2 text-xs text-[#6B6150] hover:text-[#132A1F] font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
