import React, { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventCategory, ClubCategory } from '../../types';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (category: EventCategory | ClubCategory | null) => void;
  type: 'events' | 'clubs';
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilter, type }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | ClubCategory | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleCategorySelect = (category: EventCategory | ClubCategory | null) => {
    setSelectedCategory(category);
    onFilter(category);
    setShowFilters(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedCategory(null);
    onSearch('');
    onFilter(null);
  };

  const eventCategories: EventCategory[] = ['academic', 'social', 'cultural', 'sports', 'career', 'workshop'];
  const clubCategories: ClubCategory[] = ['academic', 'cultural', 'social', 'sports', 'technical', 'volunteer'];
  
  const categories = type === 'events' ? eventCategories : clubCategories;

  return (
    <div className="w-full max-w-3xl mx-auto glass-dark rounded-xl p-1 mb-8">
      <form onSubmit={handleSearch} className="relative flex items-center">
        <div className="absolute left-4 text-gray-400">
          <Search size={20} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${type}...`}
          className="w-full bg-transparent border-none pl-12 pr-28 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
        />
        
        <div className="absolute right-3 flex space-x-2">
          {(query || selectedCategory) && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          )}
          
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`p-1.5 rounded-md transition-colors ${
              selectedCategory ? 'bg-primary-600/30 text-primary-400' : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Filter size={18} />
          </button>
          
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-500 text-white py-1.5 px-4 rounded-md transition-colors"
          >
            Search
          </button>
        </div>
      </form>
      
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 pt-3 border-t border-white/10"
          >
            <div className="px-4 pb-3">
              <h4 className="text-sm text-gray-400 mb-2">Filter by category:</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategorySelect(null)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                    selectedCategory === null
                      ? 'bg-primary-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  All
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`text-xs px-3 py-1.5 rounded-full capitalize transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;