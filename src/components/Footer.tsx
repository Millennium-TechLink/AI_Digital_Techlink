import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp 
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure' },
      { name: 'Data & Analytics', href: '/services/data-analytics' },
      { name: 'Digital Experiences', href: '/services/digital-experiences' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'IT Consulting', href: '/services/it-consulting' },
      { name: 'Custom Development', href: '/services/custom-development' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Whitepapers', href: '/whitepapers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Support', href: '/contact' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/about' },
      { name: 'Careers', href: '/contact' },
      { name: 'Newsroom', href: '/insights' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/logo.svg"
                alt="TechLink Logo"
                className="h-16 md:h-20 w-auto mb-4 opacity-90 hover:opacity-100 transition-opacity"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in digital transformation. We provide expert
                solutions to accelerate your business growth and innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contact@techlink.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91-9156031867</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>18, 19, 2nd Floor, Mahalaxmi Heights, 17, Mumbai Highway, Morewadi, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns - Services, Resources, Company */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} TechLink Inc. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6 mt-4 md:mt-0"
          >
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

