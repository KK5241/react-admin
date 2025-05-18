import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lazyLoad } from './lazyLoad';

const lazyLogin = lazy(() => import('@/pages/login'));
const lazyHome = lazy(() => import('@/pages/home'));
export const router = createBrowserRouter([
  {
    path: '/login',
    element: lazyLoad(lazyLogin),
  },
  {
    path: '/',
    element: lazyLoad(lazyHome),
  },
]);
