// __tests__/CommunityFeed.test.js
import { render, screen } from '@testing-library/react';
import CommunityFeed from '../components/community/CommunityFeed';

test('renders Community Feed for logged-in user', () => {
  render(<CommunityFeed user={{ name: 'Jane' }} />);
  expect(screen.getByText(/community feed/i)).toBeInTheDocument();
});
