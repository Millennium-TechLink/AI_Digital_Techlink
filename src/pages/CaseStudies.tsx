import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'TechCorp: 10x Infrastructure Scaling',
      industry: 'Financial Services',
      challenge: 'Legacy infrastructure couldn\'t handle rapid growth',
      solution: 'Migrated to cloud-native architecture with auto-scaling',
      results: [
        '10x increase in processing capacity',
        '60% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment cycles',
      ],
      metrics: {
        scale: '10x',
        cost: '-60%',
        uptime: '99.9%',
      },
    },
    {
      title: 'DataFlow Inc: Real-Time Analytics Platform',
      industry: 'Technology',
      challenge: 'Need for real-time data processing at scale',
      solution: 'Built custom analytics platform with stream processing',
      results: [
        'Real-time data processing at 1M+ events/second',
        '90% reduction in query response time',
        'Scalable to handle 10x growth',
        'Improved decision-making speed by 5x',
      ],
      metrics: {
        events: '1M+/sec',
        speed: '5x faster',
        scale: '10x growth',
      },
    },
    {
      title: 'HealthCare Plus: Digital Transformation',
      industry: 'Healthcare',
      challenge: 'Outdated systems affecting patient care',
      solution: 'Modernized systems with HIPAA-compliant cloud solutions',
      results: [
        '40% improvement in patient satisfaction',
        '30% reduction in operational costs',
        '100% HIPAA compliance',
        'Seamless telemedicine integration',
      ],
      metrics: {
        satisfaction: '+40%',
        cost: '-30%',
        compliance: '100%',
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - TechLink</title>
        <meta 
          name="description" 
          content="Explore real-world success stories and case studies from TechLink clients across various industries." 
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
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses. See how we've helped companies transform and grow.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Challenge
                      </h3>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Solution
                      </h3>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Metrics */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 h-full">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Key Metrics</h3>
                      <div className="space-y-4">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-600 mb-1 capitalize">{key}</div>
                            <div className="text-2xl font-bold text-primary-600">{value}</div>
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="mt-6 block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                      >
                        Get Similar Results
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;

