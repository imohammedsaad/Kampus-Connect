import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCarouselProps {
  images: string[];
  interval?: number;
}

const HeroCarousel = ({ images, interval = 5000 }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 via-dark-900/10 to-dark-900/30"></div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary-500 w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel; 