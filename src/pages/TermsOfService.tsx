import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - TechLink</title>
        <meta 
          name="description" 
          content="TechLink Terms of Service - Read our terms and conditions for using our website and services." 
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
              Terms of Service
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using TechLink's website and services, you agree to be bound by these Terms of
                Service and all applicable laws and regulations. If you do not agree with any of these terms,
                you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on TechLink's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechLink provides technology consulting and development services. All services are subject to
                separate service agreements that will be provided before the commencement of work. The terms
                outlined in those agreements will govern the specific services provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete,
                and current at all times. You are responsible for safeguarding the password and for all activities
                that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The website and its original content, features, and functionality are owned by TechLink and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual
                property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our website or services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code or viruses</li>
                <li>To impersonate or attempt to impersonate the company or any employee</li>
                <li>In any way that infringes upon the rights of others</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall TechLink or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on TechLink's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Revisions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechLink may revise these terms of service at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@techlink.com<br />
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

export default TermsOfService;

