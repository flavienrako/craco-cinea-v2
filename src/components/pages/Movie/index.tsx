import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Rating } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { movieById } from 'store';

import MovieView from './Movie.ui';

const Movie: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = useRecoilValue(movieById(parseInt(id, 10)));

  if (!movie) navigate('/');

  return (
    <MovieView
      favoriteButton
      img={{ src: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` }}
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
          background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}")`,
        },
      }}
    />
  );
};

export default Movie;
