import { describe, it, expect, beforeEach } from 'vitest';
import { setupCounter } from '../../src/counter';

describe('setupCounter', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = document.createElement('button');
    document.body.appendChild(button);
  });

  it('should initialize the counter to 0', () => {
    setupCounter(button);
    expect(button.innerHTML).toBe('count is 0');
  });

  it('should increment the counter on click', () => {
    setupCounter(button);

    button.click();
    expect(button.innerHTML).toBe('count is 1');
  });

  it('should increment the counter twice on two clicks', () => {
    setupCounter(button);

    button.click();
    button.click();
    expect(button.innerHTML).toBe('count is 2');
  });
});
