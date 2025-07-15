import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';

describe('Register Component', () => {
  test('renders registration form', () => {
    render(<Register />);
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  test('shows validation error if fields are empty', () => {
    render(<Register />);
    fireEvent.click(screen.getByRole('button', { name: /Register/i }));
    expect(screen.getByText(/fill in all fields/i)).toBeInTheDocument();
  });
});
