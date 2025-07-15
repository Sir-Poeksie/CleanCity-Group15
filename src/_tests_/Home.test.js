import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders home welcome banner', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to CleanCity/i)).toBeInTheDocument();
});
