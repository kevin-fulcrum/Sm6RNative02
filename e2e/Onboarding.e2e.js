/* eslint-disable no-undef */
import {device, expect, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  describe('Example', () => {
    it('should not have "See Your Changes" section', async () => {
      await expect(element(by.text('See Your Changes'))).toBeNotVisible();
    });
  });
});
