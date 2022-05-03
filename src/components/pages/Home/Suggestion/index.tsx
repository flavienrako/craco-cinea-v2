import React from 'react';

import { Rating } from '@mui/material';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { selectedSuggestionState } from 'store';

import SuggestionUi from './Suggestion.ui';

const Suggestion: React.FC = () => {
  const suggestion = useRecoilValue(selectedSuggestionState);
  const date =
    suggestion?.release_date &&
    dayjs(suggestion.release_date).format('DD MMMM YYYY');

  return suggestion ? (
    <SuggestionUi
      date={{ date }}
      discover={{ href: `movie/${suggestion.id}` }}
      key={suggestion.id}
      suggestionBg={{
        style: {
          background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${suggestion?.backdrop_path}")`,
        },
      }}
      title={{ title: suggestion?.title }}
      votes={{
        children: (
          <Rating
            defaultValue={suggestion.vote_average / 2}
            name="size-large"
            precision={0.1}
            readOnly
            size="large"
          />
        ),
      }}
    />
  ) : null;
};

export default Suggestion;
