import { Suspense } from 'react';
import React from 'react';

export const lazyLoad = (Componet: React.LazyExoticComponent<() => React.ReactElement>) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Componet />
    </Suspense>
  );
};
