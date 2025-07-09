import { render } from '@testing-library/react';
import Register from '../components/Register';

test('renders Register component without crashing', () => {
  render(<Register onRegister={() => {}} />);
});
