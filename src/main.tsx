import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './router';
import App from './App.js';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
