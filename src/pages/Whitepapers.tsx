import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Whitepapers = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The Complete Guide to Enterprise Cloud Security',
      description: 'Comprehensive guide covering security best practices, compliance requirements, and implementation strategies for enterprise cloud deployments.',
      date: 'March 1, 2024',
      readTime: '20 min read',
      pages: '45 pages',
      category: 'Security',
      downloadUrl: '#',
    },
    {
      id: 2,
      title: 'AI and Machine Learning in Business Operations',
      description: 'Explore how AI and ML are transforming modern business operations, from automation to predictive analytics and intelligent decision-making.',
      date: 'February 15, 2024',
      readTime: '25 min read',
      pages: '52 pages',
      category: 'AI & ML',
      downloadUrl: '#',
    },
    {
      id: 3,
      title: 'Digital Transformation Roadmap: A Strategic Framework',
      description: 'A detailed framework for planning and executing digital transformation initiatives, with real-world examples and best practices.',
      date: 'February 1, 2024',
      readTime: '30 min read',
      pages: '68 pages',
      category: 'Strategy',
      downloadUrl: '#',
    },
    {
      id: 4,
      title: 'Data Governance and Compliance in the Cloud Era',
      description: 'Understanding data governance, privacy regulations, and compliance requirements for organizations operating in cloud environments.',
      date: 'January 20, 2024',
      readTime: '22 min read',
      pages: '48 pages',
      category: 'Compliance',
      downloadUrl: '#',
    },
    {
      id: 5,
      title: 'Microservices Architecture: Design Patterns and Best Practices',
      description: 'Deep dive into microservices architecture, covering design patterns, deployment strategies, and operational considerations.',
      date: 'January 10, 2024',
      readTime: '28 min read',
      pages: '60 pages',
      category: 'Architecture',
      downloadUrl: '#',
    },
    {
      id: 6,
      title: 'The Future of Remote Work: Technology Infrastructure',
      description: 'Exploring the technology infrastructure needed to support modern remote work environments and distributed teams.',
      date: 'December 28, 2023',
      readTime: '18 min read',
      pages: '40 pages',
      category: 'Workplace',
      downloadUrl: '#',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Whitepapers - TechLink</title>
        <meta 
          name="description" 
          content="Download in-depth whitepapers on cloud computing, AI, digital transformation, security, and more from TechLink experts." 
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
              <BookOpen className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Whitepapers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In-depth research and analysis on the latest technology trends, best practices, and industry insights
            </p>
          </motion.div>

          {/* Whitepapers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold mb-2">
                      {paper.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {paper.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {paper.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{paper.pages}</span>
                  </div>
                </div>

                <a
                  href={paper.downloadUrl}
                  className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Research?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts can create tailored whitepapers and research reports for your specific industry or use case
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Research
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Whitepapers;
