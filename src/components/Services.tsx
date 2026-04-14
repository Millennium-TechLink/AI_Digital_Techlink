import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto"
        >
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
              <Link
                key={service.title}
                to={`/services/${service.slug}`}
                className={`block outline-none ${colClasses}`}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={service.isComingSoon ? { y: -5 } : { y: -15, scale: 1.02 }}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 h-full overflow-hidden ${service.isComingSoon ? 'cursor-default opacity-80 grayscale-[0.8]' : 'hover:shadow-2xl'
                    }`}
                >
                  {/* Coming Soon Badge */}
                  {service.isComingSoon && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary-50 text-primary-600 border border-primary-100">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Animated background gradient on hover */}
                  {!service.isComingSoon && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      initial={false}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform relative ${!service.isComingSoon && 'group-hover:scale-110'
                      } ${service.isComingSoon ? 'opacity-80 grayscale-[0.5]' : ''}`}
                    whileHover={!service.isComingSoon ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white relative z-10" />
                    {!service.isComingSoon && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-xl opacity-50`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
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
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${service.isComingSoon ? 'bg-gray-300' : 'bg-primary-600'
                          }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect overlay */}
                  {!service.isComingSoon && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
