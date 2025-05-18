import LoginForm from './loginForm';

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen flex-col bg-gray-50">
        <div className="space-y-8 w-full max-w-md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Sign in to your account</h2>
            <div className="space-x-2">
              <span className="text-gray-500">Or</span>
              <a href="">create a new account</a>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
