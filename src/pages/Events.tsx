import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

import { events } from '../data/mockData';
import { Event, EventCategory } from '../types';
import EventCard from '../components/events/EventCard';
import SearchBar from '../components/common/SearchBar';

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);

  useEffect(() => {
    let result = [...events];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        event => 
          event.title.toLowerCase().includes(query) || 
          event.description.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(event => event.category === selectedCategory);
    }
    
    setFilteredEvents(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: EventCategory | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 mb-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Events Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center">
                  <Calendar size={24} className="text-primary-400" />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">Campus Events</h1>
              <p className="text-lg text-gray-300">
                Discover and participate in the latest events happening across campus.
              </p>
            </motion.div>
          </div>
          
          <SearchBar 
            onSearch={handleSearch} 
            onFilter={handleFilter}
            type="events"
          />
        </div>
      </section>
      
      {/* Events Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-white mb-2">No events found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria to find events.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;