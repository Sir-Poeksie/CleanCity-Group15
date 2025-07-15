import { render, screen } from '@testing-library/react';
import BlogHome from '../components/blog/BlogHome';

test('renders blog home welcome text', () => {
  render(<BlogHome />);
  expect(screen.getByText(/All Articles/i)).toBeInTheDocument();
});
