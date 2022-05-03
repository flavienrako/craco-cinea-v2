import { Movie } from 'interfaces';
import { atom, selector } from 'recoil';
import { getMovies } from 'services/movie';

export const selectedSuggestionId = atom<number | null>({
  key: 'selected-id',
  default: null,
});

export const suggestionQuery = selector({
  key: 'movie-query',
  get: async () => {
    try {
      const suggestions = await getMovies({
        method: 'GET',
        url: 'discover/movie',
        params: {},
      });

      return suggestions;
    } catch (error) {
      return [];
    }
  },
});

export const selectedSuggestionState = selector<Movie>({
  key: 'selected-movie',
  get: ({ get }) => {
    const suggestions = get(suggestionQuery);
    const selectedId = get(selectedSuggestionId);

    return selectedId
      ? suggestions.find(({ id }) => id === selectedId)
      : suggestions[0];
  },
});
