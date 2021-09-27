import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './box-container';

describe('box-container', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<box-container></box-container>',
    });
    expect(root).toEqualHtml(`
      <box-container>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </box-container>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<box-container first="Stencil" last="'Don't call me a framework' JS"></box-container>`,
    });
    expect(root).toEqualHtml(`
      <box-container first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </box-container>
    `);
  });
});
