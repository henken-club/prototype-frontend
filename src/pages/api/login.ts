import {NextApiHandler} from 'next';
import {setCookie} from 'nookies';

import {graphqlSdk} from '~/graphql/graphql-request';
import {API_REFRESH_TOKEN_KEY} from '~/lib/env';

export const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.end();
    return;
  }

  const {alias, password} = req.body;

  if (typeof alias !== 'string' || typeof password !== 'string') {
    res.status(400);
    res.end();
    return;
  }

  try {
    const tokens = await graphqlSdk
      .Login({alias, password})
      .then(({login}) => login.tokens);

    setCookie({res}, API_REFRESH_TOKEN_KEY!, tokens.refreshToken);

    res.status(200);
    res.send(tokens.accessToken);
    res.end();
    return;
  } catch (error) {
    res.status(401);
    res.end();
  }
};
export default handler;
