import { ArrowUpRight } from "lucide-react";
import FeatureBadges from "./FeatureBadges";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Background with smooth gradient fade from black to purple (desktop) and L-shape gradient (mobile) */}
      <div className="absolute inset-0 hidden md:block" style={{
        background: 'linear-gradient(90deg, #000000 0%, #000000 70%, #350789 100%)',
        opacity: 0.6
      }}></div>
      {/* L-shaped gradient for mobile */}
      <div className="absolute inset-0 md:hidden" style={{
        background: 'linear-gradient(180deg, #000000 0%, #000000 70%, #350789 100%), linear-gradient(90deg, #000000 0%, #350789 100%)',
        backgroundPosition: 'right top, left bottom',
        backgroundSize: '100% 100%, 100% 30%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.6
      }}></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-purple-500/20 transform rotate-12"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border border-purple-400/15 transform -rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 border border-purple-300/10 transform rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-[1317px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex items-start justify-center md:justify-between min-h-[450px] sm:min-h-[500px] md:min-h-[544px] mt-[80px] sm:mt-[100px] md:mt-[167px] w-full">
        {/* Content - centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col items-center md:items-start gap-12 max-w-[838px] mx-auto md:mx-0">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-bold text-white leading-tight md:leading-[90px] tracking-tight text-center md:text-left">
            No more excuses<br className="hidden xs:block" />
            you're coming<br className="hidden xs:block" />
            out tonight
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#B3B3B3] leading-relaxed md:leading-[33px] max-w-[838px] text-center md:text-left px-2 sm:px-0">
            For the music lovers. Easy, secure, and stress-free ticketing that keeps
            the focus where it belongs: on the music.
          </p>
          <div className="relative group">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#330BFF] to-[#BF7272] p-[2px]">
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>
            
            <button className="relative flex items-center gap-2 md:gap-3 border-none rounded-full w-[220px] xs:w-[240px] md:w-[298px] h-[45px] xs:h-[50px] md:h-[70px] justify-center text-white font-medium text-sm xs:text-base md:text-lg hover:bg-gradient-to-r hover:from-[#330BFF] hover:to-[#BF7272] hover:text-white transition-all duration-300 uppercase tracking-wide font-mono">
              JOIN THE PARTY
              <ArrowUpRight className="w-7 h-7 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right content - VOLT GIF (hidden on mobile) */}
        <div className="hidden xl:block flex-shrink-0 absolute right-0 top-0">
          <img
            src="/VOLT.gif"
            alt="VOLT Animation"
            className="w-[400px] h-[544px] object-cover max-w-none"
            style={{
              mixBlendMode: 'lighten'
            }}
          />
        </div>
      </div>

      {/* Feature Badges Section - Repositioned below button with full width */}
      <div className="relative z-10 pb-4 md:pb-8 mt-6 sm:mt-8 w-full px-4 md:px-0">
        <FeatureBadges />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}