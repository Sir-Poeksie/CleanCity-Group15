import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogArticle from '../components/blog/BlogArticle';

test('renders fallback when article not found', () => {
  render(
    <BrowserRouter>
      <BlogArticle />
    </BrowserRouter>
  );
  expect(screen.getByText(/Article not found/i)).toBeInTheDocument();
});
