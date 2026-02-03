import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Camera, ArrowRight } from 'lucide-react';

const Insights = () => {
  const events = [
    {
      id: 1,
      title: 'Company Townhall 2025',
      description: 'Our quarterly townhall meeting where leadership shared company updates, achievements, and future roadmap with all team members.',
      date: 'December 12, 2025',
      location: 'Pune, India',
      attendees: '150+',
      category: 'Company Event',
      image: '/Insights/Townhall.jpg',
      highlights: [
        'Company performance updates and milestones',
        'Leadership announcements and strategic direction',
        'Q&A session with leadership team',
        'Team recognition and achievements',
      ],
    },
    {
      id: 2,
      title: 'Diwali Celebration 2025',
      description: 'Festive celebration of Diwali with the TechLink family, featuring traditional rituals, decorations, and team bonding activities.',
      date: 'November 12, 2025',
      location: 'Pune, India',
      attendees: '120+',
      category: 'Festival Celebration',
      image: '/Insights/Diwali.webp',
      highlights: [
        'Traditional Diwali puja and rituals',
        'Office decoration and rangoli competition',
        'Sweets and traditional delicacies',
        'Team bonding and cultural exchange',
      ],
    },
    {
      id: 3,
      title: 'Ganesh Chaturthi Celebration',
      description: 'Celebrating the auspicious festival of Ganesh Chaturthi with traditional ceremonies, prayers, and team festivities.',
      date: 'September 19, 2025',
      location: 'Pune, India',
      attendees: '100+',
      category: 'Festival Celebration',
      image: '/Insights/Ganesh Chaturthi.webp',
      highlights: [
        'Ganpati installation and puja',
        'Traditional aarti and prayers',
        'Modak distribution and festive treats',
        'Cultural activities and team participation',
      ],
    },
    {
      id: 4,
      title: 'Navratri Garba Night',
      description: 'Vibrant Navratri celebration with traditional Garba dance, music, and cultural performances bringing the team together.',
      date: 'October 15, 2025',
      location: 'Pune, India',
      attendees: '130+',
      category: 'Cultural Event',
      image: '/Insights/Garba.webp',
      highlights: [
        'Traditional Garba and Dandiya dance',
        'Live music and DJ performances',
        'Traditional attire and cultural showcase',
        'Team participation and fun activities',
      ],
    },
    {
      id: 5,
      title: 'Team Badminton Tournament',
      description: 'Friendly badminton tournament promoting fitness, teamwork, and healthy competition among TechLink employees.',
      date: 'August 25, 2025',
      location: 'Pune, India',
      attendees: '60+',
      category: 'Sports Event',
      image: '/Insights/Badminton.webp',
      highlights: [
        'Singles and doubles matches',
        'Team-based competitions',
        'Prizes for winners and participants',
        'Health and wellness focus',
      ],
    },
    {
      id: 6,
      title: 'Team Lunch Gathering',
      description: 'Regular team lunch sessions fostering camaraderie, informal discussions, and strengthening team relationships.',
      date: 'August 15, 2025',
      location: 'Pune, India',
      attendees: '80+',
      category: 'Team Building',
      image: '/Insights/Lunch.webp',
      highlights: [
        'Casual team interactions',
        'Delicious meals and conversations',
        'Cross-team networking',
        'Relaxed and friendly atmosphere',
      ],
    },
    {
      id: 7,
      title: 'Team Lunch Celebration',
      description: 'Special team lunch celebration marking project milestones and team achievements with great food and company.',
      date: 'August 20, 2025',
      location: 'Pune, India',
      attendees: '90+',
      category: 'Team Building',
      image: '/Insights/Lunch1.webp',
      highlights: [
        'Celebrating project successes',
        'Team appreciation and recognition',
        'Delicious food and refreshments',
        'Building stronger team bonds',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Insights & Events - TechLink</title>
        <meta 
          name="description" 
          content="Explore TechLink's company events, workshops, conferences, and team activities. Get insights into our culture and organizational happenings." 
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
              <Camera className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Insights</span> & Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what's happening at TechLink - from company events and workshops to team activities and industry participation
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="h-72 md:h-80 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: event.id === 4 ? 'center 60%' : 'center center',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-primary-600" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Event Highlights:</h3>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
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
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of exciting events and activities. Explore career opportunities at TechLink
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Careers
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Insights;
