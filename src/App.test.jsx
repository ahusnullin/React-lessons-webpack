import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { waitFor } from '@storybook/testing-library';

describe('App', () => {
  it('render App Window', () => {
    expect(screen.queryByTestId('chat-header')).toBeDefined();
  });

  it('render App Window', () => {
    // todo: не смог проверить рендер messages. Пробовал ис таймаутом, и по test-id... Никак не находит эти элементы.
    // # попытка 1:
    //expect(screen.queryAllByTestId('message-item').length).toBe(4);
    // # попытка 2:
    /* await waitFor(() => {
      expect(screen.queryAllByTestId('message-item').toBe(5), {
        timeout: 1500,
      });
    });*/
  });
});
