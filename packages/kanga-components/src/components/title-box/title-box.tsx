import { Component, Prop, h } from '@stencil/core'
import { loadFonts } from '../../utils/utils'

@Component({
  tag: 'title-box',
  styleUrl: 'title-box.css',
  shadow: true,
})
export class TitleBox {
  /**
   * Box title
   */
  @Prop() boxTitle: string
  /**
   * Optional box sub title
   */
  @Prop() boxSubTitle?: string

  // TODO: figure out if i still needed
  componentDidLoad() {
    loadFonts()
    // loadCSS()
  }
  // when come back:
  // style this
  // add to thing
  // gen doc
  // tests
  // need some way to put a button...

  render() {
    return (
      <div class="title-box">
        <div class="title-box__header">
          <div>
            <span class="title-box__title">{this.boxTitle}</span>
            <span class="title-box__sub-title">{this.boxSubTitle}</span>
          </div>
          <slot name="title-box__right-title-content" />
        </div>
        <div class="title-box__content">
          <slot name="title-box__content" />
        </div>
      </div>
    )
  }
}
