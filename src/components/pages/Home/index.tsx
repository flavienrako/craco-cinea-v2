import { Suspense } from 'react';

import FallbackLoarders from 'components/commons/FallbackLoarders';

import Home from './Home.ui';
import MovieList from './MovieList';
import Suggestion from './Suggestion';
import SuggestionList from './SuggestionList';

const Index = () => (
  <Home
    MovieList={{
      children: (
        <Suspense fallback={<FallbackLoarders />}>
          <MovieList />
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

export default Index;
