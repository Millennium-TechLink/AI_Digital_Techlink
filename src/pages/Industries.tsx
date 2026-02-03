import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Car, 
  FlaskConical, 
  Zap, 
  Dna,
  Factory,
  Droplet,
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
    },
    {
      icon: Car,
      title: 'Automotive',
      slug: 'automotive',
      description: 'Innovative solutions for automotive manufacturers and suppliers driving the future of mobility.',
      features: ['Connected Vehicles', 'Manufacturing Automation', 'Supply Chain Optimization'],
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: FlaskConical,
      title: 'Commercial Labs',
      slug: 'commercial-labs',
      description: 'Specialized technology solutions for commercial laboratories and testing facilities.',
      features: ['Lab Information Systems', 'Data Management', 'Quality Assurance'],
      color: 'from-primary-600 to-secondary-500',
    },
    {
      icon: Zap,
      title: 'Energy',
      slug: 'energy',
      description: 'Smart energy solutions for power generation, distribution, and renewable energy management.',
      features: ['Grid Management', 'Renewable Energy Systems', 'Energy Analytics'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Dna,
      title: 'Life Sciences',
      slug: 'life-sciences',
      description: 'Cutting-edge technology solutions for pharmaceutical, biotech, and medical device companies.',
      features: ['Regulatory Compliance', 'Clinical Data Management', 'Research & Development'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Industry 4.0 solutions for smart factories and supply chain optimization.',
      features: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Management'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Droplet,
      title: 'Oil + Gas',
      slug: 'oil-gas',
      description: 'Robust technology solutions for upstream, midstream, and downstream oil and gas operations.',
      features: ['Operations Management', 'Safety & Compliance', 'Asset Optimization'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve - TechLink</title>
        <meta 
          name="description" 
          content="TechLink provides specialized technology solutions for aerospace, automotive, commercial labs, energy, life sciences, manufacturing, and oil & gas industries." 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
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
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-lg mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Industries;

