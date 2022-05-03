import React from 'react';

import { Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { watchListState } from 'store/watchlist';

import Item from './Item.ui';

const Items: React.FC = () => {
  const [watchList, setWatchList] = useRecoilState(watchListState);

  const onRemoveMovie = (id: number) => {
    const newList = watchList.filter((movie) => movie.id !== id);

    setWatchList(newList);
  };

  return (
    <>
      {watchList.length ? (
        watchList.map(({ id, title }) => (
          <Item
            key={id}
            removeButton={{ onClick: () => onRemoveMovie(id) }}
            title={{ title }}
          />
        ))
      ) : (
        <Typography variant="h1">Empty list</Typography>
      )}
    </>
  );
};

export default Items;
