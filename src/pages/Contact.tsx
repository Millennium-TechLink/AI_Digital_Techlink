import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - TechLink</title>
        <meta 
          name="description" 
          content="Get in touch with TechLink. Schedule a consultation, ask questions, or learn more about our services." 
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's start a conversation about how we can help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:contact@techlink.com" className="text-gray-600 hover:text-primary-600">
                        contact@techlink.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+919156031867" className="text-gray-600 hover:text-primary-600">
                        +91-9156031867
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        18, 19, 2nd Floor, Mahalaxmi Heights<br />
                        17, Mumbai Highway, Morewadi<br />
                        Pimpri Colony, Pune, Pimpri-Chinchwad<br />
                        Maharashtra 411018
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500">Saturday: Closed</p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="cloud">Cloud & Infrastructure</option>
                        <option value="data">Data & Analytics</option>
                        <option value="digital">Digital Experiences</option>
                        <option value="security">Cybersecurity</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="custom">Custom Development</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

