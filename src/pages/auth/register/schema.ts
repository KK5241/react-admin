import { z } from 'zod';

export const formSchema = z
  .object({
    username: z
      .string()
      .min(2, 'the account should have at least 2 charaters')
      .max(15, 'the account should have at most 15 charaters'),
    password: z.string().min(6, 'the password should have at least 6 charaters'),
    confirmPassword: z.string().min(6, 'the password should have at least 6 charaters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
