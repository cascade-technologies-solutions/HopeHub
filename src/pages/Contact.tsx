
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Our Location',
      details: '123 Hope Street, Cityville, State 12345, United States'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone Number',
      details: '(123) 456-7890'
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email Address',
      details: 'contact@hopehub.org'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Office Hours',
      details: 'Monday - Friday: 9am - 5pm'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl mb-0 opacity-90">
                We'd love to hear from you. Reach out with questions, partnership opportunities, or to learn more about our work.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  Whether you have a question about our programs, want to volunteer, or are interested in donating, we're here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-3">Media Inquiries</h3>
                  <p className="text-gray-600 mb-0">
                    For media inquiries, please contact our communications team at <span className="text-primary">media@hopehub.org</span> or call (123) 456-7891.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Volunteer Opportunities</h3>
                  <p className="text-gray-600 mb-0">
                    Interested in volunteering? Learn more about our volunteer opportunities on our <span className="text-primary">Volunteer</span> page or contact us directly.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-96 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30599977437!2d-74.25986548442436!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1669651636886!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="HopeHub Office Location"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
