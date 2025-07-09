// __tests__/Awareness.test.js
import { render, screen } from '@testing-library/react';
import Awareness from '../components/Awareness';

test('renders awareness content', () => {
  render(<Awareness />);
  expect(screen.getByRole('heading', { name: /awareness/i })).toBeInTheDocument();
  expect(screen.getByText(/eco tips/i)).toBeInTheDocument();
});
