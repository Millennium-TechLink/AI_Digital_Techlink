import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#393077' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-primary-600/20"
            animate={{
              backgroundPosition: ['0%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Build Your Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-10 leading-relaxed"
            >
              Schedule a consultation with our experts to discuss your goals and discover
              how we can help transform your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Sales</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>No Commitment Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Expert Team Available</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

