import {atom} from 'recoil';

export type Viewer = {
  alias: string;
  displayName: string;
  picture: string;
};

export const viewerState = atom<
  // when not logged in
  | undefined
  // when viewer loading
  | null
  // when viewer loaded
  | Viewer
>({
  key: 'viewer',
  default: undefined,
});
