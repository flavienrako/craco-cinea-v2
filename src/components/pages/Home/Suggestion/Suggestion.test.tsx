import React from 'react';

import { render } from 'setupTests';

import Suggestion from './Suggestion.ui';

const suggestion = {
  id: 634649,
  date: '15 December 2021',
  title: 'My film',
};

it('should render suggestion title', () => {
  const { getByRole } = render(
    <Suggestion title={{ title: suggestion?.title }} />
  );
  const element = getByRole('heading', { name: suggestion.title });
  expect(element).toBeInTheDocument();
});

it('should render suggestion date released', () => {
  const { getByRole } = render(<Suggestion date={{ date: suggestion.date }} />);
  const element = getByRole('heading', {
    name: `Release date : ${suggestion.date}`,
  });
  expect(element).toBeInTheDocument();
});
