'use client';

import React from 'react';
import { Icon } from '@iconify/react';

interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
  socials: {
    platform: string;
    url: string;
    icon: string;
    username?: string;
  }[];
}

// Contact information - easily customizable
const contactData: ContactInfo = {
  email: "hello@yourcompany.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business Street, City, State 12345",
  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/yourcompany",
      icon: "lucide:linkedin",
      username: "@yourcompany"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourcompany",
      icon: "lucide:twitter",
      username: "@yourcompany"
    },
    {
      platform: "Email",
      url: "mailto:hello@yourcompany.com",
      icon: "lucide:mail",
      username: "hello@yourcompany.com"
    }
  ]
};

const ContactPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl text-dark_purple mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-dark_purple-300 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-dark_purple mb-6">
                Contact Information
              </h2>
              
              {/* Email */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-floral_white border border-lavender rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:mail" className="text-blush text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark_purple">Email</h3>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-dark_purple-300 hover:text-blush transition-colors"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-floral_white border border-lavender rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:phone" className="text-blush text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark_purple">Phone</h3>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="text-dark_purple-300 hover:text-blush transition-colors"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              {contactData.address && (
                <div className="flex items-center space-x-4 mb-6 p-4 bg-floral_white border border-lavender rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center">
                    <Icon icon="lucide:map-pin" className="text-blush text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark_purple">Address</h3>
                    <p className="text-dark_purple-300">
                      {contactData.address}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-dark_purple mb-6">
                Follow Us
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {contactData.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-floral_white border border-lavender rounded-lg hover:shadow-md hover:border-blush transition-all group"
                  >
                    <Icon 
                      icon={social.icon} 
                      className="text-2xl text-dark_purple group-hover:text-blush transition-colors" 
                    />
                    <div>
                      <div className="font-semibold text-dark_purple group-hover:text-blush transition-colors">
                        {social.platform}
                      </div>
                      {social.username && (
                        <div className="text-sm text-dark_purple-300">
                          {social.username}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-lavender to-floral_white border border-lavender rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dark_purple mb-4">
              Let's Start a Conversation
            </h3>
            <p className="text-dark_purple-300 max-w-3xl mx-auto mb-6">
              Whether you have a question about our services, need support, or want to explore 
              partnership opportunities, our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark_purple-400">
              <div className="flex items-center space-x-2">
                <Icon icon="lucide:clock" className="text-blush" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon="lucide:shield-check" className="text-blush" />
                <span>Secure & confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon="lucide:users" className="text-blush" />
                <span>Dedicated support team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
