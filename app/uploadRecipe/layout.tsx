'use client'
import Header from '@/components/Header';
import React, { ReactElement, Suspense } from 'react';

const layout = ({ children }: { children: ReactElement }) => {
  return (
    <Suspense>
      <Header />
      {children}
    </Suspense>
  );
};

export default layout;
