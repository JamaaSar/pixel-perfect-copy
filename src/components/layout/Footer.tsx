import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Purpose & Values", href: "/about#values" },
    { name: "Corporate Information", href: "/about#corporate" },
    { name: "Leadership", href: "/about#leadership" },
  ],
  services: [
    { name: "Investment Solutions", href: "/strategies#investment" },
    { name: "Business Advisory", href: "/strategies#advisory" },
    { name: "Portfolio", href: "/strategies#portfolio" },
  ],
  contact: [
    { name: "Submit a Request", href: "/contact" },
    { name: "Whistleblowing", href: "/contact#whistleblowing" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-semibold tracking-tight">
                Pax Mongolica
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              A private investment office specializing in complex industrial sectors, 
              focused on perpetual growth and disciplined stewardship.
            </p>
            <div className="mt-6 gold-line" />
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <p className="text-sm text-primary-foreground/70">
                17th Floor, City Tower<br />
                Sukhbaatar Square 8/1<br />
                Ulaanbaatar, Mongolia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Pax Mongolica LLC. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Registration No. 7031057
          </p>
        </div>
      </div>
    </footer>
  );
};
