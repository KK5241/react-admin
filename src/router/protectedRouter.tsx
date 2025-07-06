import { isAuthenticated } from '@/store/auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRouter;
