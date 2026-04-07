import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const navItems = ['Home', 'About', 'Services', 'Sectors', 'Team', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Main nav */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card py-3' : 'bg-background/50 backdrop-blur-sm py-5'}`}>
        <div className="container flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="font-heading text-xl font-bold text-primary tracking-wide">SABAPATHY & CO</span>
            <span className="text-[10px] font-body tracking-[0.3em] text-muted-foreground uppercase">Chartered Accountants</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-body text-sm font-medium text-foreground/80 gold-underline hover:text-primary transition-colors pb-1"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo('contact')}
              className="bg-gradient-gold text-primary-foreground font-body text-sm px-6 hover:shadow-gold transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          <button className="lg:hidden text-primary" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container py-4 bg-background/98 backdrop-blur-lg border-t border-border">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left py-3 font-body text-foreground/80 hover:text-primary transition-colors"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
