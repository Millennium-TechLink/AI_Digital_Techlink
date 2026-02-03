import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cloud Computing in 2024',
      excerpt: 'Explore the latest trends and innovations shaping the cloud computing landscape, including edge computing, serverless architectures, and AI integration.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    },
    {
      id: 2,
      title: 'Data Analytics: Turning Insights into Action',
      excerpt: 'Learn how to leverage data analytics to drive business decisions and growth. Discover best practices for data collection, analysis, and visualization.',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential security strategies to protect your digital assets and customer data. Learn about the latest threats and how to defend against them.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    },
    {
      id: 4,
      title: 'AI and Machine Learning: Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing the way businesses operate and make decisions.',
      date: 'February 28, 2024',
      readTime: '8 min read',
      category: 'AI & ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      id: 5,
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'A comprehensive guide to digital transformation, covering strategy, implementation, and best practices for modernizing your business.',
      date: 'February 20, 2024',
      readTime: '10 min read',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: What You Need to Know',
      excerpt: 'Understanding edge computing and its impact on modern applications. Learn how it reduces latency and improves user experiences.',
      date: 'February 15, 2024',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    },
  ];

  const categories = ['All', 'Cloud Computing', 'Data Analytics', 'Security', 'AI & ML', 'Digital Transformation', 'Technology'];

  return (
    <>
      <Helmet>
        <title>Blog - TechLink</title>
        <meta 
          name="description" 
          content="Read the latest insights, trends, and best practices from TechLink experts on technology, cloud computing, AI, and digital transformation." 
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
                className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium hover:bg-primary-600 hover:text-white transition-colors shadow-sm border border-gray-200"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
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
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

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
