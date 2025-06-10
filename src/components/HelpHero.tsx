
import { Search } from 'lucide-react';
import { useState } from 'react';

const HelpHero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          How can we help you?
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Find answers to your questions about Veenmo Support
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 pr-14 text-lg rounded-full border-0 text-foreground bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HelpHero;
