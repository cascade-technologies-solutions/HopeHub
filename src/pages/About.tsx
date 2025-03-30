
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Users, Target, Clock, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Sarah has over 15 years of experience in nonprofit management and international development.'
    },
    {
      name: 'Michael Chen',
      role: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Michael oversees all program implementation and ensures our initiatives create meaningful impact.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Finance Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Emily ensures transparent financial management and optimal use of donor funds.'
    },
    {
      name: 'David Okafor',
      role: 'Field Operations',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'David coordinates our on-ground efforts and builds relationships with local communities.'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Compassion',
      description: 'We approach our work with empathy, understanding, and a genuine desire to improve lives.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Community',
      description: 'We believe in the power of community involvement and local leadership in all our initiatives.'
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Sustainability',
      description: 'We design programs that create lasting change beyond our direct involvement.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Accountability',
      description: 'We maintain transparency in our operations and responsibly manage the resources entrusted to us.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About HopeHub</h1>
              <p className="text-xl mb-0 opacity-90">
                Learn about our mission, our story, and the incredible team making a difference in communities worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  HopeHub is dedicated to empowering communities through sustainable development initiatives that address the root causes of poverty and inequality. We work to create lasting change by implementing programs focused on education, healthcare, environmental conservation, and emergency relief.
                </p>
                <p className="text-gray-600">
                  We believe that every person deserves access to basic human needs, quality education, and the opportunity to thrive. Through collaboration with local partners and communities, we aim to build a more equitable and compassionate world.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  We envision a world where all communities have the resources, opportunities, and support they need to achieve their full potential. A world where poverty, inequality, and injustice are eliminated, and every person can live with dignity and hope.
                </p>
                <p className="text-gray-600">
                  By fostering sustainable development, promoting education, and building resilient communities, we strive to create a future where equitable access to resources and opportunities is a reality for all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 mb-4">
                HopeHub was founded in 2010 by a group of passionate individuals who witnessed firsthand the challenges facing vulnerable communities around the world. What began as a small initiative to build a school in a rural village has grown into a comprehensive organization addressing multiple facets of community development.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been one of growth, learning, and impact. Over the years, we've expanded our reach to multiple countries, implemented diverse programs, and built meaningful partnerships with local organizations and global supporters.
              </p>
              <p className="text-gray-600">
                Through both challenges and successes, we've remained committed to our founding vision: creating sustainable change that empowers communities to build their own better futures. Today, HopeHub continues to evolve, but our dedication to compassionate service and community-led development remains unchanged.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2010</div>
                <p className="text-gray-600">Organization founded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-gray-600">Countries of operation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <p className="text-gray-600">Partner organizations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-gray-600">Team members & volunteers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default About;
