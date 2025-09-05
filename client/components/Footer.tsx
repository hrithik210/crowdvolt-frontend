export default function Footer() {
  return (
    <footer className="bg-radial-purple py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left section */}
          <div className="space-y-8">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e8dc2effe3b7069b185a48320aaef2a58fa4eeef?width=344"
                alt="CrowdVolt Logo"
                className="h-14 w-auto mb-6"
              />
              <h3 className="text-white text-3xl lg:text-4xl font-medium leading-tight">
                No more excuses, you're coming out tonight.
              </h3>
            </div>
          </div>

          {/* Right section - Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-white text-lg font-medium mb-6">Company</h4>
              <div className="space-y-4">
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Home
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  About
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  FAQ
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white text-lg font-medium mb-6">Support</h4>
              <div className="space-y-4">
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Request an Event
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Help
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-white text-lg font-medium mb-6">Socials</h4>
              <div className="space-y-4">
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gray-dark hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with social icons */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex items-center justify-end space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-crowdvolt-purple-dark to-crowdvolt-purple-light flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              
              {/* LinkedIn */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-crowdvolt-purple-dark to-crowdvolt-purple-light flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              
              {/* TikTok */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-crowdvolt-purple-dark to-crowdvolt-purple-light flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
