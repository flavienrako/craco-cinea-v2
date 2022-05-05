/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Typography } from '@mui/material';
import { Movie } from 'interfaces';
import { useRecoilState } from 'recoil';
import { watchListState } from 'store/watchlist';

import Item from './Item.ui';

type Reorder = <T = unknown>(
  list: T[],
  startIndex: number,
  endIndex: number
) => T[];
const reorder: Reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Items: React.FC = () => {
  const [watchList, setWatchList] = useRecoilState(watchListState);

  const onRemoveMovie = (id: number) => {
    const newList = watchList.filter((movie) => movie.id !== id);

    setWatchList(newList);
  };

  const dragItems = useMemo(
    () =>
      watchList.map(({ id, title }) => ({
        id: `item-${id}`,
        content: (
          <Item
            removeButton={{ onClick: () => onRemoveMovie(id) }}
            title={{ title }}
          />
        ),
      })),
    [watchList]
  );

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = reorder<Movie>(
      watchList,
      result.source.index,
      result.destination.index
    );
    setWatchList(newItems);
  };

  return (
    <>
      {watchList.length ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided: any) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {dragItems.map((item, index: number) => (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
                    {(itemProvided) => (
                      <div
                        ref={itemProvided.innerRef}
                        {...itemProvided.draggableProps}
                        {...itemProvided.dragHandleProps}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <Typography variant="h1">Empty list</Typography>
      )}
    </>
  );
};

export default Items;
