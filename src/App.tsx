import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Avisos from "./pages/Avisos";
import Horarios from "./pages/Horarios";
import Eventos from "./pages/Eventos";
import Contato from "./pages/Contato";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminMembros from "./pages/AdminMembros";
import AdminAgenda from "./pages/AdminAgenda";
import AdminAvisos from "./pages/AdminAvisos";
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
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/membros" element={<AdminMembros />} />
          <Route path="/admin/agenda" element={<AdminAgenda />} />
          <Route path="/admin/avisos" element={<AdminAvisos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
