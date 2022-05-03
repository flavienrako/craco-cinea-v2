import React, { useEffect, useState } from 'react';

import { Autocomplete, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Genre } from 'interfaces';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movieGenresQuery, movieQueryParams } from 'store';

import FilterUi from './Filter.ui';

const Filter: React.FC = () => {
  const [params, setParams] = useRecoilState(movieQueryParams);
  const genres = useRecoilValue(movieGenresQuery);

  const [dateParams, setDateParams] = useState<string>();
  const [genre, setGenre] = useState<Genre[]>([]);

  const onChangeYear = (date: any) => {
    setDateParams(date ? date.format() : undefined);
  };
  const onChangeGenre = (_: any, value: Genre[]) => {
    setGenre(value);
  };

  useEffect(() => {
    setParams({
      ...params,
      year: dateParams,
      with_genres: genre.map(({ id }) => id).join(','),
    });
  }, [dateParams, genre]);

  return (
    <FilterUi
      filter={{
        children: (
          <>
            <DatePicker
              clearable
              disableFuture
              label="Filter by year"
              onChange={onChangeYear}
              renderInput={(props) => (
                <TextField
                  variant="filled"
                  {...props}
                  helperText={null}
                  sx={{ width: 140, marginRight: 1 }}
                />
              )}
              value={dateParams}
              views={['year']}
            />

            <Autocomplete
              disablePortal
              getOptionLabel={(option) => option.name}
              limitTags={3}
              multiple
              onChange={onChangeGenre}
              options={genres}
              renderInput={(textFieldProps) => (
                <TextField {...textFieldProps} label="Movie" variant="filled" />
              )}
              sx={{ maxWidth: 400, minWidth: 160 }}
              value={genre}
            />
          </>
        ),
      }}
    />
  );
};

export default Filter;
