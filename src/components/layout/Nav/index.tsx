import React from 'react';
import { useNavigate } from 'react-router-dom';

import InventoryIcon from '@mui/icons-material/Inventory';
import { Badge, IconButton } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { watchListState } from 'store/watchlist';

import NavUi from './Nav.ui';

const Nav: React.FC = () => {
  const watchList = useRecoilValue(watchListState);
  const push = useNavigate();

  return (
    <div>
      <NavUi
        watchList={{
          children: (
            <Badge badgeContent={watchList.length} color="secondary">
              <IconButton onClick={() => push('/my-watchlist')}>
                <InventoryIcon />
              </IconButton>
            </Badge>
          ),
        }}
      />
    </div>
  );
};

export default Nav;
