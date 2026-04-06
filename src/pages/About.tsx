import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Heart, ArrowRight, Mail, Linkedin, Briefcase } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technology and innovative solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, not just vendors.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from strategy to execution.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
    },
  ];

  const leadership = {
    business: [
      {
        name: 'Haresh Abichandani',
        role: 'Founder & MD',
        image: '/leaders/Harish Sir.webp',
        bio: 'Passionate about delivering excellence in technology consulting and solutions.',
        email: 'haresh@techlink.com',
        linkedin: 'https://linkedin.com/in/haresh-abichandani',
        expertise: 'Managing Director, Millennium Semiconductor'
      },
      {
        name: 'Dr. Ananth Krishna',
        role: 'Founder & Director',
        image: '/leaders/Ananth Sir.webp',
        bio: 'Visionary leader with extensive experience in technology and business strategy.',
        email: 'ananth@techlink.com',
        linkedin: 'https://linkedin.com/in/ananth-krishna',
        expertise: 'Strategic Planning & Technology Leadership'
      },
      {
        name: 'Mahima BM',
        role: 'Director',
        image: '/leaders/Mahima b.jpg',
        bio: 'Experienced professional with a strong background in technology and innovation.',
        email: 'mahima@techlink.com',
        linkedin: 'https://linkedin.com/in/mahima-bm',
        expertise: 'Technology Innovation & Development',
        imagePosition: 'center 0%',
        imageTransform: 'scale(1.1) translateY(10%) translateX(2%)'
      }
    ],
    strategic: [
      {
        name: 'Shree Harsha GP',
        role: 'Strategic Manager',
        image: '/leaders/Harsha Sir.webp',
        bio: 'Dedicated to driving business growth through strategic technology initiatives.',
        email: 'harsha@techlink.com',
        linkedin: 'https://linkedin.com/in/harsha-gp',
        expertise: 'Business Strategy & Growth',
        imagePosition: 'center 0%'
      }
    ],
    technical: [
      {
        name: 'Sri Harsha',
        role: 'Head - Quality Center of Excellence',
        image: '/leaders/Sri Harsha.png',
        bio: 'Experienced leader focused on delivering innovative solutions and strategic growth.',
        email: 'sriharsha@techlink.com',
        linkedin: 'https://linkedin.com/in/sri-harsha',
        expertise: 'Strategic Solutions & Innovation'
      },
      {
        name: 'Rupam Gogoi',
        role: 'AI Technical Consultant',
        image: '/leaders/placeholder.webp',
        bio: 'Expert in leveraging Artificial Intelligence and machine learning to solve complex engineering challenges.',
        email: 'rupam@millenniumtechlink.com',
        linkedin: 'https://linkedin.com/in/rupam-gogoi',
        expertise: 'AI Expert'
      }
    ]
  };

  const renderLeadershipSection = (title: string, members: any[]) => (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-left border-l-4 border-primary-600 pl-4"
      >
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-100"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary-100">
              <img
                src={member.image}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: member.imagePosition || 'center',
                  transform: member.imageTransform || 'none'
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-primary-600 font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</p>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{member.bio}</p>

            <div className="flex items-start justify-center gap-2 mb-4 text-xs text-gray-700 flex-grow">
              <Briefcase className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
              <span className="font-medium text-center">
                {member.expertise.split(',').map((part: string, i: number) => (
                  <span key={i} className="block">
                    {part.trim()}{i === 0 && member.expertise.includes(',') ? ',' : ''}
                  </span>
                ))}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
              <a
                href={`mailto:${member.email}`}
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Us - TechLink</title>
        <meta
          name="description"
          content="Learn about TechLink - our mission, values, and commitment to delivering excellence in design verification & validation and pre-compliance testing services."
        />
      </Helmet>
      <div className="pt-28 md:pt-32 pb-24 bg-white">
        {/* Previous sections remain... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">TechLink</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate technologists dedicated to helping businesses
              ensure product excellence through expert design verification & validation and pre-compliance testing.
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-50 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  To empower customers with accurate, secure, and high-performance engineering solutions
                  by delivering world-class design, development, debugging, simulation, and technical
                  evaluation services that enhance reliability, accelerate development, and protect digital
                  assets.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a global leader in AI-enabled engineering, design, debugging, and simulation
                  services - delivering secure, precise, and innovative engineering solutions across the
                  product lifecycle.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient">Leadership Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the experts driving innovation and excellence
              </p>
            </motion.div>

            {renderLeadershipSection('Business Leadership', leadership.business)}
            {renderLeadershipSection('Strategic Leadership', leadership.strategic)}
            {renderLeadershipSection('Technical Leadership', leadership.technical)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to work with a team that's passionate about your success?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;

