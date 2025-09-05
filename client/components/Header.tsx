import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/0cfd83c1b79f5ce3b99c914f3f7d3a122c07be42?width=226" 
            alt="CrowdVolt Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
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
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-white font-medium hover:text-gray-200 transition-colors">
            Events
          </a>
          <a href="#" className="text-white font-medium hover:text-gray-200 transition-colors">
            About
          </a>
          <a href="#" className="text-white font-medium hover:text-gray-200 transition-colors">
            Help
          </a>
          <button className="bg-transparent border border-transparent rounded-full px-4 py-2 text-white font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
            Log In
          </button>
        </nav>
      </div>
    </header>
  );
}
