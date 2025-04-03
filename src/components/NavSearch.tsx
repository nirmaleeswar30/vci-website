import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavItem {
  name: string;
  path: string;
  category?: string;
  subItems?: { name: string; path: string }[];
}

interface SearchProps {
  onClose: () => void;
  scrolled: boolean;
  navItems: NavItem[];
}

const NavSearch: React.FC<SearchProps> = ({ onClose, scrolled, navItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NavItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    const allItems = navItems.flatMap(item => 
      item.subItems 
        ? [{ ...item }, ...item.subItems.map(sub => ({ ...sub, category: item.name }))]
        : [item]
    );

    const filteredResults = allItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(filteredResults);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-xl">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className={`block w-full p-2 pl-10 pr-8 text-sm text-gray-900 rounded-full bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
            scrolled ? 'border border-gray-300' : 'border-0'
          }`}
          placeholder="Search..."
          autoFocus
        />
        <button 
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={onClose}
        >
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {searchQuery && searchResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto"
        >
          <ul className="py-2 text-sm">
            {searchResults.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => handleResultClick(result.path)}
                  className="flex flex-col w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-900">{result.name}</span>
                  {result.category && (
                    <span className="text-xs text-pink-600">{result.category}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavSearch;