import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('renders dashboard title', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Dashboard Analytics/i)).toBeInTheDocument();
});
