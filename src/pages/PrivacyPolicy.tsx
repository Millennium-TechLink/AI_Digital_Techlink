import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - TechLink</title>
        <meta 
          name="description" 
          content="TechLink Privacy Policy - Learn how we collect, use, and protect your personal information." 
        />
      </Helmet>
      <div className="pt-28 md:pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechLink ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal data such as name, email address, phone number, and company information</li>
                <li>Usage data including IP address, browser type, pages visited, and time spent on our website</li>
                <li>Cookies and tracking technologies</li>
                <li>Information you provide when contacting us or using our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Find and prevent fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store
                certain information. You can instruct your browser to refuse all cookies or to indicate when a
                cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@techlink.com<br />
                  <strong>Phone:</strong> +91-9156031867<br />
                  <strong>Address:</strong> 18, 19, 2nd Floor, Mahalaxmi Heights, 17, Mumbai Highway, Morewadi, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

