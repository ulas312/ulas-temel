import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  __esModule: true,
  default: { post: jest.fn(() => Promise.resolve({})) },
}));

test('renders hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /Hi, I’m Ulas/i,
    })
  ).toBeInTheDocument();
});
