'use client';

import React from 'react';
import { Icon } from '@iconify/react';

// Customizable settings - easily change these
const homePageSettings = {
  // Change this URL to your desired background image
  backgroundImage: "https://images.unsplash.com/photo-1497436072909-f5e4be769fb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80", // Modern office/business background
  
  // Welcome paragraph - customize this text
  welcomeText: "Welcome to BESS, where innovation meets excellence. We're dedicated to delivering cutting-edge solutions that power the future of energy storage and sustainable technology. Our commitment to quality and performance sets us apart as the industry leader.",
  
  // Additional intro text
  introText: "Discover how our best-in-class solutions can transform your energy storage needs and drive your business forward.",
  
  // Call-to-action button text
  ctaText: "Explore Our Solutions"
};

export default function Home() {
  return (
    <>
      {/* Hero Section with Background */}
      <div 
        className="relative min-h-screen -mx-8 -mt-8 md:-mx-24 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 11, 25, 0.7), rgba(28, 11, 25, 0.5)), url(${homePageSettings.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Hero Content */}
        <div className="text-center px-8 max-w-6xl mx-auto relative z-10">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
            <span className="text-floral_white">BESS</span>
            <span className="text-blush">'t</span>
            <br />
            <span className="text-gradient bg-gradient-to-r from-lavender to-floral_white bg-clip-text text-transparent">
              In Class
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-floral_white-300 mb-12 max-w-3xl mx-auto font-light">
            Leading the future of energy storage with innovative, sustainable solutions
          </p>
          
          {/* CTA Button */}
          <button className="bg-blush hover:bg-chili_red text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Icon icon="lucide:arrow-right" className="inline-block ml-2" />
            {homePageSettings.ctaText}
          </button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-blush opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 bg-lavender opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-floral_white opacity-25 rounded-full animate-ping"></div>
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-floral_white to-lavender-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark_purple mb-8 text-center">
              Welcome to Excellence
            </h2>
            
            {/* Welcome Paragraph - Easily Customizable */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-lavender">
              <p className="text-lg md:text-xl text-dark_purple-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                {homePageSettings.welcomeText}
              </p>
              
              <p className="text-md md:text-lg text-dark_purple-600 leading-relaxed max-w-3xl mx-auto">
                {homePageSettings.introText}
              </p>
              
              {/* Feature Highlights */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blush-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:zap" className="text-2xl text-blush" />
                  </div>
                  <h3 className="font-bold text-dark_purple mb-2">Innovative Technology</h3>
                  <p className="text-dark_purple-600 text-sm">Cutting-edge solutions for modern energy challenges</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blush-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:shield-check" className="text-2xl text-blush" />
                  </div>
                  <h3 className="font-bold text-dark_purple mb-2">Proven Reliability</h3>
                  <p className="text-dark_purple-600 text-sm">Trusted performance you can depend on</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blush-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon="lucide:leaf" className="text-2xl text-blush" />
                  </div>
                  <h3 className="font-bold text-dark_purple mb-2">Sustainable Future</h3>
                  <p className="text-dark_purple-600 text-sm">Environmentally conscious energy storage solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-dark_purple to-dark_purple-800">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-floral_white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-floral_white-300 mb-12">
            Discover how BESS solutions can revolutionize your energy storage needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blush hover:bg-chili_red text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              View Our Solutions
            </button>
            <button className="border-2 border-floral_white text-floral_white hover:bg-floral_white hover:text-dark_purple font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
