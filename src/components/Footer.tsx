import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-light tracking-wide">
                Eden Rose
              </span>
              <span className="block font-body text-xs uppercase tracking-ultra text-cream/60 mt-1">
                Photography & Videography
              </span>
            </Link>
            <p className="font-body text-sm text-cream/70 leading-relaxed max-w-xs">
              Enchanting frames. Endless memories. Capturing life's most beautiful moments with artistry and emotion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {['Wedding Photography', 'Birthday Events', 'Corporate Events', 'Videography', 'Photo Albums'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a
                  href="tel:7782891462"
                  className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  778 289 1462
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a
                  href="mailto:edenrose@gmail.com"
                  className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  edenrose@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5" />
                <span className="font-body text-sm text-cream/70">
                  Vancouver, BC, Canada
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cream/20 text-cream/70 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-cream/20 text-cream/70 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/50">
            © {currentYear} Eden Rose Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-body text-xs text-cream/50 hover:text-cream transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-body text-xs text-cream/50 hover:text-cream transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
