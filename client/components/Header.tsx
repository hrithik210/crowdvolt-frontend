import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/Link → CrowdVolt Logo.png" 
            alt="CrowdVolt Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:block flex-1 max-w-lg mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search by event or venue"
              className="w-full bg-transparent border border-gray-500 rounded-full py-2.5 pl-12 pr-4 text-white placeholder-white text-sm focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 md:space-x-8">
          <a href="#" className="hidden md:inline-block text-white font-medium hover:text-gray-200 transition-colors">
            Events
          </a>
          <a href="#" className="hidden md:inline-block text-white font-medium hover:text-gray-200 transition-colors">
            About
          </a>
          <a href="#" className="hidden md:inline-block text-white font-medium hover:text-gray-200 transition-colors">
            Help
          </a>
          <button className="bg-transparent border border-transparent rounded-full px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
            Log In
          </button>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
