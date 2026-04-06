import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const Webinars = () => {

  return (
    <>
      <Helmet>
        <title>Webinars - TechLink</title>
        <meta 
          name="description" 
          content="Join live webinars and watch on-demand sessions from TechLink experts on technology, cloud computing, AI, and digital transformation." 
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl mb-6">
              <Video className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Webinars</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn from industry experts through live sessions and on-demand webinars covering the latest technology trends
            </p>
          </motion.div>

          {/* Coming Soon Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-12 md:p-20 shadow-xl border border-gray-100 text-center relative overflow-hidden mb-16"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center w-24 h-24 bg-primary-50 rounded-3xl mb-8 shadow-inner"
              >
                <Video className="w-12 h-12 text-primary-600" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert-Led Sessions <br />
                <span className="text-gradient">Coming Soon</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                We're currently curating a series of high-impact webinars led by industry experts.
                These sessions will dive deep into digital transformation, AI integration, 
                and advanced engineering solutions to help you stay ahead of the curve.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                  Inaugural Session in Planning
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                  Live Q&A with Leadership
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                  Interactive Tech Deep-Dives
                </div>
              </div>
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
              Stay Updated on Upcoming Webinars
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new webinars and access exclusive content
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Webinars;
