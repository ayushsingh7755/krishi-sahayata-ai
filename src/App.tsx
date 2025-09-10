import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CropSuggestions from "./pages/CropSuggestions";
import GovernmentSubsidies from "./pages/GovernmentSubsidies";
import MarketPrices from "./pages/MarketPrices";
import ModernTools from "./pages/ModernTools";
import CropLearning from "./pages/CropLearning";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crop-suggestions" element={<CropSuggestions />} />
          <Route path="/subsidies" element={<GovernmentSubsidies />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/tools" element={<ModernTools />} />
          <Route path="/learning" element={<CropLearning />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
