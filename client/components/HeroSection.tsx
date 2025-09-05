import { ArrowUpRight } from "lucide-react";
import FeatureBadges from "./FeatureBadges";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background with smooth gradient fade from black to purple */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(90deg, #000000 0%, #000000 70%, #350789 100%)',
        opacity: 0.6
      }}></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-purple-500/20 transform rotate-12"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border border-purple-400/15 transform -rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 border border-purple-300/10 transform rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-[1317px] mx-auto px-6 py-8 flex items-start justify-between min-h-[544px] mt-[167px]">
        {/* Left content */}
        <div className="flex flex-col items-start gap-12 max-w-[838px]">
          <h1 className="text-6xl lg:text-[96px] font-bold text-white leading-[90px] tracking-tight">
            No more excuses<br />
            you're coming<br />
            out tonight
          </h1>
          <p className="text-2xl text-[#B3B3B3] leading-[33px] max-w-[838px]">
            For the music lovers. Easy, secure, and stress-free ticketing that keeps
            the focus where it belongs: on the music.
          </p>
          <button className="group flex items-center gap-3 border border-white rounded-full w-[298px] h-[70px] justify-center text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide font-mono">
            JOIN THE PARTY
            <ArrowUpRight className="w-7 h-7 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Right content - VOLT GIF */}
        <div className="flex-shrink-0 absolute right-0 top-0">
          <img
            src="/VOLT.gif"
            alt="VOLT Animation"
            className="w-[400px] h-[544px] object-cover max-w-none"
            style={{ 
              filter: 'blur(5.13px)',
              mixBlendMode: 'lighten'
            }}
          />
        </div>
      </div>

      {/* Feature Badges Section */}
      <div className="relative z-10 pb-8 mt-20">
        <FeatureBadges />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}