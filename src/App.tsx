import './assets/styles.css';
import { Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { RouteProvider } from '@billers/library';
import ErrorBoundary from 'components/commons/ErrorBoundary';
import WatchList from 'components/pages/WatchList';
import { RecoilRoot } from 'recoil';

import Nav from './components/layout/Nav';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';

const App: React.FC = () => {
  const push = useNavigate();
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <RouteProvider push={push}>
          <Nav />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={
                <Suspense fallback="">
                  <Movie />
                </Suspense>
              }
              path="/movie/:id"
            />
            <Route element={<WatchList />} path="/my-watchlist" />
          </Routes>
        </RouteProvider>
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export default App;
