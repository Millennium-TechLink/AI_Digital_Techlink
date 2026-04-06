import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-') === slug
  );

  if (!service) {
    return (
      <div className="pt-28 md:pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary-600 hover:text-primary-700">
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.title} - TechLink</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <div className="pt-28 md:pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-6 mb-6">
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center ${service.isComingSoon ? 'opacity-80 grayscale-[0.8]' : ''}`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {service.title}
                  </h1>
                  {service.isComingSoon && (
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary-50 text-primary-600 border border-primary-100 shadow-sm">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-xl text-gray-600">{service.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {service.isComingSoon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary-50/50 border border-primary-100 rounded-2xl p-8 mb-12 text-center"
                >
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Under Development</h3>
                  <p className="text-primary-700">
                    We're currently perfecting our {service.title.toLowerCase()} service to bring you the highest quality solutions. 
                    Most of the information below is a preview of what's to come.
                  </p>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`prose prose-lg max-w-none ${service.isComingSoon ? 'opacity-70 grayscale-[0.8] pointer-events-none' : ''}`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our {service.title.toLowerCase()} solutions are designed to help your business
                  achieve its digital transformation goals. We combine industry expertise with
                  cutting-edge technology to deliver results that matter.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  With years of experience and a proven track record, we've helped hundreds of
                  companies streamline their operations, improve efficiency, and drive growth
                  through innovative technology solutions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Us?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Expert team with certified professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Proven methodology and best practices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      24/7 support and maintenance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Scalable solutions that grow with your business
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 rounded-2xl p-8 sticky top-32 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.isComingSoon ? "Get Early Access" : "Get Started Today"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.isComingSoon 
                    ? "Interested in this service? Contact us to be among the first to be notified when we launch."
                    : "Ready to transform your business? Let's discuss how we can help."}
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-4 shadow-sm hover:shadow-md"
                >
                  {service.isComingSoon ? "Register Interest" : "Schedule a Consultation"}
                </Link>
                <Link
                  to="/services"
                  className="block w-full text-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

