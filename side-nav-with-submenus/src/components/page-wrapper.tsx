import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 md:px-24 space-y-2 bg-lavender-800 flex-grow pb-4">
      {children}
    </div>
  );
}
