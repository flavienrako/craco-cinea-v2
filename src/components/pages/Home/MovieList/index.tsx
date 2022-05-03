import React from 'react';

import dayjs from 'dayjs';
// import useMovies from 'hooks/movies';
import { useRecoilValue } from 'recoil';
import { movieQuery } from 'store';

import MovieCard from './MovieCard.ui';

const MovieList: React.FC = () => {
  // const { fetchMore } = useMovies();

  const movies = useRecoilValue(movieQuery);

  return (
    <>
      {movies.map(({ id, poster_path, title, release_date }) => {
        const date = dayjs().isSame(release_date, 'year')
          ? dayjs(release_date).fromNow()
          : dayjs(release_date).format('DD MMMM YYYY');

        return (
          <MovieCard
            action
            date={{ date }}
            img={{
              src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
              href: `movie/${id}`,
            }}
            key={id}
            title={{ title }}
          />
        );
      })}
    </>
  );
};

export default MovieList;
