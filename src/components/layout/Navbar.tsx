import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { name: 'Clubs', path: '/clubs', icon: <Users size={18} /> },
  ];

  const navbarStyles = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-dark-900/80 backdrop-blur-xl shadow-lg shadow-primary-900/20 border-b border-white/5' 
      : 'bg-transparent'
  }`;

  const navLinkStyles = `relative group flex items-center gap-2 py-2 px-3 rounded-md transition-all duration-300`;
  const activeNavLinkStyles = `bg-primary-600/20 text-primary-400 shadow-lg shadow-primary-900/20`;
  const inactiveNavLinkStyles = `hover:bg-white/5 hover:text-primary-400`;

  return (
    <header className={navbarStyles}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <span className="text-white font-poppins font-bold text-lg tracking-tight group-hover:text-primary-400 transition-colors">
              Campus Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${navLinkStyles} ${
                  location.pathname === link.path ? activeNavLinkStyles : inactiveNavLinkStyles
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
                
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Search Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
            <motion.button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-primary-400 rounded-full hover:bg-white/5 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
            >
              <Search size={20} />
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-primary-400 md:hidden rounded-full hover:bg-white/5 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glass-dark border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${navLinkStyles} ${
                    location.pathname === link.path ? activeNavLinkStyles : inactiveNavLinkStyles
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-xl border-t border-white/5 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events, clubs..."
                  className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-300"
                  autoFocus
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <motion.button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;