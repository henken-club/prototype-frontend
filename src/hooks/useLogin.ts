import {API_ACCESS_TOKEN_KEY} from '~/lib/env';

export type FailedReason = 'unauthorized' | 'request_failed';
export type LoginResult = {login: true} | {login: false; reason: FailedReason};

export const useLogin = () => {
  return async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<LoginResult> => {
    try {
      const data = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({alias: username, password}),
      });
      const accessToken = await data.text();
      if (data.status === 200 && accessToken) {
        sessionStorage.setItem(API_ACCESS_TOKEN_KEY, accessToken);
        return {login: true};
      } else if (data.status === 401) {
        return {login: false, reason: 'unauthorized'};
      } else {
        return {login: false, reason: 'request_failed'};
      }
    } catch (error) {
      return {login: false, reason: 'request_failed'};
    }
  };
};
