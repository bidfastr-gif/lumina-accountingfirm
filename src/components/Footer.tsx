import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-primary relative overflow-hidden">
    {/* Subtle texture */}
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

    <div className="container relative z-10 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-xl font-bold text-primary-foreground tracking-[0.02em]">SABAPATHY & CO</h3>
          <p className="font-body text-[9px] tracking-[0.3em] text-primary-foreground/35 uppercase mt-1 font-medium">Chartered Accountants</p>
          <div className="w-8 h-px bg-gold/30 mt-5 mb-5" />
          <p className="font-body text-[13px] text-primary-foreground/40 leading-[1.8]">
            Established in 1976, providing expert Audit, Assurance, Taxation and Management Consultancy services for over 49 years.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[11px] font-semibold text-primary-foreground/60 mb-5 uppercase tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Our Services', path: '/services' },
              { label: 'Careers', path: '/careers' },
              { label: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="font-body text-[13px] text-primary-foreground/35 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-body text-[11px] font-semibold text-primary-foreground/60 mb-5 uppercase tracking-[0.2em]">Contact Us</h4>
          <div className="space-y-4 font-body text-[13px] text-primary-foreground/35 leading-relaxed">
            <div className="space-y-1">
              <p className="text-primary-foreground/55 font-semibold text-[11px] uppercase tracking-wider">Head Office</p>
              <p>New No.81, Old no.47, #139, Dr. Radhakrishnan Salai, Mylapore, Chennai - 600 004</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary-foreground/55 font-semibold text-[11px] uppercase tracking-wider">Telephone</p>
              <p>044-35943060 / 47996581</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary-foreground/55 font-semibold text-[11px] uppercase tracking-wider">Mobile</p>
              <p>+91 98400 67587</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary-foreground/55 font-semibold text-[11px] uppercase tracking-wider">Email</p>
              <a href="mailto:sabapathyca@hotmail.com" className="hover:text-gold transition-colors">sabapathyca@hotmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-primary-foreground/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-body text-[11px] text-primary-foreground/25 tracking-wider">
          © 2026 SABAPATHY & CO. All Rights Reserved.
        </p>
        <p className="font-body text-[11px] text-primary-foreground/20 tracking-wider">
          Chartered Accountants · Est. 1976
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
