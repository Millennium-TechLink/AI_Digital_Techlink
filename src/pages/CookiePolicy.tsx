import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - TechLink</title>
        <meta 
          name="description" 
          content="TechLink Cookie Policy - Learn about how we use cookies and similar technologies on our website." 
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
              Cookie Policy
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit
                a website. They are widely used to make websites work more efficiently and provide information
                to the owners of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechLink uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies are essential for the website to function and cannot be switched off. They are
                    usually set in response to actions made by you such as setting your privacy preferences.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the
                    performance of our site. They help us know which pages are most popular.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies enable the website to provide enhanced functionality and personalization. They
                    may be set by us or by third-party providers.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage
                statistics of the website, deliver advertisements, and so on. These third-party cookies are
                subject to the respective privacy policies of these external services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Please keep in mind that removing or
                blocking cookies can impact your user experience and parts of our website may no longer be
                fully accessible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most browsers automatically accept cookies, but you can usually modify your browser settings
                to decline cookies if you prefer. You can also delete cookies that have already been set.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for
                other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to
                stay informed about our use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;

