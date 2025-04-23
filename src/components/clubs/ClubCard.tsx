import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, Mail, User } from 'lucide-react';
import { Club } from '../../types';
import JoinClubForm from './JoinClubForm';

interface ClubCardProps {
  club: Club;
  index: number;
}

const ClubCard: React.FC<ClubCardProps> = ({ club, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const { name, description, image, memberCount, category, meetingSchedule, contactPerson, email } = club;
  
  const categoryColors = {
    academic: 'bg-accent-500',
    cultural: 'bg-purple-500',
    social: 'bg-pink-500',
    sports: 'bg-emerald-500',
    technical: 'bg-cyan-500',
    volunteer: 'bg-amber-500',
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card expansion when clicking the button
    setShowJoinForm(true);
  };

  return (
    <>
      <motion.div 
        className={`group glass-dark rounded-xl overflow-hidden hover-scale neon-border cursor-pointer ${
          isExpanded ? 'col-span-full md:col-span-2' : ''
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
        layoutId={`club-card-${club.id}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div 
          className="relative h-48 overflow-hidden"
          layoutId={`club-image-container-${club.id}`}
        >
          <motion.img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            layoutId={`club-image-${club.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
          
          {/* Category Badge */}
          <motion.div 
            className="absolute top-4 left-4"
            layoutId={`club-category-${club.id}`}
          >
            <span className={`${categoryColors[category]} text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wider`}>
              {category}
            </span>
          </motion.div>
          
          {/* Member Count Badge */}
          <motion.div 
            className="absolute top-4 right-4 glass rounded-lg px-3 py-1.5 text-sm font-medium flex items-center"
            layoutId={`club-member-badge-${club.id}`}
          >
            <Users size={14} className="mr-1" /> {memberCount} Members
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="p-5"
          layoutId={`club-content-${club.id}`}
        >
          <motion.h3 
            className="text-xl font-semibold mb-2 text-white"
            layoutId={`club-title-${club.id}`}
          >
            {name}
          </motion.h3>
          
          <motion.p 
            className={`text-gray-300 text-sm mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}
            layoutId={`club-description-${club.id}`}
          >
            {description}
          </motion.p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 mb-4 border-t border-white/10 pt-4"
              >
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={16} className="mr-2 text-primary-400" />
                  <span>{meetingSchedule}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <User size={16} className="mr-2 text-primary-400" />
                  <span>Contact: {contactPerson}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 break-all">
                  <Mail size={16} className="mr-2 text-primary-400 flex-shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-primary-400 transition-colors">
                    {email}
                  </a>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <button 
                    className="btn-primary flex-1"
                    onClick={handleJoinClick}
                  >
                    Join Club
                  </button>
                  <button className="btn-outline flex-1">Learn More</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {!isExpanded && (
            <motion.div className="flex justify-end" layoutId={`club-button-${club.id}`}>
              <span className="text-primary-500 font-medium text-sm">Click to expand</span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {showJoinForm && (
        <JoinClubForm
          clubName={name}
          onClose={() => setShowJoinForm(false)}
        />
      )}
    </>
  );
};

export default ClubCard;