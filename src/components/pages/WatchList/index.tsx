import React from 'react';

import Items from './Items';
import WatchListUi from './WatchList.ui';

const WatchList: React.FC = () => (
  <WatchListUi
    list={{ children: <Items /> }}
    wrapper={{
      style: {
        background: `center / cover no-repeat url("/images/placeholder_1920.jpg")`,
      },
    }}
  />
);

export default WatchList;
