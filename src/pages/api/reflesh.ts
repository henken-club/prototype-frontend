import {NextApiHandler} from 'next';
import {parseCookies} from 'nookies';

import {graphqlSdk} from '~/graphql/graphql-request';
import {API_REFRESH_TOKEN_KEY} from '~/lib/env';

export const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.end();
    return;
  }
  const refleshToken = parseCookies({req})?.[API_REFRESH_TOKEN_KEY];
  if (!refleshToken) {
    res.status(401);
    res.end();
    return;
  }

  await graphqlSdk
    .Reflesh({token: refleshToken})
    .then(({refleshToken}) => refleshToken.tokens.accessToken)
    .then((accessToken) => {
      res.status(200);
      res.send(accessToken);
      res.end();
    })
    .catch(() => {
      res.status(200);
      res.end();
    });
};
export default handler;
