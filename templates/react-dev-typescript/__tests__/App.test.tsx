import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App';

test('App component render', async () => {
  render(<App />);

  expect(screen.getByRole('button')).toHaveTextContent('count');
});
