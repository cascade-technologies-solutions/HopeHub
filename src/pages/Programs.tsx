
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DonateSection from '@/components/DonateSection';

const Programs = () => {
  const programs = [
    {
      id: 'education',
      title: 'Education Initiative',
      description: 'Our education program aims to provide quality education to children in underserved communities. We build schools, train teachers, provide educational resources, and offer scholarships to ensure that every child has access to the education they deserve.',
      approach: 'We work closely with local education authorities and community leaders to identify needs and implement sustainable solutions that align with local educational standards and cultural contexts.',
      impact: 'Over 20,000 children have benefited from our education programs, with 85% of students completing primary education and 60% continuing to secondary education.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Access',
      description: 'Our healthcare program focuses on improving access to quality healthcare services in remote and underserved areas. Through mobile clinics, health education, preventive care initiatives, and training for local healthcare workers, we aim to create healthier communities.',
      approach: 'We employ a community-based approach, training local health workers and establishing sustainable healthcare systems that can function independently after our direct involvement ends.',
      impact: "We've conducted over 200 medical camps, provided healthcare services to 15,000+ individuals, and trained 150 community health workers.",
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 'environment',
      title: 'Environmental Conservation',
      description: 'Our environmental program is dedicated to protecting and preserving our natural environment. Through reforestation efforts, sustainable farming practices, waste management initiatives, and environmental education, we work to create a more sustainable future.',
      approach: 'We engage communities in conservation efforts, focusing on solutions that balance environmental protection with economic needs and traditional practices.',
      impact: "We've planted over 50,000 trees, established 15 community gardens, and implemented waste management systems in 10 communities.",
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 'community',
      title: 'Community Development',
      description: 'Our community development program focuses on building stronger, more resilient communities through infrastructure improvements, economic opportunities, leadership training, and community organizing.',
      approach: 'We facilitate community-led decision making and implementation, ensuring that development efforts reflect local priorities and build on existing strengths.',
      impact: "We've supported 35 communities, built 12 community centers, and facilitated the formation of 25 community-based organizations.",
      image: 'https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 'emergency',
      title: 'Emergency Relief',
      description: 'Our emergency relief program provides immediate assistance to communities affected by natural disasters, conflicts, and other crises. We deliver essential supplies, temporary shelter, medical care, and psychosocial support to help communities recover and rebuild.',
      approach: 'We respond rapidly while coordinating with local authorities and international relief efforts to ensure effective, efficient delivery of aid without duplication.',
      impact: "We've responded to 15 major emergencies, provided relief supplies to 10,000+ individuals, and assisted in rebuilding efforts in 8 communities.",
      image: 'https://images.unsplash.com/photo-1469571486292-b5175a148ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
              <p className="text-xl mb-0 opacity-90">
                Discover how we're creating sustainable change through our focused program areas.
              </p>
            </div>
          </div>
        </div>

        {/* Programs List */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {programs.map((program, index) => (
                <div id={program.id} key={program.id} className="scroll-mt-24">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    <div className="w-full lg:w-1/2">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-3xl font-bold mb-6">{program.title}</h2>
                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Our Approach</h3>
                        <p className="text-gray-600">{program.approach}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Impact</h3>
                        <p className="text-gray-600">{program.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
