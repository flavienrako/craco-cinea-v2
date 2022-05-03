/* eslint-disable @typescript-eslint/naming-convention */
import React, { useCallback } from 'react';

import { Rating } from '@mui/material';
import dayjs from 'dayjs';
import { Movie } from 'interfaces';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movieQuery } from 'store';
import { watchListState } from 'store/watchlist';

import MovieCard from './MovieCard.ui';

const MovieList: React.FC = () => {
  const movies = useRecoilValue(movieQuery);
  const [watchList, setWatchList] = useRecoilState(watchListState);

  const onAddoWatchList = useCallback(
    (movie: Movie) => {
      const isInList = watchList.find(({ id }) => id === movie.id);
      const newList = isInList
        ? watchList.filter(({ id }) => id !== movie.id)
        : [...watchList, movie];
      setWatchList(newList);
    },
    [watchList]
  );

  return (
    <>
      {movies?.results.map((movie) => {
        const { id, poster_path, title, release_date, vote_average } = movie;
        const date = dayjs().isSame(release_date, 'year')
          ? dayjs(release_date).fromNow()
          : dayjs(release_date).format('DD MMMM YYYY');

        const isInList = watchList.findIndex(({ id: wId }) => wId === id);

        return (
          <MovieCard
            date={{ date }}
            IconStar={{ icon: isInList > 0 ? 'FaStar' : 'FaRegStar' }}
            img={{
              src: poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : '/images/placeholder_500_750.jpg',
              href: `movie/${id}`,
            }}
            key={id}
            rating={{
              children: vote_average ? (
                <Rating
                  defaultValue={vote_average / 2}
                  name="size-large"
                  precision={0.1}
                  readOnly
                  size="small"
                />
              ) : null,
            }}
            title={{ title }}
            watchList={{ onClick: () => onAddoWatchList(movie) }}
          />
        );
      })}
    </>
  );
};

export default MovieList;
