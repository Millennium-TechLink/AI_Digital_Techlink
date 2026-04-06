import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'From Copilots to Agents: What McKinsey’s 2025 AI Report Reveals',
      excerpt: 'McKinsey data shows 64% of companies report innovation gains from AI, while "Agentic AI" is emerging as the next big shift from mere assistance to autonomous action.',
      date: 'November 11, 2025',
      readTime: '8 min read',
      category: 'AI & ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      externalUrl: 'https://www.linkedin.com/pulse/from-copilots-agents-what-mckinseys-2025-ai-report-reveals-chandler-dv1pe'
    },
    {
      id: 2,
      title: 'Gartner Projects $244 Billion in Security Spending for 2026',
      excerpt: 'Enterprise security spending is on track to approach $244 billion in 2026, marking one of the largest shifts to automation-driven, zero-trust architectures.',
      date: 'February 10, 2026',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      externalUrl: 'https://www.linkedin.com/pulse/gartner-projects-244-billion-security-spending-2026-ai-louis-columbus-dciec'
    },
    {
      id: 3,
      title: '2026 Tech Outlook: “Engineered for Impact” in the Cloud',
      excerpt: 'Gartner forecasts that global public cloud spending will exceed $723 billion in 2025, reinforcing that cloud remains a dominant force for 2026 digital infrastructure.',
      date: 'January 12, 2026',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      externalUrl: 'https://www.linkedin.com/pulse/2026-tech-outlook-engineered-impact-quinnoxinc-lsvmc'
    },
    {
      id: 4,
      title: 'Big Data: The Next Frontier for Innovation and Competition',
      excerpt: 'In sectors like healthcare and manufacturing, data-driven decisions are predicted to improve efficiency by 20% to 30% according to 2025 data research.',
      date: 'December 15, 2025',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      externalUrl: 'https://www.linkedin.com/pulse/big-data-next-frontier-innovation-competition-2025-perspective-garg-naube'
    },
    {
      id: 5,
      title: 'Why 70% of AI Transformations Fail (And How to Succeed)',
      excerpt: 'While many digital transformations struggle, prioritizing the "human element" can help AI-driven initiatives boost productivity by up to 40%.',
      date: 'July 14, 2025',
      readTime: '12 min read',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      externalUrl: 'https://www.linkedin.com/pulse/human-element-why-70-ai-transformations-fail-how-succeed-trent-cotton-rjtbe'
    },
    {
      id: 6,
      title: 'The Gartner Top 10 Strategic Technology Trends for 2026',
      excerpt: 'Technology leaders face a pivotal year in 2026 as they navigate the integration of agentic AI and expanded edge computing capabilities.',
      date: 'November 11, 2025',
      readTime: '10 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      externalUrl: 'https://www.linkedin.com/pulse/gartner-top-10-strategic-technology-trends-2026-madaswamy-rwxtc'
    }
  ];

  const categories = ['All', 'Cloud Computing', 'Data Analytics', 'Security', 'AI & ML', 'Digital Transformation', 'Technology'];

  const filteredPosts = (activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Helmet>
        <title>Blog - TechLink</title>
        <meta 
          name="description" 
          content="Read the latest insights, trends, and best practices from TechLink experts on technology, cloud computing, AI, and digital transformation." 
        />
      </Helmet>
      <div className="pt-28 md:pt-32 pb-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest insights, trends, and best practices from our technology experts
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm border ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid - Section Refresh Style */}
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col group cursor-default"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {post.externalUrl ? (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto"
                    >
                      Read More on LinkedIn
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Post
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest blog posts delivered to your inbox
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

export default Blog;
