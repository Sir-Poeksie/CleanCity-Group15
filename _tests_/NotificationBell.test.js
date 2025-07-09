// __tests__/NotificationBell.test.js
import { render, screen } from '@testing-library/react';
import NotificationBell from '../components/NotificationBell';

test('renders NotificationBell', () => {
  render(<NotificationBell />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
