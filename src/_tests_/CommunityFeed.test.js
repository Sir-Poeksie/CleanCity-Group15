import { render } from '@testing-library/react';
import CommunityFeed from '../components/community/CommunityFeed';

test('renders CommunityFeed component without crashing', () => {
  render(<CommunityFeed user={{ name: 'Community Member' }} />);
});
