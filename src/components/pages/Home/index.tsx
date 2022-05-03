import { Suspense } from 'react';

import FallbackLoarders from 'components/commons/FallbackLoarders';
import Filter from 'components/commons/Filter';
import Pagination from 'components/commons/Pagination';

import HomeUi from './Home.ui';
import MovieList from './MovieList';
import Suggestion from './Suggestion';
import SuggestionList from './SuggestionList';

const Home = () => (
  <HomeUi
    Filter={{
      children: (
        <Suspense fallback="">
          <Filter />
        </Suspense>
      ),
    }}
    MovieList={{
      children: (
        <Suspense fallback={<FallbackLoarders />}>
          <MovieList />
        </Suspense>
      ),
    }}
    Pagination={{
      children: (
        <Suspense fallback={<div />}>
          <Pagination />
        </Suspense>
      ),
    }}
    Suggestion={{
      children: (
        <Suspense fallback={<div />}>
          <Suggestion />
        </Suspense>
      ),
    }}
    SuggestionList={{
      children: (
        <Suspense fallback={<FallbackLoarders />}>
          <SuggestionList />
        </Suspense>
      ),
    }}
  />
);

export default Home;
