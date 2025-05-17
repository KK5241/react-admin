import { z } from 'zod';

export const formSchema = z.object({
  username: z.string().min(2, '账号至少2位').max(15, '账号至多15位'),
  password: z.string().min(6, '密码至少6位'),
});
