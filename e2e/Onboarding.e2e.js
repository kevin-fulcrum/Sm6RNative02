/* eslint-disable no-undef */

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should not have "See Your Changes" section', async () => {
    await expect(element(by.text('See Your Changes'))).toBeNotVisible();
  });
});
