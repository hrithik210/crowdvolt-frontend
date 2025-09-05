import Header from "../components/Header";
import Footer from "../components/Footer";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-light mb-12">
              {description}
            </p>
          )}
          <div className="bg-crowdvolt-gradient rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              This page is under construction. Continue prompting to have us build out 
              the content for this section of the application.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
