import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Play, Users, ArrowRight } from 'lucide-react';

const Webinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Digital Transformation Roadmap',
      description: 'Join our experts as they discuss strategies for successful digital transformation, covering planning, implementation, and best practices.',
      date: 'April 5, 2024',
      time: '2:00 PM EST',
      duration: '60 min',
      speakers: ['Dr. Ananth Krishna', 'Akshay'],
      category: 'Strategy',
      registrationUrl: '#',
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Learn the essential steps and considerations for migrating to the cloud, including cost optimization and security measures.',
      date: 'March 25, 2024',
      time: '3:00 PM EST',
      duration: '45 min',
      speakers: ['Harish', 'Harsha'],
      category: 'Cloud Computing',
      registrationUrl: '#',
    },
    {
      id: 3,
      title: 'AI Integration in Business Operations',
      description: 'Discover how to successfully integrate AI and machine learning into your business operations for improved efficiency and insights.',
      date: 'April 15, 2024',
      time: '1:00 PM EST',
      duration: '50 min',
      speakers: ['Sri Harsha', 'Mahima BM'],
      category: 'AI & ML',
      registrationUrl: '#',
    },
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Enterprise Security in the Cloud',
      description: 'Comprehensive discussion on securing enterprise cloud environments and protecting sensitive data.',
      date: 'March 10, 2024',
      duration: '55 min',
      category: 'Security',
      watchUrl: '#',
    },
    {
      id: 5,
      title: 'Data Analytics for Business Growth',
      description: 'Learn how to leverage data analytics to drive business decisions and achieve measurable growth.',
      date: 'February 28, 2024',
      duration: '48 min',
      category: 'Data Analytics',
      watchUrl: '#',
    },
    {
      id: 6,
      title: 'Modern DevOps Practices',
      description: 'Exploring modern DevOps practices, CI/CD pipelines, and automation strategies for faster delivery.',
      date: 'February 15, 2024',
      duration: '52 min',
      category: 'DevOps',
      watchUrl: '#',
    },
  ];

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

          {/* Upcoming Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-primary-600 rounded"></div>
              Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold mb-2">
                        {webinar.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {webinar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {webinar.description}
                  </p>

                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-primary-600" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-primary-600" />
                      <span>{webinar.speakers.join(', ')}</span>
                    </div>
                  </div>

                  <a
                    href={webinar.registrationUrl}
                    className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-primary-600 rounded"></div>
              On-Demand Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="h-40 bg-gradient-to-br from-primary-400 to-primary-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full text-xs font-semibold">
                        {webinar.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {webinar.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                    <a
                      href={webinar.watchUrl}
                      className="inline-flex items-center justify-center w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Now
                    </a>
                  </div>
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
