import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lazyLoad } from './lazyLoad';
import ProtectedRouter from './protectedRouter';

const lazyLogin = lazy(() => import('@/pages/login'));
const lazyLayout = lazy(() => import('@/layouts'));
export const router = createBrowserRouter([
  {
    path: '/login',
    element: lazyLoad(lazyLogin),
  },
  {
    element: <ProtectedRouter />,
    children: [
      {
        path: '/',
        element: lazyLoad(lazyLayout),
      },
    ],
  },
]);
