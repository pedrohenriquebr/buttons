import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders the button', () => {
  render(<Button label="Test" />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
