import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Login = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation('auth');
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen flex-col bg-gray-50">
        <div className="space-y-8 w-full max-w-md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">
              {pathname === '/auth/login' ? t('auth.header.login') : t('auth.header.register')}
            </h2>
            <div className="space-x-2">
              <span className="text-gray-500">Or</span>
              {pathname === '/auth/login' ? (
                <Link to={'./register'}>{t('auth.footer.login')}</Link>
              ) : (
                <Link to={'./login'}>{t('auth.footer.register')}</Link>
              )}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Login;
