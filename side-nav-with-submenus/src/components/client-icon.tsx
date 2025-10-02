'use client';

import { Icon } from '@iconify/react';

interface ClientIconProps {
  icon: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export default function ClientIcon({ icon, className, width, height }: ClientIconProps) {
  return <Icon icon={icon} className={className} width={width} height={height} />;
}