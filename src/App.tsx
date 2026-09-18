import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomeView } from './views/HomeView';
import { CatalogueView } from './views/CatalogueView';
import { GalleryView } from './views/GalleryView';
import { OffersView } from './views/OffersView';
import { NewArrivalsView } from './views/NewArrivalsView';
import { AboutView } from './views/AboutView';
import { ShowroomView } from './views/ShowroomView';
import { FaqView } from './views/FaqView';
import { PageRoute, ProductCategory } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [catalogueInitialCategory, setCatalogueInitialCategory] = useState<ProductCategory>('All');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageRoute, category?: ProductCategory, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    if (category) {
      setCatalogueInitialCategory(category);
    } else if (page === 'catalogue' && !category) {
      setCatalogueInitialCategory('All');
    }
    setCurrentPage(page);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#1D201D] font-sans antialiased selection:bg-[#132A1F] selection:text-[#FAF7F2] pb-16 md:pb-0">
      {/* Top Header & Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'catalogue' && (
          <CatalogueView
            initialCategory={catalogueInitialCategory}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryView />
        )}

        {currentPage === 'offers' && (
          <OffersView />
        )}

        {currentPage === 'new-arrivals' && (
          <NewArrivalsView
            onSelectProduct={handleSelectProduct}
            onNavigateToCatalogue={() => handleNavigate('catalogue', 'All')}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigateToShowroom={() => handleNavigate('showroom')}
          />
        )}

        {currentPage === 'showroom' && (
          <ShowroomView />
        )}

        {currentPage === 'faq' && (
          <FaqView />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Persistent Mobile Bottom Action Bar (Call, WhatsApp, Directions) */}
      <MobileStickyBar />

      {/* Product Detail Modal */}
      {selectedProductId && (
        <ProductDetailModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
          onSelectProduct={handleSelectProduct}
        />
      )}
    </div>
  );
}
