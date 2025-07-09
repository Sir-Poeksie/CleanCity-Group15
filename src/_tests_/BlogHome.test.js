import { render } from '@testing-library/react';
import BlogHome from '../components/blog/BlogHome';

test('renders BlogHome component without crashing', () => {
  render(<BlogHome user={{ name: 'Test User' }} />);
});
