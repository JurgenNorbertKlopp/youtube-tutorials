'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Customizable about page content
const aboutContent = {
  // Person details
  person: {
    name: "David Guinea",
    title: "Battery Technology Enthusiast",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80", // Replace with actual photo
    bio: "With a background in chemistry and physics, I have a deep passion for battery technology and its applications in renewable energy storage. I created BESS't In Class to provide clear, unbiased comparisons of containerised battery energy storage systems, helping businesses and individuals make informed decisions about their energy solutions."
  },

  // Website objectives
  objectives: {
    title: "Website Objectives",
    items: [
      "Provide comprehensive comparisons of containerised BESS solutions",
      "Deliver unbiased technical analysis and market insights",
      "Help organizations choose the best energy storage systems",
      "Foster understanding of battery energy storage technology",
      "Connect industry professionals and facilitate knowledge sharing"
    ]
  },

  // Company/Personal philosophies
  philosophies: {
    title: "Our Philosophy",
    content: "We believe that informed decision-making drives innovation in energy storage. By providing transparent, detailed comparisons and technical insights, we empower organizations to choose solutions that best meet their needs while advancing the adoption of sustainable energy technologies."
  }
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl text-dark_purple mb-4">About</h1>
        <p className="text-lg text-dark_purple-600 max-w-3xl">
          Your trusted source for comprehensive containerised battery energy storage system comparisons and insights. This website aggregates the Tier 1 BESS solutions available to the European markets, providing detailed technical analyses and unbiased comparisons to help you make informed decisions about your energy storage needs. Check out the blog for my own thoughts on the energy market. 
        </p>
      </div>

      <div className="space-y-12">
        {/* Person Profile Section */}
        <section className="bg-floral_white-300 rounded-2xl p-8 shadow-lg border border-lavender-300">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blush shadow-xl">
                <img
                  src={aboutContent.person.photo}
                  alt={aboutContent.person.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-dark_purple mb-2">
                {aboutContent.person.name}
              </h2>
              <p className="text-blush font-semibold mb-4 text-lg">
                {aboutContent.person.title}
              </p>
              <p className="text-dark_purple-700 leading-relaxed">
                {aboutContent.person.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Website Objectives */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-lavender-300">
          <div className="flex items-center mb-6">
            <Icon icon="lucide:target" className="text-3xl text-blush mr-3" />
            <h2 className="text-2xl font-bold text-dark_purple">
              {aboutContent.objectives.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {aboutContent.objectives.items.map((objective, index) => (
              <li key={index} className="flex items-start">
                <Icon icon="lucide:check-circle" className="text-blush mr-3 mt-1 flex-shrink-0" />
                <span className="text-dark_purple-700">{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Philosophy */}
        <section className="bg-gradient-to-r from-lavender-200 to-floral_white-200 rounded-2xl p-8 shadow-lg border border-lavender-300">
          <div className="flex items-center mb-6">
            <Icon icon="lucide:lightbulb" className="text-3xl text-blush mr-3" />
            <h2 className="text-2xl font-bold text-dark_purple">
              {aboutContent.philosophies.title}
            </h2>
          </div>
          <p className="text-dark_purple-700 leading-relaxed text-lg">
            {aboutContent.philosophies.content}
          </p>
        </section>

        {/* Get in Touch Section */}
        <section className="text-center bg-dark_purple rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-floral_white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-floral_white-300 mb-6 max-w-2xl mx-auto">
            Have questions about energy storage solutions or want to discuss your project requirements? 
            I'd love to hear from you.
          </p>
          <Link href="/contact">
            <button className="bg-blush hover:bg-chili_red text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Icon icon="lucide:mail" className="inline-block mr-2" />
              Get in Touch
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}