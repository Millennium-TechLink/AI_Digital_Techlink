import { motion } from 'framer-motion';
import { services } from '@/data/services';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to power your digital transformation journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={false}
                />
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white relative z-10" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-xl opacity-50`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

