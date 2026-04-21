import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConsultationModal from "./ConsultationModal";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change - a hallmark of professional senior developers
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ConsultationModal />
      <Toaster />
      <Sonner />
    </div>
  );
};

export default MainLayout;
