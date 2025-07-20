import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';

type SEARCH_DRAWER_TYPES = {
     isOpen:boolean;
     setIsOpen:Dispatch<SetStateAction<boolean>>
}

function SearchDrawer(props:SEARCH_DRAWER_TYPES) {
   const {isOpen, setIsOpen} = props
  const [searchQuery, setSearchQuery] = useState('');

  // Sample trending keywords
  const trendingKeywords: string[] = [
    'Bangle', "Earrings", "Necklace", "Bracelet"
  ];

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setIsOpen(false);
    }
  };

  const handleTrendingClick = (keyword: string) => {
    setSearchQuery(keyword);
    console.log('Trending search:', keyword);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className=" bg-gray-50">
      {/* Search Drawer */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ease-out ${
            isOpen ? 'opacity-40' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Container - positioned in upper-middle area */}
        <div className="relative flex justify-center pt-16 sm:pt-20 md:pt-24">
          <div className={`bg-white rounded-2xl shadow-2xl mx-4 w-full max-w-3xl transform transition-all duration-700 ease-out ${
            isOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : '-translate-y-8 scale-95 opacity-0'
          }`}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary rounded-full">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Search</h3>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Search Input */}
            <div className="px-6 pb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search anything..."
                  className="w-full text-lg bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 pr-14 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Trending Keywords - Inline Layout */}
            <div className="px-6 pb-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-600">Trending</span>
              </div>

              {/* Keywords in flexible inline layout */}
              <div className="flex flex-wrap gap-2">
                {trendingKeywords.map((keyword, index) => (
                  <button
                    key={index}
                    onClick={() => handleTrendingClick(keyword)}
                    className={`px-4 py-2 text-sm text-gray-600 font-medium rounded-full border transition-all duration-300 hover:scale-105 transform `}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4 bg-gray-50 rounded-b-2xl border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                <button className="hover:text-gray-700 transition-colors duration-200">
                  Advanced Search
                </button>
                <span>•</span>
                <button className="hover:text-gray-700 transition-colors duration-200">
                  Search Tips
                </button>
                <span className="hidden sm:inline">•</span>
                <button className="hover:text-gray-700 transition-colors duration-200">
                  Recent Searches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;