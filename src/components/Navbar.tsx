import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Data & Analytics', href: '/services/data-analytics' },
        { name: 'Digital Experiences', href: '/services/digital-experiences' },
        { name: 'Custom Development', href: '/services/custom-development' },
        { name: 'IT Consulting', href: '/services/it-consulting' },
        { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      hasDropdown: false
    },
    {
      name: 'Products',
      href: '/products',
      hasDropdown: false
    },
    {
      name: 'About Us',
      href: '/about',
      hasDropdown: false
    },
    {
      name: 'Resources',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Whitepapers', href: '/whitepapers' },
        { name: 'Webinars', href: '/webinars' },
      ]
    },
    {
      name: 'Insights',
      href: '/insights',
      hasDropdown: false
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/98 backdrop-blur-lg shadow-md border-b border-gray-100'
        : 'bg-white/90 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
          >
            <motion.img
              src="/assets/logos/logo-colored.png"
              alt="TechLink Logo"
              className="h-12 md:h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.hasDropdown ? (
                  <div
                    onClick={(e) => e.preventDefault()}
                    className={`transition-all font-medium flex items-center gap-1.5 px-4 py-2.5 rounded-lg cursor-pointer ${link.dropdownItems?.some(item => location.pathname === item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                  >
                    <span className="text-sm md:text-base">{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`transition-all font-medium flex items-center gap-1.5 px-4 py-2.5 rounded-lg ${location.pathname === link.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                  >
                    <span className="text-sm md:text-base">{link.name}</span>
                  </Link>
                )}
                {link.hasDropdown && link.dropdownItems && (
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg text-sm md:text-base whitespace-nowrap"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <div className="block text-gray-700 font-medium mb-2">
                        {link.name}
                      </div>
                      {link.dropdownItems && (
                        <div className="pl-4 space-y-2 mt-2">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block text-sm text-gray-600 hover:text-primary-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-gray-700 hover:text-primary-600 font-medium mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link to="/contact" className="block">
                  <button className="w-full bg-primary-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

