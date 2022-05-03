import React from 'react';

import Skeleton from './Skeleton';

const FallbackLoarders: React.FC = () => (
  <div>
    {[1, 2, 3, 4, 5].map((i) => (
      <Skeleton key={i} />
    ))}
  </div>
);

export default FallbackLoarders;
