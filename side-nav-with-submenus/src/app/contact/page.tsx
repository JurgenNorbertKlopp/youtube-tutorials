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
      icon: "simple-icons:x",
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
      <div 
        className="min-h-screen -mx-8 -mt-8 md:-mx-24 flex items-center justify-center py-12"
        style={{
          backgroundImage: 'url(/bluemarble.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="p-8 md:p-12 w-full mx-8 md:mx-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-0 drop-shadow-2xl" style={{textShadow: '4px 4px 8px rgba(0, 0, 0, 1), 2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(0, 0, 0, 0.6)'}}>
              Get In Touch
            </h1>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col items-center text-center p-6 bg-floral_white border border-lavender rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center mb-4">
                      <Icon icon="lucide:mail" className="text-blush text-xl" />
                    </div>
                    <a 
                      href={`mailto:${contactData.email}`}
                      className="text-dark_purple-300 hover:text-blush transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center text-center p-6 bg-floral_white border border-lavender rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blush-800 rounded-full flex items-center justify-center mb-4">
                      <Icon icon="lucide:phone" className="text-blush text-xl" />
                    </div>
                    <a 
                      href={`tel:${contactData.phone}`}
                      className="text-dark_purple-300 hover:text-blush transition-colors"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <div className="flex justify-center space-x-6">
                  {contactData.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-16 h-16 bg-black border-2 border-black rounded-full hover:shadow-xl hover:border-gray-600 transition-all duration-300 transform hover:scale-110 group"
                      title={social.platform}
                    >
                      <Icon 
                        icon={social.icon} 
                        className="text-2xl text-white group-hover:text-gray-200 transition-colors" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
