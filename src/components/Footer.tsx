import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Residential Construction',
    'Commercial Buildings',
    'Renovation & Remodeling',
    'Interior Works',
    'Structural Works',
    'Turnkey Projects',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="section-container py-16">
        <div className="glass-card-dark p-8 md:p-12 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Ready to Build Your Dream Project?
          </h3>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Get a free consultation and quote for your construction project. Our experts are ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-amber-dark text-accent-foreground rounded-full font-medium transition-all duration-300 hover:shadow-glow-lg group"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-amber-dark flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="text-xl font-bold font-display">Annai</span>
                  <span className="text-xl font-light ml-1 opacity-70">Construction</span>
                </div>
              </div>
              <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
                With 15+ years of excellence in construction, we build trust and dreams. 
                Your vision, our expertise – creating spaces that inspire.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm">
                    123 Construction Avenue,<br />
                    Chennai, Tamil Nadu 600001
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="mailto:info@annaiconstruction.com"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    info@annaiconstruction.com
                  </a>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/5 rounded-xl">
                <p className="text-sm font-medium mb-1">Working Hours</p>
                <p className="text-primary-foreground/70 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Annai Construction. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
