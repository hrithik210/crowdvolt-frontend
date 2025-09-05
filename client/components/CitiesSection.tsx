export default function CitiesSection() {

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl min-h-[420px] lg:min-h-[560px]">
          {/* Background video */}
          <video
            src={"/video file.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          {/* Text overlays */}
          <div className="absolute inset-0 grid grid-rows-3 grid-cols-2 gap-4 p-6 lg:p-12">
            <div className="self-start justify-self-start">
              <div className="text-white font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                LIVE IN
              </div>
            </div>

            <div className="self-start justify-self-end text-right">
              <div className="text-white font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                NEW YORK
              </div>
            </div>

            <div className="self-center justify-self-start">
              <div className="text-white font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl">
                CHICAGO
              </div>
            </div>

            <div className="self-center justify-self-end text-right">
              <div className="text-white font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                MIAMI
              </div>
            </div>

            <div className="row-start-3 col-span-2 self-end justify-self-center text-center">
              <div className="text-white font-bold tracking-tight text-4xl sm:text-5xl lg:text-7xl">
                LOS ANGELES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
