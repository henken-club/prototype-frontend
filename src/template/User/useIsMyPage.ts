import {useMemo} from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';

export const useIsMyPage = (alias: string) => {
  const viewer = useRecoilValue(viewerState);
  return useMemo(() => viewer?.alias === alias, [viewer, alias]);
};
