import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

import { clubs } from '../data/mockData';
import { Club, ClubCategory } from '../types';
import ClubCard from '../components/clubs/ClubCard';
import SearchBar from '../components/common/SearchBar';

const Clubs = () => {
  const [filteredClubs, setFilteredClubs] = useState<Club[]>(clubs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ClubCategory | null>(null);

  useEffect(() => {
    let result = [...clubs];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        club => 
          club.name.toLowerCase().includes(query) || 
          club.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(club => club.category === selectedCategory);
    }
    
    setFilteredClubs(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: ClubCategory | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900/30 to-dark-900"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-600/20 flex items-center justify-center">
                  <Users size={24} className="text-accent-400" />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">Student Clubs</h1>
              <p className="text-lg text-gray-300">
                Explore and join student clubs that match your interests and passions.
              </p>
            </motion.div>
          </div>
          
          <SearchBar 
            onSearch={handleSearch} 
            onFilter={handleFilter}
            type="clubs"
          />
        </div>
      </section>
      
      {/* Clubs Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredClubs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredClubs.map((club, index) => (
                <ClubCard key={club.id} club={club} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-white mb-2">No clubs found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria to find clubs.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Clubs;