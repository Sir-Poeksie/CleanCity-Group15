import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

test('renders landing page heading', () => {
  render(<LandingPage />);
  expect(screen.getByText(/Get Started with CleanCity/i)).toBeInTheDocument();
});
