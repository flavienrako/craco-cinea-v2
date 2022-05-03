import { Movie } from 'interfaces';
import { atom, DefaultValue } from 'recoil';

export type WatchList = {
  id: number;
};

const localStorageEffect =
  <T>(key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: T) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const watchListState = atom<Movie[]>({
  key: 'watch-list',
  default: [],
  effects_UNSTABLE: [localStorageEffect<Movie[]>('watch_list')],
});
