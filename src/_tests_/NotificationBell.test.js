import { render } from '@testing-library/react';
import NotificationBell from '../components/NotificationBell';

test('renders NotificationBell component without crashing', () => {
  render(<NotificationBell />);
});
