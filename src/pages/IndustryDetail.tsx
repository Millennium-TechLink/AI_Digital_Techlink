import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const industryData: Record<string, {
    title: string;
    tagline: string;
    description: string;
    features: Array<{ icon: string; title: string; description: string }>;
  }> = {
    'automotive': {
      title: 'Automotive',
      tagline: 'Your Business Moves Fast. Millennium Techlink Does Too.',
      description: 'Millennium Techlink is here to make your quality systems work efficiently and effectively. With our all-in-one solution, you\'ll save time and money. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'workflow',
          title: 'Customizable Workflows',
          description: 'Optimize your workflow to suit the calibration, maintenance and asset tracking needs of your business rather than conform to the way the software operates.'
        },
        {
          icon: 'tracking',
          title: 'Inventory Tracking',
          description: 'Full inventory, repair and maintenance tracking with automatic asset numbering, historical event tracking, location awareness and so much more.'
        },
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Gain the necessary technical controls to meet government-mandated data security requirements. Maintain compliance with ISO/TS 16949, ISO/IEC 17025, ISO 9001 and more.'
        },
        {
          icon: 'msa',
          title: 'Measurement System Analysis (MSA)',
          description: 'MSA utility for performing R&R, Bias, Linearity, and Stability studies.'
        },
        {
          icon: 'barcoding',
          title: 'Barcoding',
          description: 'Integrated 1D/2D barcoding and calibration sticker printing for quick and efficient equipment tracking and process automation.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    },
    'aerospace-aviation-defense': {
      title: 'Aerospace, Aviation + Defense',
      tagline: 'Take Your Operations to Great Heights',
      description: 'With more than 20 years of experience, the Millennium Techlink team has listened to what our partners in the aerospace, aviation and defense industries have asked for, and incorporated industry specific solutions into our comprehensive, yet easy-to-use, software. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'workflow',
          title: 'Customizable Workflows',
          description: 'Customizable and flexible workflows can be altered to support your business flow and data requirements.'
        },
        {
          icon: 'tool-tracking',
          title: 'Asset Management',
          description: 'Full inventory, repair and maintenance tracking with automatic asset numbering, historical event tracking, customized scheduling and more.'
        },
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Gain the necessary technical controls to meet government-mandated data security requirements. Maintain compliance with ANSI 540.3, ISO 9001, AS 9100, and more.'
        },
        {
          icon: 'audits',
          title: 'Complete Traceability',
          description: 'Maintain a comprehensive history of all user interactions to preserve a complete audit trail.'
        },
        {
          icon: 'automation',
          title: 'Automation',
          description: 'Automated recalls for due notices and alerts, trigger notifications for equipment that fails calibration work and requires follow up with corrective action.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    },
    'commercial-labs': {
      title: 'Commercial Labs',
      tagline: 'Your Customers Depend On You. You Can Depend On Millennium Techlink.',
      description: 'Whether you\'re a single user calibration lab or an international multi-site operation, Millennium Techlink helps you keep your workflow on track and your data up-to-date and accessible, all while maintaining ISO/IEC 17025 compliance. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Designed explicitly for use in regulated environments. Maintain compliance with ISO/IEC 17025 and Z540.3.'
        },
        {
          icon: 'workflow',
          title: 'Full Laboratory Information Management System (LIMS)',
          description: 'From customizable calibration workflows to technician scheduling to quote and work order generation and invoicing Millennium Techlink is able to meet both your internal quality needs and external customer demands.'
        },
        {
          icon: 'certified',
          title: 'Digital Calibration Certificates',
          description: 'Customizable calibration certificates, stickers and output documentation.'
        },
        {
          icon: 'calculations',
          title: 'Automated Uncertainty',
          description: 'Calculate uncertainty in real time as calibration data is collected.'
        },
        {
          icon: 'automation',
          title: 'All-in-One Solution',
          description: 'Manage your calibration, maintenance and tooling through one integrated cost-effective system. Support the diverse needs of the various departments within your operation with a standard user license.'
        },
        {
          icon: 'sync',
          title: 'Automated Tech Sync',
          description: 'Perform off-site field calibrations and seamlessly sync data between the lab and calibration technician while detached from the main database.'
        },
        {
          icon: 'customer',
          title: 'Customer Portal',
          description: 'Brand your own user-friendly customer portal linked to your website which allows access to certificates, reports, schedules, and real-time equipment statuses.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    },
    'energy': {
      title: 'Energy',
      tagline: 'Work Smarter, Not Harder.',
      description: 'Transform your operations with our customizable workflows and powerful data searching features. Ideal for multi-facility operations that need audit-ready data. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'workflow',
          title: 'Customizable Workflows',
          description: 'Customizable and flexible workflows can be altered to support your business flow and data requirements.'
        },
        {
          icon: 'tool-tracking',
          title: 'Asset Management',
          description: 'Full inventory, repair and maintenance tracking with automatic asset numbering, historical event tracking, customized scheduling and more.'
        },
        {
          icon: 'audits',
          title: 'Complete Traceability',
          description: 'Maintain a comprehensive history of all user interactions to preserve a complete audit trail.'
        },
        {
          icon: 'tool-tracking',
          title: 'Tool Tracking',
          description: 'Track an unlimited number of serialized or non-serialized tools in unique, batch, or consumable groups.'
        },
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Meets compliance to environmental and safety standards for organizations looking to conform to Environmental Protective Agency (EPA) and Nuclear Regulatory Commission (NRC), 10 CFR standards.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    },
    'life-sciences': {
      title: 'Life Sciences',
      tagline: 'Life is complicated. Your calibration software doesn\'t have to be.',
      description: 'Streamline your processes to maximize productivity and profitability while maintaining data integrity and compliance with 21 CFR Part 11, GMP, GLP, and GCP guidelines. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'workflow',
          title: 'Customizable Workflows',
          description: 'Optimize your workflow to suit the calibration, maintenance and asset tracking needs of your business rather than conform to the way the software operates.'
        },
        {
          icon: 'audits',
          title: 'Complete Traceability',
          description: 'Maintain a comprehensive history of all user interactions to preserve a complete audit trail.'
        },
        {
          icon: 'automation',
          title: 'Automation',
          description: 'Automated recalls for due notices and alerts, trigger notifications for equipment that fails calibration work and requires follow up with corrective action.'
        },
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Designed to help the life sciences industry ensure authenticity, integrity, and when appropriate confidentiality of electronic records to comply with 21 CFR Part 11.'
        },
        {
          icon: 'signatures',
          title: 'Electronic Signatures',
          description: 'Customize your own sign-off rules for all recorded data.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    },
    'manufacturing': {
      title: 'Manufacturing',
      tagline: 'Improve technician productivity to build a stronger operation',
      description: 'An all-in-one solution, including gage studies, tooling, maintenance, uncertainty, and trend analysis modules, Millennium Techlink calibration management software provides global scalability and audit-ready data. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'workflow',
          title: 'Customizable Workflows',
          description: 'Optimize your workflow to suit the calibration, maintenance and asset tracking needs of your business rather than conform to the way the software operates.'
        },
        {
          icon: 'tool-tracking',
          title: 'Asset Management',
          description: 'Full inventory, repair and maintenance tracking with automatic asset numbering, historical event tracking, customized scheduling and more.'
        },
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Built upon a framework that incorporates the methodologies and processes associated with the ISO 9001 QMS requirements Millennium Techlink provides the technical controls necessary to maintain compliance with ISO 9001 and other industry standards.'
        },
        {
          icon: 'barcoding',
          title: 'Barcoding',
          description: 'Integrated 1D/2D barcoding and calibration sticker printing for quick and efficient equipment tracking and process automation.'
        },
        {
          icon: 'automation',
          title: 'All-in-One Solution',
          description: 'Manage your calibration, maintenance and tooling through one integrated cost-effective system. Support the diverse needs of the various departments within your operation with a standard user license.'
        },
        {
          icon: 'msa',
          title: 'Measurement System Analysis (MSA)',
          description: 'MSA utility for performing R&R, Bias, Linearity, and Stability studies.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    },
    'oil-gas': {
      title: 'Oil & Gas',
      tagline: 'Millennium Techlink helps you ensure that you have accurate process management to meet the critical requirements of the industry and keeps your data easily accessible and audit-ready with digital calibration certificates and an intuitive reporting module.',
      description: 'Transform your operations with easy-to-use equipment templates, navigation, reports and searching. Take advantage of all that Millennium Techlink can do for you:',
      features: [
        {
          icon: 'workflow',
          title: 'Customizable Workflows',
          description: 'Optimize your workflow to suit the calibration, maintenance and asset tracking needs of your business rather than conform to the way the software operates.'
        },
        {
          icon: 'tool-tracking',
          title: 'Asset Management',
          description: 'Full inventory, repair and maintenance tracking with automatic asset numbering, historical event tracking, customized scheduling and more.'
        },
        {
          icon: 'barcoding',
          title: 'Barcoding',
          description: 'Integrated 1D/2D barcoding and calibration sticker printing for quick and efficient equipment tracking and process automation.'
        },
        {
          icon: 'automation',
          title: 'Automation',
          description: 'Automated alerts notify when items are due for calibration, failed calibrations and when corrective action is required.'
        },
        {
          icon: 'compliance',
          title: 'Compliance',
          description: 'Built with compliance in mind, Millennium Techlink provides the technical controls necessary to maintain compliance with ISO 9001 and ISO/TS 29001 standards.'
        },
        {
          icon: 'cloud-license',
          title: 'On-Premise or Cloud',
          description: 'Pay upfront and own outright or choose a monthly or annual plan with our hosted Millennium Techlink Cloud.'
        }
      ]
    }
  };

  const industry = slug ? industryData[slug] : null;

  if (!industry) {
    return (
      <div className="pt-28 md:pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-primary-600 hover:text-primary-700">
            Return to Industries
          </Link>
        </div>
      </div>
    );
  }

  const iconMap: Record<string, string> = {
    'workflow': '⚙️',
    'tracking': '📦',
    'compliance': '✅',
    'msa': '📊',
    'barcoding': '🏷️',
    'cloud-license': '☁️',
    'tool-tracking': '🔧',
    'audits': '📋',
    'automation': '🤖',
    'certified': '📜',
    'calculations': '🧮',
    'sync': '🔄',
    'customer': '👥',
    'signatures': '✍️'
  };

  return (
    <>
      <Helmet>
        <title>{industry.title} - TechLink</title>
        <meta 
          name="description" 
          content={`${industry.tagline} - ${industry.description}`} 
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
              {industry.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
              {industry.tagline}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {industry.description}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industry.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-4xl mb-4">{iconMap[feature.icon] || '✨'}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
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
              Ready to Transform Your {industry.title} Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Millennium Techlink can help your business thrive
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetail;
