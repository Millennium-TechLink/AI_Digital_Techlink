import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { services } from '@/data/services';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - TechLink</title>
        <meta 
          name="description" 
          content="TechLink offers specialized Design Verification & Validation and Pre-compliance Testing services to ensure product compliance, reliability, and performance." 
        />
      </Helmet>
      <div className="pt-28 md:pt-32 pb-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;

              // Grid spanning logic to center the final items
              let colClasses = "md:col-span-2 lg:col-span-2";
              if (index === 3) {
                // Center the 4th item on big screens
                colClasses += " lg:col-start-2";
              }
              if (index === 4) {
                // Center the 5th item on medium screens
                colClasses += " md:col-start-2 lg:col-start-auto";
              }

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={service.isComingSoon ? { y: -5 } : { y: -15, scale: 1.02, rotateY: 2 }}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden ${colClasses} ${
                    service.isComingSoon ? 'cursor-default opacity-80 grayscale-[0.8]' : 'hover:shadow-2xl'
                  }`}
                >
                  {/* Coming Soon Badge */}
                  {service.isComingSoon && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary-50 text-primary-600 border border-primary-100">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Animated shimmer effect */}
                  {!service.isComingSoon && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      initial={false}
                    />
                  )}

                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform ${
                      !service.isComingSoon && 'group-hover:scale-110'
                    } ${service.isComingSoon ? 'opacity-80 grayscale-[0.5]' : ''}`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {service.isComingSoon ? (
                    <div className="inline-flex items-center text-gray-400 font-medium cursor-default">
                      Stay Tuned
                      <Zap className="w-4 h-4 ml-1 text-primary-400/50" />
                    </div>
                  ) : (
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;

