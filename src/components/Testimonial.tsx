
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <div className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl mb-8 text-gray-700 font-serif italic">
            "Thanks to HopeHub's education program, I was able to complete my schooling and become the first person in my family to attend university. They didn't just build a school - they built a future for our entire community."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Sarah L."
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Sarah L.</p>
              <p className="text-gray-600">Program Beneficiary, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
