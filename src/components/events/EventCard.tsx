import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../../types';
import { formatEventDate, getRelativeTime } from '../../utils/dateUtils';
import RegistrationForm from './RegistrationForm';
import CountdownTimer from '../common/CountdownTimer';

interface EventCardProps {
  event: Event;
  index: number;
}

type CategoryType = 'academic' | 'social' | 'cultural' | 'sports' | 'career' | 'workshop';

const EventCard = ({ event, index }: EventCardProps) => {
  const { title, description, date, location, image, category, registrationDeadline } = event;
  const [showRegistration, setShowRegistration] = useState(false);
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);
  
  const categoryColors: Record<CategoryType, string> = {
    academic: 'bg-accent-400',
    social: 'bg-pink-400',
    cultural: 'bg-purple-400',
    sports: 'bg-emerald-400',
    career: 'bg-amber-400',
    workshop: 'bg-cyan-400',
  };

  const handleRegistrationExpired = () => {
    setIsRegistrationClosed(true);
  };

  return (
    <>
      <motion.div 
        className="group glass-dark rounded-xl overflow-hidden hover-scale neon-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`${categoryColors[category as CategoryType]} text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wider`}>
              {category}
            </span>
          </div>
          
          {/* Date Badge */}
          <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1.5 text-sm font-medium flex items-center">
            <Clock size={14} className="mr-1" /> {getRelativeTime(date)}
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-2 mb-5">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar size={16} className="mr-2 text-primary-400" />
              <span>{formatEventDate(date)}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin size={16} className="mr-2 text-primary-400" />
              <span>{location}</span>
            </div>
            
            {/* Registration Countdown Timer */}
            {registrationDeadline && (
              <div className="mt-3">
                <CountdownTimer 
                  deadline={registrationDeadline} 
                  onExpired={handleRegistrationExpired}
                />
              </div>
            )}
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={() => setShowRegistration(true)}
              className={`btn-primary flex items-center justify-center ${isRegistrationClosed ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isRegistrationClosed}
            >
              {isRegistrationClosed ? 'Registration Closed' : 'Register'}
            </button>
          </div>
        </div>
      </motion.div>

      {showRegistration && !isRegistrationClosed && (
        <RegistrationForm
          eventTitle={title}
          onClose={() => setShowRegistration(false)}
        />
      )}
    </>
  );
};

export default EventCard;