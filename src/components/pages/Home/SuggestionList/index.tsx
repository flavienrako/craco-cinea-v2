import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { Movie } from 'interfaces';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  selectedSuggestionId,
  selectedSuggestionState,
  suggestionQuery,
} from 'store';

import SuggestionCard from './SuggestionCard.ui';

const chunk = (elements: any[], perChunk: number) =>
  elements.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = { index: chunkIndex, items: [] };
    }
    resultArray[chunkIndex].items.push(item);
    return resultArray;
  }, []);

const SuggestionList: React.FC = () => {
  const suggestions = useRecoilValue(suggestionQuery);

  const setSelected = useSetRecoilState(selectedSuggestionId);

  const suggestionsChunked =
    (suggestions.length && chunk(suggestions, 4)) || [];

  const selected = useRecoilValue(selectedSuggestionState);

  const handleSelect = (movie: Movie) => {
    setSelected(movie.id);
  };

  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      cycleNavigation={false}
      duration={300}
      indicators={false}
      navButtonsAlwaysVisible
      stopAutoPlayOnHover
      swipe={false}
    >
      {suggestionsChunked.map(({ index, items }) => (
        <div css={{ display: 'flex' }} key={index}>
          {items.map((movie: Movie) => {
            const { title, id } = movie;
            return (
              <SuggestionCard
                img={{
                  style: {
                    background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w500/${movie.poster_path}")`,
                  },
                  className: id === selected?.id ? 'selected' : '',
                  onClick: () => handleSelect(movie),
                }}
                key={id}
                title={{ title }}
              />
            );
          })}
        </div>
      ))}
    </Carousel>
  );
};

export default SuggestionList;
