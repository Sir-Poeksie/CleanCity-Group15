
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../../Register';

describe('Register Component', () => {
  test('should allow user to register with email, password, and name', () => {
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'Passw0rd!' } });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(screen.getByText(/registration successful/i)).toBeInTheDocument();
  });
});
