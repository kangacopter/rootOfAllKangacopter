import { newSpecPage } from '@stencil/core/testing'
import { MyComponent } from '../box-container'

describe('box-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<box-container></box-container>',
    })
    expect(page.root).toEqualHtml(`
      <box-container>
        <mock:shadow-root>
        <div>
      <div class="box-container__title"></div>
      <div class="box-container__content">
      <slot></slot>
        </div>
        </div>
        </mock:shadow-root>
      </box-container>
    `)
  })

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<box-container box-title="box title">box innards</box-container>`,
    })
    expect(root).toEqualHtml(`
      <box-container box-title="box title">
        <mock:shadow-root>
        <div>
          <div class="box-container__title">box title</div>
          <div class="box-container__content"><slot></slot></div>
          </div>
        </mock:shadow-root>
        box innards
      </box-container>
    `)
  })
})
