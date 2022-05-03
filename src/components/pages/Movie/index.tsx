import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Rating } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movieById } from 'store';
import { watchListState } from 'store/watchlist';

import MovieView from './Movie.ui';

const Movie: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [watchList, setWatchList] = useRecoilState(watchListState);

  const movie = useRecoilValue(movieById(parseInt(id, 10)));

  if (!movie) navigate('/');

  const onAddoWatchList = useCallback(() => {
    const isInList = watchList.find(({ id: m_id }) => m_id === movie.id);
    const newList = isInList
      ? watchList.filter(({ id: m_id }) => m_id !== movie.id)
      : [...watchList, movie];
    setWatchList(newList);
  }, [watchList]);

  const isInList = watchList.findIndex(({ id: wId }) => wId === movie.id);

  return (
    <MovieView
      favoriteButton={{
        onClick: onAddoWatchList,
        text: isInList ? 'Add ro favorite' : 'Remove from favorite',
      }}
      img={{
        src: movie?.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
          : '/images/placeholder_500_750.jpg',
      }}
      overview={{ overview: movie?.overview }}
      title={{ title: movie?.title }}
      votes={{
        children: (
          <Rating
            defaultValue={movie?.vote_average / 2}
            name="size-large"
            precision={0.1}
            readOnly
            size="large"
          />
        ),
      }}
      wrapper={{
        style: {
          background: `center / cover no-repeat url("${
            movie?.backdrop_path
              ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`
              : '/images/placeholder_1920.jpg'
          }")`,
        },
      }}
    />
  );
};

export default Movie;
