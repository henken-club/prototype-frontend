import clsx from 'clsx';
import {useRouter} from 'next/dist/client/router';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {FailedReason, useLogin} from '~/hooks/useLogin';

export type FormInput = {
  username: string;
  password: string;
};

export type PageProps = {className?: string};
export const LoginTemplate: React.VFC<PageProps> = ({...props}) => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<FormInput>();
  const login = useLogin();
  const [reason, setReason] = useState<FailedReason>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const result = await login(data);
    if (result.login) {
      await router.push('/');
    } else {
      setReason(result.reason);
    }
  };

  return (
    <div
      className={clsx(['flex', 'flex-col', 'justify-center', 'items-center'])}
    >
      <div className={clsx(['px-2'], ['py-4'], ['bg-gray-200'])}>
        <p>Login</p>
        <form
          className={clsx(['flex', 'flex-col'])}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            className={clsx(['mt-2'], ['flex', 'flex-col'])}
            htmlFor="username"
          >
            <span>Username</span>
            <input
              id="username"
              type="text"
              autoComplete="username"
              {...register('username')}
            />
          </label>
          <label
            className={clsx(['mt-2'], ['flex', 'flex-col'])}
            htmlFor="password"
          >
            <span>Password</span>
            <input
              id="password"
              type="password"
              autoComplete="password"
              {...register('password')}
            />
          </label>
          <button type="submit">送信</button>
        </form>
        {reason && reason === 'unauthorized' && <p>認証失敗</p>}
      </div>
    </div>
  );
};
