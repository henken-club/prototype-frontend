import {NextApiHandler} from 'next';
import {setCookie} from 'nookies';

import {graphqlSdk} from '~/graphql/graphql-request';

const parseInput = ({
  alias,
  password,
}: Record<'alias' | 'password', any>): {
  alias: string;
  password: string;
} | null => {
  if (typeof alias === 'string' && typeof password === 'string')
    return {alias, password};
  return null;
};

export const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.end();
    return;
  }

  const {alias, password} = req.body;
  const input = parseInput({alias, password});

  if (!input) {
    res.status(400);
    res.end();
    return;
  }

  try {
    const tokens = await graphqlSdk
      .Login({input})
      .then(({login}) => login.tokens);

    setCookie({res}, 'accessToken', tokens.accessToken);
    setCookie({res}, 'refleshToken', tokens.refleshToken);
    res.status(200);
    res.end();
    return;
  } catch (error) {
    res.status(401);
    res.end();
  }
};
export default handler;
