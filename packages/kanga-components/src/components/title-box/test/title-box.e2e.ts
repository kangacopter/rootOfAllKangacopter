import { newE2EPage } from '@stencil/core/testing';

describe('title-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<title-box></title-box>');

    const element = await page.find('title-box');
    expect(element).toHaveClass('hydrated');
  });
});
