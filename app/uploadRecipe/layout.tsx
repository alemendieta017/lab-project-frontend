import React, { ReactElement, Suspense } from 'react';

const layout = ({ children }: { children: ReactElement }) => {
  return <Suspense>{children}</Suspense>;
};

export default layout;
