import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { features } from '@/data/features';
import { featureStats } from '@/data/stats';
import AnimatedCounter from './AnimatedCounter';

const Features = () => {

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">TechLink</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to
              deliver solutions that drive real business value.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white transition-all duration-300 border border-gray-200 hover:border-primary-200 hover:shadow-lg group"
                >
                  <motion.div
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {featureStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">
                <AnimatedCounter value={stat.number} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

