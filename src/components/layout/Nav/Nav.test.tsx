import React from 'react';

import { render, screen } from 'setupTests';

import Nav from '.';

test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByAltText('Image description for better SEO');
  expect(linkElement).toBeVisible();
});
