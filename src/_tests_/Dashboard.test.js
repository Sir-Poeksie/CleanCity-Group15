import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('renders Dashboard component without crashing', () => {
  render(<Dashboard user={{ name: 'Test User' }} />);
});
