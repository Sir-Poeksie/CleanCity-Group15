import { render } from '@testing-library/react';
import Feedback from '../components/Feedback';

test('renders Feedback component without crashing', () => {
  render(<Feedback user={{ name: 'Test User' }} />);
});
