import { render, screen } from '@testing-library/react';
import PickupForm from '../src/components/PickupForm';

describe('PickupForm', () => {
  it('renders pickup form inputs', () => {
    render(<PickupForm />);
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  });
});

