import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders Home component without crashing', () => {
  render(<Home user={{ name: 'Test User' }} />);
});
