import { Movie, MovieApiResponse } from 'interfaces';
import { atom, selector } from 'recoil';
import makeRequest from 'services';

export const selectedSuggestionId = atom<number | null>({
  key: 'selected-id',
  default: null,
});

export const suggestionQuery = selector({
  key: 'suggestion-query',
  get: async () => {
    try {
      const suggestions = await makeRequest<MovieApiResponse>({
        method: 'GET',
        url: 'discover/movie',
        params: {
          sort_by: 'popularity.desc',
          include_video: true,
        },
      });

      return suggestions.results;
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
