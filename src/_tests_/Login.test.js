test('login with valid credentials stores session', () => {
  render(<Login />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'Passw0rd!' } });

  fireEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(localStorage.getItem('userSession')).not.toBeNull();
});
