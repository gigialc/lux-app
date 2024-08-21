import React from 'react';
import { Heart, Globe, Lock } from 'lucide-react';

const LuxLandingPage = () => {
  return (
    <div className="bg-cream font-serif text-navy min-h-screen flex flex-col">
      <header className="bg-[url('/couple.jpeg')] bg-cover bg-center flex-grow flex items-center w-full">
        <div className="w-full text-center text-cream px-4 py-12 md:py-20 lg:py-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Find Your Perfect Match</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Exclusive dating for international students coming soon...</p>
          <button className="bg-burgundy text-cream px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-burgundy-light transition-colors">
            Lux Waitlist
          </button>
        </div>
      </header>

      {/* <footer className="text-black py-4 md:py-6 lg:py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">&copy; 2024 Lux Dating App. All rights reserved.</p>
        </div>
      </footer>  */}
    </div>
  );
};

export default LuxLandingPage;