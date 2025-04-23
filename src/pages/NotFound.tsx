import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-dark rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center text-4xl">
              404
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-300 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/" className="btn-primary inline-flex items-center">
              <Home size={18} className="mr-2" /> Go Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;