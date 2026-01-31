import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-amber-dark flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-xl font-bold text-primary font-display">Annai</span>
              <span className="text-xl font-light text-muted-foreground ml-1">Construction</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 animated-underline ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-accent to-amber-dark text-accent-foreground rounded-full font-medium text-sm transition-all duration-300 hover:shadow-glow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/30"
          >
            <nav className="section-container py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-accent'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-accent to-amber-dark text-accent-foreground rounded-full font-medium transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
