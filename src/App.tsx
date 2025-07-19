import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:collectionId" element={<Collections />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:categoryId" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
