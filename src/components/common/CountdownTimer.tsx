import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  deadline: string; // ISO date string
  onExpired?: () => void;
}

const CountdownTimer = ({ deadline, onExpired }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(deadline).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        if (onExpired) onExpired();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, onExpired]);

  if (isExpired) {
    return (
      <div className="flex items-center text-red-400 text-sm">
        <Clock size={14} className="mr-1" />
        <span>Registration closed</span>
      </div>
    );
  }

  return (
    <div className="flex items-center text-sm">
      <Clock size={14} className="mr-1 text-primary-400" />
      <span className="text-gray-300">Registration ends in:</span>
      <div className="flex ml-2 space-x-1">
        {timeLeft.days > 0 && (
          <motion.div 
            className="bg-dark-800 text-white px-2 py-1 rounded-md text-xs font-medium"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {timeLeft.days}d
          </motion.div>
        )}
        <motion.div 
          className="bg-dark-800 text-white px-2 py-1 rounded-md text-xs font-medium"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {timeLeft.hours}h
        </motion.div>
        <motion.div 
          className="bg-dark-800 text-white px-2 py-1 rounded-md text-xs font-medium"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {timeLeft.minutes}m
        </motion.div>
        <motion.div 
          className="bg-dark-800 text-white px-2 py-1 rounded-md text-xs font-medium"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {timeLeft.seconds}s
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownTimer; 