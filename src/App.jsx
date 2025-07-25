
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import BookingForm from "./pages/BookingForm";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import ProviderDashboard from "./pages/ProviderDashboard";
import ProtectedProviderRoute from './components/ProtectedProviderRoute'; // <-- ADD THIS on top


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-service" element={<BookingForm />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/booking-form" element={<BookingForm />} />

          {/* <Route path="/providerdashboard" element={<ProviderDashboard providerId={"PROVIDER_ID_HERE"} />} />
           */}
           {/* <Route path="/providerdashboard" element={<ProviderDashboard />} />
            */}
            <Route
              path="/providerdashboard"
              element={
                <ProtectedProviderRoute>
                  <ProviderDashboard />
                </ProtectedProviderRoute>
              }
            />



        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
