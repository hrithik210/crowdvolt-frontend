import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeatureBadges() {
  const features = [
    "Apple Pay",
    "Automatic Transfer",
    "Ratings",
    "Instant Payout",
    "Large Event Selection",
    "Bid/Ask",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 480) {
        setVisibleCount(1);
      } else if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % (features.length - visibleCount + 1),
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [features.length, visibleCount]);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % (features.length - visibleCount + 1),
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (features.length - visibleCount + 1)) %
        (features.length - visibleCount + 1),
    );
  };

  return (
    <section className="py-4 sm:py-6 md:py-10 w-full">
      <div className="mx-auto">
        <div className="relative">
          {/* Carousel container */}
          <div className="px-10">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {features.map((feature, index) => (
                <>
                  <div
                    key={index}
                    className="flex-shrink-0 bg-crowdvolt-gradient rounded-full px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 flex items-center justify-center"
                    style={{
                      width: `calc(${100 / visibleCount}% - ${24 / visibleCount}px)`,
                    }}
                  >
                    <span
                      className={`text-xs sm:text-sm md:text-lg font-medium text-center ${
                        feature === "Bid/Ask"
                          ? "text-gray-text"
                          : "text-gray-light"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                  {index < features.length - 1 && (
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <svg
                        width="40"
                        height="30"
                        className="md:w-[80px] md:h-[60px]"
                        viewBox="0 0 80 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Circle background with gradient */}
                        <circle
                          cx="40"
                          cy="30"
                          r="25"
                          fill="url(#ovalGradient)"
                        />

                        {/* Lightning bolt centered in the oval */}
                        <g transform="translate(25.88, 6.04)">
                          <svg
                            width="28.24"
                            height="47.92"
                            viewBox="0 0 43 63"
                            fill="none"
                            style={{
                              filter:
                                "drop-shadow(0px 6.84615px 6.84615px rgba(0, 0, 0, 0.25))",
                            }}
                          >
                            <path
                              d="M30.209 0.449768C29.8226 0.449768 29.4657 0.680093 29.2815 1.05282C28.2298 3.179 25.9705 4.80985 23.9484 4.80985C22.133 4.80985 21.07 3.496 21.2134 1.69055C21.2665 1.02187 20.7729 0.451006 20.1594 0.451006H19.154C18.7191 0.451006 18.3294 0.742008 18.1701 1.18532L7.8822 29.8732C7.60995 30.6323 8.12169 31.4533 8.86614 31.4533H9.69758C10.0839 31.4533 10.4409 31.2229 10.625 30.8502C11.6768 28.724 13.9361 27.0932 15.9582 27.0932C17.7736 27.0932 18.8366 28.407 18.6931 30.2125C18.64 30.8812 19.1337 31.452 19.7471 31.452H20.7525C21.1874 31.452 21.5772 31.161 21.7365 30.7177L32.0244 2.02985C32.2966 1.27077 31.7849 0.449768 31.0404 0.449768H30.209Z"
                              fill="#E6E6E6"
                            />
                            <path
                              d="M15.9741 46.7835L24.8182 22.1226C24.9775 21.6793 25.3673 21.3883 25.8022 21.3883H34.9751C35.8619 21.3883 36.3544 22.5115 35.8009 23.2693L17.7849 47.9302C17.028 48.9666 15.5324 48.0193 15.9752 46.7835H15.9741Z"
                              fill="#E6E6E6"
                            />
                            <path
                              d="M21.5321 31.4L25.0816 21.3883H35.008C36.0676 21.3883 36.4472 22.9226 35.5321 23.5083L21.531 31.4H21.5321Z"
                              fill="#E6E6E6"
                            />
                          </svg>
                        </g>

                        <defs>
                          <linearGradient
                            id="ovalGradient"
                            x1="0"
                            y1="30"
                            x2="80"
                            y2="30"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#350789" />
                            <stop offset="1" stopColor="#0E0223" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
