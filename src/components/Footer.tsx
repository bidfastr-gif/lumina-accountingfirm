const Footer = () => (
  <footer className="bg-primary py-12 border-t border-border">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold text-primary-foreground">R BUPATHY & CO</h3>
          <p className="font-body text-xs tracking-[0.2em] text-primary-foreground/50 uppercase mt-1">Chartered Accountants</p>
          <p className="font-body text-sm text-primary-foreground/60 mt-4 leading-relaxed">
            Established in 1976, providing expert Audit, Assurance, Taxation and Management Consultancy services for over 49 years.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'Our Services', 'Careers', 'Contact Us'].map((link) => (
              <li key={link}>
                <button
                  onClick={() => document.getElementById(link.split(' ')[0].toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-primary-foreground mb-4">Offices</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/50">
            <p><strong className="text-primary-foreground/70">Chennai:</strong> Vibgyor, #139, Dr.MGR Salai, Chennai 600034</p>
            <p><strong className="text-primary-foreground/70">Bengaluru:</strong> Vidya Bhavan, #31, 4th Floor, Basavanagudi, Bangalore 560004</p>
            <p><strong className="text-primary-foreground/70">Coimbatore:</strong> New Branch - 2025</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © 2026 R. BUPATHY & CO. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
