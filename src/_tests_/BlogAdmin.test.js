import { render, screen } from '@testing-library/react';
import BlogAdmin from '../components/blog/BlogAdmin';

test('renders blog admin heading', () => {
  render(<BlogAdmin />);
  expect(screen.getByText(/Blog Admin Panel/i)).toBeInTheDocument();
});
