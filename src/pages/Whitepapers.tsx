import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Whitepapers = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'Autonomous EMC Monitoring: AI-Driven Real-Time RFI Detection in Satellite Networks',
      description: 'A hybrid deep learning framework for autonomous RFI detection and characterization in satellite communication systems, utilizing CNN-LSTM architectures for enhanced reliability.',
      date: 'Aug 16, 2025',
      readTime: '15 min read',
      pages: '12 pages',
      category: 'EMC & AI',
      downloadUrl: '/whitepapers/Aditya_EMC_in_Satellite_Communication.pdf',
    },
    {
      id: 2,
      title: 'AI-Driven Electromagnetic Compatibility Assessment in Modern Power Systems',
      description: 'A comprehensive review of AI applications in enhancing EMC assessment for modern power systems, focusing on fault detection, power quality, and EMI mitigation in smart grids.',
      date: 'Aug 16, 2025',
      readTime: '12 min read',
      pages: '8 pages',
      category: 'Power Systems',
      downloadUrl: '/whitepapers/Karuna_EMC_In_PowerSystems 3.pdf',
    },
    {
      id: 3,
      title: 'Deep Learning-Enabled Antennas for Electromagnetic Compatibility Optimization',
      description: 'Introduction of a novel AI-enabled cognitive antenna framework integrating deep neural networks and reinforcement learning for real-time antenna factor correction.',
      date: 'Aug 16, 2025',
      readTime: '18 min read',
      pages: '10 pages',
      category: 'Antenna Design',
      downloadUrl: '/whitepapers/Omkar_Antennas for EMC.pdf',
    },
    {
      id: 4,
      title: 'Federated AI for Cross-Domain Spectrum Management in Congested Environments',
      description: 'A novel Federated AI (FedAI) framework leveraging Multi-Agent Reinforcement Learning and Explainable AI for privacy-preserving, collaborative spectrum management.',
      date: 'Aug 16, 2025',
      readTime: '20 min read',
      pages: '15 pages',
      category: 'Spectrum Mgmt',
      downloadUrl: '/whitepapers/Parag_Emc_In_Spectrum_Management.pdf',
    },
    {
      id: 5,
      title: 'AI-Enhanced Borophene-Graphene Hybrid EM Shielding for Helicopter Avionics',
      description: 'An intelligent EMI shielding approach integrating a borophene–graphene hybrid structure with AI-driven control, delivering lightweight shielding for aerospace avionics.',
      date: 'Aug 16, 2025',
      readTime: '14 min read',
      pages: '12 pages',
      category: 'Aerospace',
      downloadUrl: '/whitepapers/Shruti_EM_Shielding Materials.pdf',
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

          {/* Whitepapers Grid - Balanced & Centered */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold mb-2">
                      {paper.category}
                    </span>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {paper.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {paper.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{paper.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{paper.pages}</span>
                  </div>
                </div>

                <a
                  href={paper.downloadUrl}
                  className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mt-auto"
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
