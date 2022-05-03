import { atom } from 'recoil';

export type WatchList = {
  id: number;
};

export const watchList = atom<WatchList[]>({
  key: 'watch-list',
  default: [],
});
