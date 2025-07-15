import { render, screen } from '@testing-library/react';
import Awareness from '../components/Awareness';

test('renders awareness tips and images', () => {
  render(<Awareness />);
  expect(screen.getByRole('heading', { name: /Eco Tip/i })).toBeInTheDocument();
});

