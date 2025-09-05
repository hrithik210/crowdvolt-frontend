import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center px-6 py-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #170000, #350789)',
          opacity: 0.5
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-20 relative z-10 pt-8">
        {/* Left content */}
        <div className="flex-1 max-w-3xl pt-4">
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-12">
            No more excuses you're coming out tonight
          </h1>
          <p className="text-xl lg:text-2xl text-gray-light leading-relaxed mb-12">
            For the music lovers. Easy, secure, and stress-free ticketing that keeps 
            the focus where it belongs: on the music.
          </p>
          <button className="group flex items-center gap-4 border border-crowdvolt-blue rounded-full px-12 py-4 text-white font-mono text-lg hover:bg-crowdvolt-blue hover:bg-opacity-10 transition-all duration-300">
            JOIN THE PARTY
            <ArrowUpRight className="w-7 h-7 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Right content - VOLT GIF */}
        <div className="flex-shrink-0">
          <img
            src="/VOLT.gif"
            alt="VOLT Animation"
            className="w-96 h-auto max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
