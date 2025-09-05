export default function HowWeWork() {
  const steps = [
    {
      title: "BID",
      description: "List your ticket"
    },
    {
      title: "OFFER", 
      description: "Name your price"
    },
    {
      title: "BUY",
      description: "Secure your spot"
    },
    {
      title: "DANCE",
      description: "Join the party"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-visible">
      <div className="max-w-7xl mx-auto relative">
        {/* SVG on the left extending outside container */}
        <svg 
          width="519" 
          height="788" 
          viewBox="0 0 519 788" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block absolute -left-[50px] -top-[250px] z-0"
        >
          <g filter="url(#filter0_f_1_605)">
            <path d="M360.848 91.8068H370.9C374.648 91.8069 377.906 93.9682 379.904 97.3342C381.904 100.702 382.555 105.164 381.087 109.46L256.696 473.394C254.977 478.413 250.869 481.487 246.51 481.487H234.354C228.208 481.486 222.832 475.372 223.412 467.705C224.307 455.895 221.451 445.513 215.357 438.051C209.241 430.561 200.005 426.191 188.542 426.191C175.824 426.191 162.513 431.559 150.821 440.264C139.117 448.978 128.914 461.124 122.425 474.888V474.889C120.456 479.07 116.727 481.502 112.846 481.502H102.793C99.0454 481.502 95.7865 479.341 93.7881 475.975C91.7885 472.607 91.1369 468.145 92.6055 463.849L216.996 99.9172C218.715 94.8973 222.823 91.8235 227.183 91.8234H239.339C245.484 91.8234 250.861 97.938 250.281 105.605C249.387 117.414 252.242 127.796 258.335 135.258C264.451 142.748 273.687 147.119 285.15 147.119C297.868 147.119 311.18 141.75 322.871 133.045C334.575 124.331 344.778 112.185 351.268 98.4211L351.269 98.4201C353.237 94.2394 356.966 91.8068 360.848 91.8068Z" fill="#771ADA" stroke="#7719DC" strokeWidth="3.6141"/>
            <path d="M305.283 356.993H416.192C420.656 356.993 424.265 359.948 426.048 364.21C427.83 368.471 427.646 373.773 424.693 378.016L206.864 690.862L206.863 690.863C204.822 693.796 202.384 695.201 200.02 695.591C197.63 695.984 195.135 695.368 192.966 693.927C188.637 691.049 185.77 684.975 188.175 677.932L188.992 675.542H188.979L295.095 365.088C296.814 360.068 300.923 356.993 305.283 356.993Z" fill="#771ADA" stroke="#7719DC" strokeWidth="3.6141"/>
          </g>
          <defs>
            <filter id="filter0_f_1_605" x="0" y="0.000183105" width="519" height="787.515" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_1_605"/>
            </filter>
          </defs>
        </svg>
        
        
        {/* Main container */}
        <div className="relative z-10 bg-gradient-to-b from-black/50 to-crowdvolt-gradient-start/50 rounded-[50px] border-t border-white/10 p-2 md:p-12 overflow-visible">
            {/* Header */}
            <div className="text-center mb-0 md:mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <h2 className="text-5xl lg:text-7xl font-medium text-text-primary">
                  How
                </h2>
                <h2 className="text-5xl lg:text-7xl font-serif italic text-text-primary">
                  we work.
                </h2>
              </div>
              <p className="text-gray-medium text-lg max-w-lg mx-auto md:mb-8 mb-0">
                CrowdVolt is a social platform where fans can securely and seamlessly buy, sell, or offer on tickets to the shows they love.
              </p>
            </div>

            {/* Steps grid (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-3xl h-48 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-medium text-text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white font-mono text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button (hidden on mobile) */}
            <div className="hidden md:block text-center">
              <button className="bg-transparent border border-crowdvolt-blue-alt rounded-full px-12 py-4 text-text-primary font-medium text-xl hover:bg-crowdvolt-blue-alt hover:bg-opacity-10 transition-all duration-300 shadow-lg">
                EXPLORE EVENTS
              </button>
            </div>

            {/* Mobile-only balls layout */}
            <div className="md:hidden grid grid-cols-2 gap-0 place-items-center">
              {/* BID ball */}
              <div
                className="rounded-full flex items-center justify-center text-white font-semibold"
                style={{
                  width: '137px',
                  height: '140.1314239501953px',
                  background: 'linear-gradient(57.54deg, #5073FF 34.39%, #010824 91.56%)',
                  opacity: 1
                }}
              >
                BID
              </div>

              {/* OFFER ball */}
              <div
                className="rounded-full flex items-center justify-center text-white font-semibold"
                style={{
                  width: '208.24021911621094px',
                  height: '213px',
                  background: 'linear-gradient(57.54deg, #7419B5 34.39%, #010824 91.56%)',
                  opacity: 1
                }}
              >
                OFFER
              </div>

              {/* BUY ball */}
              <div
                className="rounded-full flex items-center justify-center text-white font-semibold"
                style={{
                  width: '175px',
                  height: '179px',
                  background: 'linear-gradient(57.54deg, #FC009E 34.39%, #010824 91.56%)',
                  opacity: 1
                }}
              >
                BUY
              </div>

              {/* DANCE ball */}
              <div
                className="rounded-full flex items-center justify-center text-white font-semibold"
                style={{
                  width: '208.24021911621094px',
                  height: '213px',
                  background: 'linear-gradient(57.54deg, #FE5600 34.39%, #010824 91.56%)',
                  opacity: 1
                }}
              >
                DANCE
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
