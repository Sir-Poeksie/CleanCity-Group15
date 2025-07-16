
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';

describe('Register Component', () => {
  test('renders registration form', () => {
    render(<Register />);
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  });

  test('shows validation error if fields are empty', async () => {
    render(<Register />);
    fireEvent.click(screen.getByRole('button', { name: /Register/i }));
    expect(await screen.findByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('submits form successfully with valid inputs', () => {
    render(<Register />);
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), { target: { value: 'Valid Name' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'valid@email.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'ValidPass123' } });
    fireEvent.click(screen.getByRole('button', { name: /Register/i }));
    expect(screen.queryByText(/please fill in all fields/i)).not.toBeInTheDocument();
  });

  test('rejects overly long or invalid input', () => {
    render(<Register />);
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), {
      target: { value: 'Very Long Name That Exceeds The Maximum Character Limit And Should Be Rejected By The System' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'invalid-email' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'short' }
    });
    fireEvent.click(screen.getByRole('button', { name: /Register/i }));
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
