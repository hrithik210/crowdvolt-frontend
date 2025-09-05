import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureBadges from "../components/FeatureBadges";
import HowWeWork from "../components/HowWeWork";
import BelieveSection from "../components/BelieveSection";
import CitiesSection from "../components/CitiesSection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <FeatureBadges />
        <HowWeWork />
        <BelieveSection />
        <CitiesSection />
      </main>
      <Footer />
    </div>
  );
}
