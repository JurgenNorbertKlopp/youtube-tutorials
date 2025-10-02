import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <Icon icon="lucide:info" width="24" height="24" />,
  },
  {
    title: 'Suppliers',
    path: '/suppliers',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/suppliers' },
      { title: 'Sungrow', path: '/suppliers/sungrow' },
      { title: 'Tesla', path: '/suppliers/tesla' },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <Icon icon="lucide:edit-3" width="24" height="24" />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon="lucide:contact" width="24" height="24" />,
  },
];
