'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <div 
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`bg-floral_white border-2 border-lavender rounded-2xl shadow-2xl transition-all duration-300 ease-in-out ${
        isExpanded ? 'p-6 w-60' : 'p-4 w-16'
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
            <span className="h-8 w-8 bg-blush rounded-lg flex-shrink-0" />
            <span className={`font-bold text-xl text-dark_purple transition-all duration-300 overflow-hidden ${
              isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
            }`}>
              BESS
            </span>
          </Link>

          {/* Navigation Items */}
          <div className={`flex flex-col transition-all duration-300 ${
            isExpanded ? 'space-y-3 opacity-100' : 'space-y-0 opacity-0'
          }`}>
            {isExpanded && SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} isExpanded={isExpanded} />;
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

const MenuItem = ({ item, isExpanded }: { item: SideNavItem; isExpanded: boolean }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  if (!isExpanded) return null;

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover:bg-lavender-700 w-full justify-between text-dark_purple transition-colors ${
              pathname.includes(item.path) ? 'bg-lavender-600 text-blush' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`text-dark_purple-300 hover:text-blush transition-colors ${
                      subItem.path === pathname ? 'font-bold text-blush' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-lavender-700 text-dark_purple transition-colors ${
            item.path === pathname ? 'bg-lavender-600 text-blush' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};