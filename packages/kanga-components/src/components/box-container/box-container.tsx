import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'box-container',
  styleUrl: 'box-container.css',
  shadow: true,
})
export class MyComponent {
  /**
   * Optional box title
   */
  @Prop() boxTitle?: string;

  render() {
    return (
      <div>
        <div class="box-container__title">{this.boxTitle}</div>
        <div class="box-container__content">
          <slot />
        </div>
      </div>
    );
  }
}
