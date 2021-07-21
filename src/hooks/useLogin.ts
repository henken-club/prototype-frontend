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
      switch (data.status) {
        case 200:
          return {
            login: true,
          };
        case 401:
          return {
            login: false,
            reason: 'unauthorized',
          };
        default:
          return {
            login: false,
            reason: 'request_failed',
          };
      }
    } catch (error) {
      return {
        login: false,
        reason: 'request_failed',
      };
    }
  };
};
