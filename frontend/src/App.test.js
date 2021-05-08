import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  const navBar = screen.getByTestId("navbar");
  expect(navBar).toBeInTheDocument();
});
