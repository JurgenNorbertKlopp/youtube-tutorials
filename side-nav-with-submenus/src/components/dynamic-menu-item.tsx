'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { SideNavItem } from '@/types';

interface Supplier {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  website?: string;
}

interface DynamicMenuItemProps {
  item: SideNavItem;
  isExpanded: boolean;
  suppliers?: Supplier[];
}

const DynamicMenuItem = ({ item, isExpanded, suppliers = [] }: DynamicMenuItemProps) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  if (!isExpanded) return null;

  // If this is the suppliers item, dynamically generate submenu
  const isSuppliers = item.title === 'Suppliers';
  const dynamicSubMenuItems = isSuppliers ? [
    { title: 'All Suppliers', path: '/suppliers' },
    ...suppliers.map(supplier => ({
      title: supplier.name,
      path: `/suppliers/${supplier.slug.current}`
    }))
  ] : item.subMenuItems;

  // Debug logging for suppliers
  if (isSuppliers) {
    console.log('Suppliers menu - suppliers data:', suppliers);
    console.log('Suppliers menu - dynamic items:', dynamicSubMenuItems);
  }

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
              {dynamicSubMenuItems?.map((subItem, idx) => {
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

export default DynamicMenuItem;