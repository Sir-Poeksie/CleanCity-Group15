import { render } from '@testing-library/react';
import BlogArticle from '../components/blog/BlogArticle';

test('renders BlogArticle component without crashing', () => {
  render(<BlogArticle user={{ name: 'Test User' }} />);
});
