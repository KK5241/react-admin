import { HttpResponse } from 'msw';

const user = {
  id: 1,
  username: '123456',
  password: '123456',
};

// 存储refreshToken
const refreshTokenSore = new Set<string>();

// 生成Token
const generateToken = (type: 'access' | 'refresh') => {
  return `${type}-Token-${Math.random().toString(36).slice(2)}`;
};

export const login = async ({ request }: { request: any }) => {
  const { username, password } = await request.json();

  if (username !== user.username || password !== user.password) {
    return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const accessToken = generateToken('access');
  const refreshToken = generateToken('refresh');

  refreshTokenSore.add(refreshToken);

  return HttpResponse.json(
    { accessToken },
    {
      status: 200,
      headers: {
        'Set-Cookie': `refreshToken=${refreshToken}; path=/;`,
      },
    }
  );
};
