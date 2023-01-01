import { newSpecPage } from '@stencil/core/testing';
import { TitleBox } from '../title-box';

describe('title-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TitleBox],
      html: `<title-box></title-box>`,
    });
    expect(page.root).toEqualHtml(`
      <title-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </title-box>
    `);
  });
});
