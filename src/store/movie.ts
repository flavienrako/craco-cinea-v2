import { Movie } from 'interfaces';
import { atom, selector, selectorFamily } from 'recoil';
import { getMovie, getMovies } from 'services/movie';

export const pageState = atom<number>({
  key: 'page-movie',
  default: 2,
});

export const moviesListState = atom({
  key: 'movies-list',
  default: {},
});

export const movieState = atom<Movie | null>({
  key: 'movie',
  default: null,
});

export const movieQuery = selector({
  key: 'movie-query',
  get: async ({ get }) => {
    const page = get(pageState);
    try {
      const movies = await getMovies({
        method: 'GET',
        url: 'discover/movie',
        params: { page },
      });

      return movies;
    } catch (error) {
      return [];
    }
  },
});

export const movieById = selectorFamily({
  key: 'movie-by-id',
  get: (id: number) => async () =>
    getMovie({ method: 'GET', url: `movie/${id}` }),
});
