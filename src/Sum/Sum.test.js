/* eslint-disable no-undef */
import Sum from './Sum';

describe('Test', () => {
  it('sum test', async () => {
    const useCase = new Sum();

    await expect(useCase.sum(1, 1)).toEqual(2);
    expect.assertions(1);
  });
});
