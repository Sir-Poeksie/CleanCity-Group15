import { render } from '@testing-library/react';
import Login from '../components/Login';

test('renders Login component without crashing', () => {
  render(<Login onLogin={() => {}} />);
});
