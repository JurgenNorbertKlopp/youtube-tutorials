'use client';

import React from 'react';
import { Icon } from '@iconify/react';

// About page content - easily customizable
const aboutContent = {
  hero: {
    title: "About BESS",
    subtitle: "Pioneering the Future of Energy Storage",
    description: "Founded on the principles of innovation, sustainability, and excellence, BESS has been at the forefront of energy storage technology for over a decade."
  },
  
  mission: {
    title: "Our Mission",
    content: "To revolutionize energy storage through cutting-edge technology, sustainable practices, and unwavering commitment to our clients' success. We believe in creating solutions that not only meet today's energy challenges but anticipate tomorrow's opportunities."
  },
  
  vision: {
    title: "Our Vision",
    content: "A world powered by clean, reliable, and intelligent energy storage systems that enable sustainable growth and energy independence for communities and businesses worldwide."
  },
  
  values: [
    {
      icon: "lucide:lightbulb",
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in energy storage technology."
    },
    {
      icon: "lucide:leaf",
      title: "Sustainability",
      description: "Environmental responsibility is at the core of everything we do."
    },
    {
      icon: "lucide:users",
      title: "Partnership",
      description: "We build lasting relationships with our clients, suppliers, and communities."
    },
    {
      icon: "lucide:award",
      title: "Excellence",
      description: "We maintain the highest standards in quality, performance, and service."
    }
  ],
  
  stats: [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ],
  
  team: {
    title: "Our Leadership",
    description: "Led by industry veterans and visionary experts who bring decades of combined experience in energy storage, engineering, and sustainable technology.",
    members: [
      {
        name: "Dr. Sarah Chen",
        role: "Chief Executive Officer",
        description: "20+ years in renewable energy and storage systems",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Michael Rodriguez",
        role: "Chief Technology Officer",
        description: "Former Tesla engineer with expertise in battery technology",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Dr. Elena Volkov",
        role: "Head of Research & Development",
        description: "PhD in Materials Science, 15+ patents in energy storage",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
      }
    ]
  }
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl md:text-6xl text-dark_purple mb-6">
          {aboutContent.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-blush font-medium mb-8">
          {aboutContent.hero.subtitle}
        </p>
        <p className="text-lg text-dark_purple-300 max-w-4xl mx-auto leading-relaxed">
          {aboutContent.hero.description}
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-floral_white border border-lavender rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center mr-4">
                <Icon icon="lucide:target" className="text-2xl text-blush" />
              </div>
              <h2 className="text-2xl font-bold text-dark_purple">
                {aboutContent.mission.title}
              </h2>
            </div>
            <p className="text-dark_purple-700 leading-relaxed">
              {aboutContent.mission.content}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-lavender-800 to-floral_white border border-lavender rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center mr-4">
                <Icon icon="lucide:eye" className="text-2xl text-blush" />
              </div>
              <h2 className="text-2xl font-bold text-dark_purple">
                {aboutContent.vision.title}
              </h2>
            </div>
            <p className="text-dark_purple-700 leading-relaxed">
              {aboutContent.vision.content}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-dark_purple text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutContent.values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blush to-chili_red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={value.icon} className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark_purple mb-3">
                {value.title}
              </h3>
              <p className="text-dark_purple-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20 bg-gradient-to-r from-dark_purple to-dark_purple-800 rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-floral_white mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutContent.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-blush mb-2">
                {stat.number}
              </div>
              <div className="text-floral_white-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark_purple mb-6">
            {aboutContent.team.title}
          </h2>
          <p className="text-lg text-dark_purple-300 max-w-3xl mx-auto">
            {aboutContent.team.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {aboutContent.team.members.map((member, index) => (
            <div key={index} className="bg-floral_white border border-lavender rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-lavender group-hover:border-blush transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark_purple mb-2">
                {member.name}
              </h3>
              <p className="text-blush font-medium mb-4">
                {member.role}
              </p>
              <p className="text-dark_purple-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-lavender to-floral_white rounded-2xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark_purple mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-lg text-dark_purple-300 mb-8 max-w-2xl mx-auto">
          Join the hundreds of companies worldwide who trust BESS for their energy storage needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blush hover:bg-chili_red text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
            <Icon icon="lucide:phone" className="mr-2" />
            Contact Our Team
          </button>
          <button className="border-2 border-dark_purple text-dark_purple hover:bg-dark_purple hover:text-white font-bold py-3 px-8 rounded-lg transition-all">
            <Icon icon="lucide:download" className="mr-2" />
            Download Brochure
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;