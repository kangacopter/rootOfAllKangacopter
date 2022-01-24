import { Component, Prop, h } from '@stencil/core'
import { loadFonts } from '../../utils/utils'

@Component({
  tag: 'box-container',
  styleUrl: 'box-container.css',
  shadow: true,
})
export class MyComponent {
  /**
   * Optional box title
   */
  @Prop() boxTitle?: string

  
  componentDidLoad() {
    console.log('i just loaded the box container bruh')
    loadFonts()
    // loadCSS()
  }

  render() {
    return (
      <div>
        <div class="box-container__title">{this.boxTitle}</div>
        <div class="box-container__content">
          <slot />
        </div>
      </div>
    )
  }
}
