import dayjs from 'dayjs';
import {
  GenreResponse,
  Movie,
  MovieApiResponse,
  MovieParams,
} from 'interfaces';
import { atom, selector, selectorFamily } from 'recoil';
import makeRequest from 'services';

export const pageState = atom<number>({
  key: 'page-movie',
  default: 1,
});

export const moviesListState = atom({
  key: 'movies-list',
  default: {},
});

export const movieState = atom<Movie | null>({
  key: 'movie',
  default: null,
});

export const movieQueryParams = atom<MovieParams>({
  key: 'movie-query-param',
  default: {
    year: undefined,
    with_genres: undefined,
  },
});

export const movieQuery = selector({
  key: 'movie-query',
  get: async ({ get }) => {
    const page = get(pageState);
    const { year, ...params } = get(movieQueryParams);

    try {
      const movies = await makeRequest<MovieApiResponse>({
        method: 'GET',
        url: 'discover/movie',
        params: {
          page,
          sort_by: 'release_date.desc',
          'vote_average.gte': 1,
          year: dayjs(year).format('YYYY'),
          ...params,
        },
      });

      return movies;
    } catch (error) {
      return undefined;
    }
  },
});

export const movieTotalPage = selector<number>({
  key: 'movie-total-count',
  get: ({ get }) => {
    const movies = get(movieQuery);
    return movies?.total_pages || 0;
  },
});

export const movieById = selectorFamily({
  key: 'movie-by-id',
  get: (id: number) => async () =>
    makeRequest<Movie>({ method: 'GET', url: `movie/${id}` }),
});

export const movieGenresQuery = selector({
  key: 'movie-genre-query',
  get: async () => {
    try {
      const { genres } = await makeRequest<GenreResponse>({
        method: 'GET',
        url: 'genre/movie/list',
      });

      return genres;
    } catch (error) {
      return undefined;
    }
  },
});
