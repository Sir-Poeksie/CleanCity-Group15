import { render } from '@testing-library/react';
import BlogAdmin from '../components/blog/BlogAdmin';

test('renders BlogAdmin component without crashing', () => {
  render(<BlogAdmin user={{ role: 'admin' }} />);
});
