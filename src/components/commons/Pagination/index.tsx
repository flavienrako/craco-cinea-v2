import React from 'react';

import MuiPagination from '@mui/material/Pagination';
import { useSetRecoilState } from 'recoil';
import { pageState } from 'store';

const Pagination: React.FC = () => {
  const setPage = useSetRecoilState(pageState);

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  return (
    <MuiPagination
      color="primary"
      count={100}
      onChange={handleChange}
      variant="outlined"
    />
  );
};

export default Pagination;
