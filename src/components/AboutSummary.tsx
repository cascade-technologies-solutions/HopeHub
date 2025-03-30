
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSummary = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Team of volunteers"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              HopeHub is a non-profit organization dedicated to creating sustainable change in communities worldwide. Founded in 2010, we've been working tirelessly to address critical challenges facing vulnerable populations.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of dedicated professionals and volunteers work together with local communities to implement programs that create lasting impact in education, healthcare, environmental conservation, and emergency relief.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                <p className="text-gray-600">To empower communities through sustainable development initiatives.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                <p className="text-gray-600">A world where all communities thrive with dignity and opportunity.</p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSummary;
