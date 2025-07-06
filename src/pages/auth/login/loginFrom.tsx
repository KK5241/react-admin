import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { login } from '@/services/modules/login';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('auth');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await login(data); // await 后面如果是一个promise的话 会自动包装成promise
      const { accessToken } = res;
      console.log('access', res);
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/');
      }
    } catch (e: any) {
      console.error('登录失败', e.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{t('auth.title.login')}</CardTitle>
        <CardDescription>{t('auth.description.login')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                console.log(form, { ...field });
                return (
                  <FormItem>
                    <FormLabel>{t('auth.form.username')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('auth.form.usernamePlaceholder')} {...field} />
                    </FormControl>
                    <div className="flex flex-row-reverse"></div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    {t('auth.form.password')}
                    <a href="#" className="text-xs text-primary hover:text-primary/90 ">
                      Forgot password?
                    </a>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('auth.form.passwordPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm font-normal">
                Remember me
              </label>
            </div>
            <Button type="submit" className="w-full">
              {t('auth.title.login')}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default LoginForm;
