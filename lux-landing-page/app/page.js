import React from 'react';
import { Heart, Globe, Lock } from 'lucide-react';

const LuxLandingPage = () => {
  return (
    <div className="bg-cream font-serif text-navy min-h-screen">
      <nav className="bg-navy text-cream p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lux</h1>
          <button className="bg-gold text-navy px-4 py-2 rounded hover:bg-gold-light transition-colors">
            Join Waitlist
          </button>
        </div>
      </nav>

      <header className="bg-[url('/api/placeholder/1200/600')] bg-cover bg-center h-96 flex items-center">
        <div className="container mx-auto text-center text-cream">
          <h2 className="text-5xl font-bold mb-4 text-gold">Find Your Perfect Match</h2>
          <p className="text-xl mb-8">Exclusive dating for international Chinese students</p>
          <button className="bg-burgundy text-cream px-6 py-3 rounded-full text-lg font-semibold hover:bg-burgundy-light transition-colors">
            Join Waitlist
          </button>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-burgundy">Why Choose Lux?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="w-12 h-12 text-gold" />}
              title="International Community"
              description="Connect with fellow Chinese students from around the world"
            />
            <FeatureCard
              icon={<Lock className="w-12 h-12 text-gold" />}
              title="Exclusive Membership"
              description="Join our carefully curated community of exceptional individuals"
            />
            <FeatureCard
              icon={<Heart className="w-12 h-12 text-gold" />}
              title="Meaningful Connections"
              description="Find love and build lasting relationships"
            />
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-burgundy">Ready to Find Your Perfect Match?</h3>
          <p className="text-xl mb-8 text-navy">Join our exclusive community of international students looking for love</p>
          <button className="bg-gold text-navy px-8 py-4 rounded-full text-xl font-semibold hover:bg-gold-light transition-colors">
            Join the Waitlist
          </button>
        </section>
      </main>

      <footer className="bg-navy text-cream py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lux Dating App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-cream border border-gold p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-bold mb-2 text-burgundy">{title}</h4>
    <p className="text-navy">{description}</p>
  </div>
);

export default LuxLandingPage;