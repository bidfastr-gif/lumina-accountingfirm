import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useModal } from '@/context/ModalContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { openConsultation } = useModal();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'py-2.5 glass-strong shadow-card border-b border-border/30'
          : 'py-5 bg-transparent'
      }`}>
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex flex-col cursor-pointer group">
            <span className="font-heading text-xl font-bold text-primary tracking-[0.02em] group-hover:text-gold transition-colors duration-500">SABAPATHYCA</span>
            <span className="text-[9px] font-body tracking-[0.35em] text-muted-foreground uppercase font-medium">Chartered Accountants</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-body text-[11px] font-bold px-5 py-2.5 rounded-lg transition-all duration-500 uppercase tracking-widest bg-primary text-white shadow-md hover:shadow-elevated hover:bg-navy-light ${
                    isActive
                      ? 'ring-2 ring-gold/50 shadow-gold/20'
                      : 'opacity-90 hover:opacity-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="ml-4 pl-4 border-l border-border/40">
              <Button 
                onClick={openConsultation}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-[12px] font-semibold px-6 py-2.5 tracking-wider uppercase hover:shadow-elevated transition-all duration-500 rounded-lg"
              >
                Get Consultation
              </Button>
            </div>
          </div>

          <button className="lg:hidden text-primary p-2 rounded-lg hover:bg-primary/5 transition-colors" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container py-4 glass-strong border-t border-border/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block w-full text-center py-3 px-6 rounded-xl font-body text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-white shadow-gold sm:shadow-gold/20 ring-1 ring-gold/30' 
                        : 'text-primary/70 hover:text-primary hover:bg-primary/5'
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
                  className="w-full bg-primary hover:bg-navy-light text-primary-foreground font-body text-[11px] font-bold px-6 py-4 tracking-[0.2em] uppercase rounded-xl shadow-lg transition-all duration-300"
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
