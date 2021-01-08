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
    it('should have "Relaxed" text', async () => {
      await expect(element(by.id('onboarding_view'))).toBeVisible();
      await expect(element(by.id('onboarding_view'))).toExist();
      await expect(element(by.id('slide'))).toBeVisible();
      await expect(element(by.id('slide'))).toExist();

      const slideElement = await element(
        by.id('slide_element').withAncestor(by.id('slide')),
      );

      await expect(slideElement).toBeVisible();
      //   await expect(element(by.id('slide-text'))).toBeVisible();
      //   await expect(element(by.id('slide-text'))).toHaveText('Relaxed');
    });
  });
});
