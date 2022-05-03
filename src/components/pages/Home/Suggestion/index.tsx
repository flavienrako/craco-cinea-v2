import React from 'react';

import { Rating } from '@mui/material';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { selectedSuggestionState } from 'store';

import SuggestionUi from './Suggestion.ui';

const Suggestion: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, backdrop_path, title, vote_average, release_date } =
    useRecoilValue(selectedSuggestionState);
  const date = release_date && dayjs(release_date).format('DD MMMM YYYY');

  return id ? (
    <SuggestionUi
      date={{ date }}
      discover={{ href: `movie/${id}` }}
      key={id}
      suggestionBg={{
        style: {
          background: `center / cover no-repeat url("${
            backdrop_path
              ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`
              : '/images/placeholder_1920.jpg'
          }")`,
        },
      }}
      title={{ title }}
      votes={{
        children: (
          <Rating
            defaultValue={vote_average / 2}
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
