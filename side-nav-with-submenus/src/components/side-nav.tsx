'use client';

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import DynamicMenuItem from './dynamic-menu-item';

interface Supplier {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  website?: string;
}

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const pathname = usePathname();

  // Fetch suppliers on component mount
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        console.log('Fetching suppliers for navigation...');
        const response = await fetch('/api/suppliers');
        if (response.ok) {
          const data = await response.json();
          console.log('Suppliers fetched for navigation:', data);
          setSuppliers(data);
        } else {
          console.error('Failed to fetch suppliers:', response.status);
        }
      } catch (error) {
        console.error('Error fetching suppliers for navigation:', error);
      }
    };

    fetchSuppliers();
  }, []);

  return (
    <div 
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`bg-floral_white border-2 border-lavender rounded-2xl shadow-2xl transition-all duration-300 ease-in-out ${
        isExpanded ? 'p-6 w-72' : 'p-4 w-16'
      }`}>
        <div className="flex flex-col space-y-6 w-full">
          {/* Logo Section */}
          <Link
            href="/"
            className={`flex flex-row items-center transition-all duration-300 ${
              isExpanded 
                ? 'space-x-3 justify-center border-b border-lavender-400 pb-4 mb-2' 
                : 'justify-center'
            }`}
          >
            <div className={`flex items-center space-x-3 bg-blush text-white px-3 py-2 rounded-lg transition-all duration-300 ${
              isExpanded ? 'w-auto' : 'w-12 h-12 justify-center px-2 py-2'
            }`}>
              <img 
                src="/LOGO_BB2.jpeg" 
                alt="BESS't IN CLASS Logo" 
                className="h-6 w-6 object-contain flex-shrink-0" 
              />
              <span className={`font-bold text-lg transition-all duration-300 overflow-hidden whitespace-nowrap ${
                isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              }`}>
                <span className="text-floral_white">BESS</span>
                <span className="text-purple-700">'t</span>
                <span className="text-floral_white"> IN CLASS</span>
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className={`flex flex-col transition-all duration-300 ${
            isExpanded ? 'space-y-3 opacity-100' : 'space-y-0 opacity-0'
          }`}>
            {isExpanded && SIDENAV_ITEMS.map((item, idx) => {
              return <DynamicMenuItem key={idx} item={item} isExpanded={isExpanded} suppliers={suppliers} />;
            })}
          </div>
          
          {/* Collapsed Navigation Icons */}
          {!isExpanded && (
            <div className="flex flex-col items-center space-y-3">
              {SIDENAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className={`p-2 rounded-lg hover:bg-lavender-700 transition-colors ${
                    usePathname() === item.path ? 'bg-lavender-600 text-blush' : 'text-dark_purple'
                  }`}
                  title={item.title}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;