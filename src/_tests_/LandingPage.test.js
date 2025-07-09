import { render } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

test('renders LandingPage component without crashing', () => {
  render(<LandingPage />);
});
