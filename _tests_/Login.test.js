// __tests__/Login.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import userEvent from '@testing-library/user-event';

describe('Login Form', () => {
  test('should render login form with email and password', () => {
    render(<Login onLogin={jest.fn()} />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test('should call onLogin on successful form submission', async () => {
    const onLogin = jest.fn();
    render(<Login onLogin={onLogin} />);
    
    await userEvent.type(screen.getByPlaceholderText(/email/i), 'admin@cc.com');
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'admin123');
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(onLogin).toHaveBeenCalled();
  });
});
