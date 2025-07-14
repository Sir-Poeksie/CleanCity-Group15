test('should schedule a pickup for future date', () => {
  render(<PickupForm />);
  const futureDate = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  
  fireEvent.change(screen.getByLabelText(/pickup date/i), { target: { value: futureDate } });
  fireEvent.change(screen.getByLabelText(/waste type/i), { target: { value: 'Plastic' } });
  fireEvent.click(screen.getByText(/schedule pickup/i));

  expect(screen.getByText(/pickup scheduled successfully/i)).toBeInTheDocument();
});
