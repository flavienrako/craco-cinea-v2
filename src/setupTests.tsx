import React, { FC, ReactElement } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import '@testing-library/jest-dom';
import { RouteProvider } from '@billers/library';
import { ThemeProvider } from '@mui/material/styles';
import { render, RenderOptions } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { RecoilRoot } from 'recoil';

import theme from './assets/theme';

const AppWrapper: FC = ({ children }) => {
  const push = useNavigate();
  return (
    <RouteProvider push={push}>
      <RecoilRoot>{children}</RecoilRoot>
    </RouteProvider>
  );
};

const AllTheProviders: FC = ({ children }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  </BrowserRouter>
);

// Custom render
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (
  ui: ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => ({
  ...render(ui, {
    wrapper: AllTheProviders,
  }),
  history,
});

export * from '@testing-library/react';
export { customRender as render, renderWithRouter };
