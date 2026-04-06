import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Plane,
  Car,
  FlaskConical,
  Factory,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Plane,
      title: 'Aerospace, Aviation + Defense',
      slug: 'aerospace-aviation-defense',
      description: 'Advanced technology solutions for aerospace, aviation, and defense sectors with mission-critical reliability.',
      features: ['Flight Systems Integration', 'Defense Compliance', 'Aviation Safety Systems'],
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'hover:shadow-blue-500/20',
      isAvailable: true,
    },
    {
      icon: Car,
      title: 'Automotive',
      slug: 'automotive',
      description: 'Innovative solutions for automotive manufacturers and suppliers driving the future of mobility.',
      features: ['Connected Vehicles', 'Manufacturing Automation', 'Supply Chain Optimization'],
      color: 'from-gray-600 to-gray-800',
      glowColor: 'hover:shadow-gray-600/20',
      isAvailable: true,
    },
    {
      icon: FlaskConical,
      title: 'Commercial Labs',
      slug: 'commercial-labs',
      description: 'Specialized technology solutions for commercial laboratories and testing facilities.',
      features: ['Lab Information Systems', 'Data Management', 'Quality Assurance'],
      color: 'from-primary-600 to-secondary-500',
      isAvailable: false,
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Industry 4.0 solutions for smart factories and supply chain optimization.',
      features: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Management'],
      color: 'from-orange-500 to-amber-500',
      isAvailable: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve - TechLink</title>
        <meta
          name="description"
          content="TechLink provides specialized technology solutions for aerospace, automotive, commercial labs, and manufacturing industries."
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
              Industries We <span className="text-gradient">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized solutions tailored to the unique needs and challenges of your industry
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={industry.isAvailable ? { y: -10 } : {}}
                  className={`group bg-white rounded-2xl p-8 shadow-lg ${industry.isAvailable ? `hover:shadow-2xl ${industry.glowColor}` : 'opacity-60 grayscale-[0.5]'} transition-all duration-300 border border-gray-100 flex flex-col h-full relative overflow-hidden`}
                >
                  {!industry.isAvailable && (
                    <div className="absolute top-4 right-4 bg-gray-100/80 backdrop-blur-sm text-gray-500 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-gray-200 z-10">
                      Upcoming
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.isAvailable ? industry.color : 'from-gray-200 to-gray-300'} flex items-center justify-center mb-6 ${industry.isAvailable ? 'group-hover:scale-110 group-hover:rotate-3 shadow-lg' : ''} transition-all duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${industry.isAvailable ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {industry.isAvailable ? (
                      <Link
                        to={`/industries/${industry.slug}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      // Unavailable services: 'Learn More' is currently disabled and handled via the top-right 'Upcoming' badge
                      /* 
                      <Link
                        to={`/industries/${industry.slug}`}
                        className="inline-flex items-center text-primary-600/50 font-semibold cursor-not-allowed"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      */
                      null
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md rounded-2xl p-12 shadow-sm border border-white/20 mb-16 relative overflow-hidden"
          >
            {/* Grid background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '50+', label: 'Industry Clients' },
                { number: '15+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2 drop-shadow-sm">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-bold uppercase tracking-wider text-[10px]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            {/* Decor Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can help your business thrive
            </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Industries;

