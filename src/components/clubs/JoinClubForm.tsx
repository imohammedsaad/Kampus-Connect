import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users } from 'lucide-react';

interface JoinClubFormProps {
  clubName: string;
  onClose: () => void;
}

const JoinClubForm = ({ clubName, onClose }: JoinClubFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="glass-dark rounded-xl p-6 w-full max-w-md relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-semibold text-white mb-6">Join {clubName}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-1">
                    What interests you about this club?
                  </label>
                  <textarea
                    id="interests"
                    rows={3}
                    className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary py-3 mt-6"
                >
                  Join Club
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Welcome to {clubName}!</h3>
              <p className="text-gray-400 mb-4">You have successfully joined the club.</p>
              <p className="text-sm text-gray-500">We'll send you an email with more information about upcoming meetings and activities.</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JoinClubForm; 