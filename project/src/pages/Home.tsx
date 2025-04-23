import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

import { events } from '../data/mockData';
import { getGreeting, getDayPeriod, getRelativeTime } from '../utils/dateUtils';

const Home = () => {
  const [greeting, setGreeting] = useState('');
  const [dayPeriod, setDayPeriod] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('morning');
  
  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting());
      setDayPeriod(getDayPeriod());
    };
    
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000); // Update every minute
    
    return () => clearInterval(intervalId);
  }, []);

  // Featured events - first 3 events
  const featuredEvents = events.slice(0, 3);
  
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Background gradients based on time of day
  const timeBasedGradient = () => {
    switch (dayPeriod) {
      case 'morning':
        return 'from-accent-900/80 via-primary-900/60 to-dark-900';
      case 'afternoon':
        return 'from-secondary-900/80 via-accent-900/60 to-dark-900';
      case 'evening':
        return 'from-primary-900/80 via-accent-900/60 to-dark-900';
      case 'night':
        return 'from-dark-950/90 via-primary-900/50 to-dark-900';
      default:
        return 'from-primary-900/80 via-accent-900/60 to-dark-900';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center">
        <div className={`absolute inset-0 bg-gradient-to-b ${timeBasedGradient()}`}></div>
        
        {/* Animated dots/particles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-4 w-4 rounded-full bg-primary-500/20 animate-pulse" style={{ top: '10%', left: '5%' }}></div>
          <div className="absolute h-3 w-3 rounded-full bg-accent-500/20 animate-pulse" style={{ top: '25%', left: '15%' }}></div>
          <div className="absolute h-2 w-2 rounded-full bg-secondary-500/20 animate-pulse" style={{ top: '60%', left: '8%' }}></div>
          <div className="absolute h-5 w-5 rounded-full bg-primary-500/20 animate-pulse" style={{ top: '15%', right: '10%' }}></div>
          <div className="absolute h-3 w-3 rounded-full bg-accent-500/20 animate-pulse" style={{ top: '35%', right: '20%' }}></div>
          <div className="absolute h-4 w-4 rounded-full bg-secondary-500/20 animate-pulse" style={{ top: '70%', right: '15%' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-lg sm:text-xl font-medium text-primary-300">
                <span className="inline-block animate-pulse-light">{greeting}, Student!</span>
              </h2>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Connect with Your <span className="text-primary-400">Campus Community</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover events, join clubs, and stay connected with everything happening on campus — all in one place.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/events" className="btn-primary">
                Browse Events
              </Link>
              <Link to="/clubs" className="btn-outline">
                Explore Clubs
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative diagonal line */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-br from-dark-900/0 to-dark-900"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>
      
      {/* Featured Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
            <Link 
              to="/events" 
              className="flex items-center text-primary-400 hover:text-primary-300 transition-colors"
            >
              View All <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className="glass-dark rounded-xl overflow-hidden hover-scale"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
                  
                  {/* Time Badge */}
                  <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1.5 text-sm font-medium flex items-center">
                    <Clock size={14} className="mr-1" /> {getRelativeTime(event.date)}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-5">
                    <Calendar size={16} className="mr-2 text-primary-400" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric'
                    })}</span>
                  </div>
                  
                  <Link 
                    to={`/events`} 
                    className="inline-block text-primary-400 hover:text-primary-300 transition-colors font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/events" className="btn-primary inline-flex items-center">
              See All Events <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Feature Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Everything You Need in One Place</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Campus Connect brings all your campus activities and communities together in a modern, easy-to-use platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Discover Events',
                description: 'Find and register for campus events, workshops, and activities all in one place.',
                icon: '🎉',
                color: 'from-primary-600/20 to-primary-800/10'
              },
              {
                title: 'Join Clubs',
                description: 'Explore student clubs and organizations that match your interests and passions.',
                icon: '👥',
                color: 'from-accent-600/20 to-accent-800/10'
              },
              {
                title: 'Stay Connected',
                description: 'Get personalized notifications and reminders about events and club activities.',
                icon: '🔔',
                color: 'from-secondary-600/20 to-secondary-800/10'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-dark rounded-xl p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-900/40 to-accent-900/40 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-5"></div>
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-primary-500/10 filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/6 w-40 h-40 rounded-full bg-accent-500/10 filter blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Campus Experience?</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Join Campus Connect today and never miss an opportunity to engage with your university community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-outline">Learn More</button>
                </div>
              </div>
              
              <div className="glass-dark rounded-xl border border-white/10 p-6 w-full max-w-sm">
                <h3 className="text-xl font-semibold mb-4 text-white">Coming Up Next</h3>
                <ul className="space-y-4">
                  {events.slice(0, 3).map((event, index) => (
                    <li key={event.id} className="flex items-start gap-3">
                      <div className="bg-dark-950/50 h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Calendar size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{event.title}</h4>
                        <p className="text-sm text-gray-400">{getRelativeTime(event.date)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;