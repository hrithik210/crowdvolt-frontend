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
        {/* Blurred background image - spread outside the box */}
        <img
          src="/Layer_1-2.png"
          alt=""
          className="absolute -left-32 -top-32 w-[600px] h-auto opacity-80 blur-[80px] z-0"
        />
        
        {/* Main container */}
        <div className="relative z-10 bg-gradient-to-b from-black/50 to-crowdvolt-gradient-start/50 rounded-[50px] border-t border-white/10 p-12 overflow-visible">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <h2 className="text-5xl lg:text-7xl font-medium text-text-primary">
                  How
                </h2>
                <h2 className="text-5xl lg:text-7xl font-serif italic text-text-primary">
                  we work.
                </h2>
              </div>
              <p className="text-gray-medium text-lg max-w-lg mx-auto">
                CrowdVolt is a social platform where fans can securely and seamlessly buy, sell, or offer on tickets to the shows they love.
              </p>
            </div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-transparent border border-crowdvolt-blue-alt rounded-full px-12 py-4 text-text-primary font-medium text-xl hover:bg-crowdvolt-blue-alt hover:bg-opacity-10 transition-all duration-300 shadow-lg">
                EXPLORE EVENTS
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}
