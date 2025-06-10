
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const HelpHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Veenmo Support</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-blue-600 transition-colors">Help Center</a>
            <a href="#" className="text-foreground hover:text-blue-600 transition-colors">Contact Us</a>
            <a href="#" className="text-foreground hover:text-blue-600 transition-colors">Community</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <a href="#" className="block px-4 py-2 text-foreground hover:text-blue-600 hover:bg-muted transition-all">Help Center</a>
              <a href="#" className="block px-4 py-2 text-foreground hover:text-blue-600 hover:bg-muted transition-all">Contact Us</a>
              <a href="#" className="block px-4 py-2 text-foreground hover:text-blue-600 hover:bg-muted transition-all">Community</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HelpHeader;
