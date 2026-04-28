import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useModal } from "@/context/ModalContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },

  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { openConsultation } = useModal();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isTransparentPage = location.pathname === "/";
  const showScrolledStyle = isScrolled || !isTransparentPage;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${showScrolledStyle
            ? "py-2.5 glass-strong shadow-card border-b border-border/30"
            : "py-5 bg-transparent border-none"
          }`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <img
              src="/images/ca_india_logo.jpeg"
              alt="CA India Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className={`font-heading text-xl font-bold tracking-tight transition-colors duration-500 ${showScrolledStyle ? "text-primary" : "text-white"}`}>
                SABAPATHY & DHANDAPANI
              </span>
              <span className={`font-body text-[9px] tracking-[0.25em] uppercase font-medium transition-colors duration-500 ${showScrolledStyle ? "text-primary" : "text-white"}`}>
                Chartered Accountants
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-body text-[11px] font-bold px-5 py-2.5 transition-all duration-500 uppercase tracking-widest ${isActive
                    ? `${showScrolledStyle ? "text-[#6AA84F]" : "text-[#9ADE7B] drop-shadow-[0_0_8px_rgba(154,222,123,0.4)]"} after:w-4`
                    : `${showScrolledStyle ? "text-primary" : "text-white"} hover:text-[#9ADE7B] hover:drop-shadow-[0_0_8px_rgba(154,222,123,0.4)] hover:after:w-4`
                  } after:content-[''] after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#6AA84F] after:transition-all after:duration-500 ${!isActive ? "after:w-0" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="ml-4 pl-4 border-l border-border/40">
              <Button
                onClick={openConsultation}
                className="bg-[#6AA84F] hover:bg-[#6AA84F]/90 text-white font-body text-[12px] font-bold px-6 py-2.5 tracking-wider uppercase transition-all duration-500 rounded-md shadow-lg shadow-[#6AA84F]/20"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          <button
            className="lg:hidden text-primary p-2 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="container py-4 glass-strong border-t border-border/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block w-full text-center py-3 px-6 rounded-xl font-body text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isActive
                      ? "bg-[#6AA84F]/10 text-[#6AA84F] border border-[#6AA84F]/20"
                      : "text-primary/70 hover:text-[#6AA84F] hover:bg-[#6AA84F]/5"
                    }`
                  }
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="mt-2 pt-4 border-t border-border/10">
                <Button
                  onClick={openConsultation}
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white font-body text-[11px] font-bold px-6 py-4 tracking-[0.2em] uppercase rounded-xl transition-all duration-300"
                >
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
