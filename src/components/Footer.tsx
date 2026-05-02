import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary relative overflow-hidden">
    {/* Subtle texture */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }}
    />

    <div className="container relative z-10 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/images/ca_india_logo.jpeg"
              alt="CA India Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <h3 className="font-heading text-xl font-bold text-white tracking-[0.02em]">
                SABAPATHY & DHANDAPANI
              </h3>
              <p className="font-body text-[9px] tracking-[0.3em] text-white uppercase mt-0.5 font-medium">
                Chartered Accountants
              </p>
            </div>
          </div>
          <div className="w-8 h-px bg-[#6AA84F] mt-5 mb-5" />
          <p className="font-body text-[13px] text-white/90 leading-[1.8]">
            Established with a vision to provide expert Audit, Assurance, Taxation and
            Management Consultancy services with global standards.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[11px] font-semibold text-[#6AA84F] mb-5 uppercase tracking-[0.2em]">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Our Services", path: "/services" },

              { label: "Careers", path: "/careers" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="font-body text-[13px] text-white hover:text-[#6AA84F] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-body text-[11px] font-semibold text-[#6AA84F] mb-5 uppercase tracking-[0.2em]">
            Contact Us
          </h4>
          <div className="space-y-4 font-body text-[13px] text-white/90 leading-relaxed">
            <div className="space-y-1">
              <p className="text-white font-semibold text-[11px] uppercase tracking-wider">
                Address
              </p>
              <p className="text-white">
                FLAT NO.2A, 2ND FLOOR, NALANDA APARTMENTS,<br />(NEXT TO HOTEL SARAVANA BHAVAN)   <br />
                Dr. Radhakrishnan Salai, Mylapore,
                <br />
                Chennai - 600 004
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold text-[11px] uppercase tracking-wider">
                Telephone
              </p>
              <p className="text-white">044-35943060 / 47996581</p>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold text-[11px] uppercase tracking-wider">
                Mobile
              </p>
              <p className="text-white">+91 98400 67587</p>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold text-[11px] uppercase tracking-wider">
                Email
              </p>
              <a
                href="mailto:sabapathyca@hotmail.com"
                className="text-white hover:text-[#6AA84F] transition-colors"
              >
                sabapathyca@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-body text-[11px] text-white/60 tracking-wider">
          © 2026 SABAPATHY & DHANDAPANI. All Rights Reserved.
        </p>
        <p className="font-body text-[11px] text-white/60 tracking-wider">
          Chartered Accountants · Global Standards
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
