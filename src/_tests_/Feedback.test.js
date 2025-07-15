import { render, screen, fireEvent } from '@testing-library/react';
import Feedback from '../components/Feedback';

describe('Feedback Page', () => {
  it('renders feedback form title', () => {
    render(<Feedback />);
    expect(screen.getByText(/Report Missed Pickup \/ Feedback/i)).toBeInTheDocument();
  });

  it('shows error if form submitted empty', () => {
    render(<Feedback />);
    fireEvent.click(screen.getByText(/Submit/i));
    const alert = screen.queryByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/request id is required/i);
  });
});
