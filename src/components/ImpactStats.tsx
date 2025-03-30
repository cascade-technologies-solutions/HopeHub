
import React from 'react';
import { Users, Home, School, HeartPulse, Award } from 'lucide-react';

const ImpactStats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For over a decade, we've been making a difference in communities around the world. These numbers represent lives changed through our collective efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">50K+</h3>
            <p className="text-gray-600">People Helped</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <School className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">120</h3>
            <p className="text-gray-600">Schools Built</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <HeartPulse className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">200+</h3>
            <p className="text-gray-600">Medical Camps</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">35</h3>
            <p className="text-gray-600">Communities Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
