import { render } from '@testing-library/react';
import Admin from '../components/Admin';

test('renders Admin component without crashing', () => {
  render(<Admin user={{ name: 'Admin', role: 'admin' }} />);
});
