import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazyLoad } from './lazyLoad';
import ProtectedRouter from './protectedRouter';

const lazyAuth = lazy(() => import('@/pages/auth'));
const lazyLayout = lazy(() => import('@/layouts'));
const lazyLgoin = lazy(() => import('@/pages/auth/login/loginFrom'));
const lazyRegiser = lazy(() => import('@/pages/auth/register/registerFrom'));
export const router = createBrowserRouter([
  {
    path: '/auth',
    element: lazyLoad(lazyAuth),
    children: [
      {
        index: true, // 默认子路由
        element: <Navigate to={'/auth/login'} replace></Navigate>,
      },
      {
        path: 'login',
        element: lazyLoad(lazyLgoin),
      },
      {
        path: 'register',
        element: lazyLoad(lazyRegiser),
      },
    ],
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
