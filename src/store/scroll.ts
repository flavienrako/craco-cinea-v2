import { atom } from 'recoil';

const scrollState = atom<number>({
  key: 'scroll-state',
  default: 0,
});

export default scrollState;
