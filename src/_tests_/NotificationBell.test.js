import { render, screen } from '@testing-library/react';
import NotificationBell from '../components/NotificationBell';

test('renders notification bell icon', () => {
  render(<NotificationBell count={3} />);
  expect(screen.getByText('3')).toBeInTheDocument();
});
