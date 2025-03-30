
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const DonateSection = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Heart className="h-12 w-12 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Your donation can transform lives. Every contribution, no matter the size, helps us continue our mission of creating sustainable change in communities worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[25, 50, 100, 250].map(amount => (
              <Button 
                key={amount}
                variant="outline" 
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white text-lg font-bold"
              >
                ${amount}
              </Button>
            ))}
          </div>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 px-8">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
