import { render, screen } from '@testing-library/react';
import CommunityFeed from '../components/community/CommunityFeed';

test('renders community feed title', () => {
  render(<CommunityFeed />);
  expect(screen.getByText(/Community Feed/i)).toBeInTheDocument();
});
