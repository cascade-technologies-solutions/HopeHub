
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactStats from '@/components/ImpactStats';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import AboutSummary from '@/components/AboutSummary';
import Testimonial from '@/components/Testimonial';
import DonateSection from '@/components/DonateSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <AboutSummary />
        <FeaturedPrograms />
        <Testimonial />
        <DonateSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
