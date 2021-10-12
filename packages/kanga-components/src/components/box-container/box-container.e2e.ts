import { newE2EPage } from '@stencil/core/testing'

describe('box-container', () => {
  it('renders', async () => {
    const page = await newE2EPage()

    await page.setContent('<box-container></box-container>')
    const element = await page.find('box-container')
    expect(element).toHaveClass('hydrated')
  })

  it('renders changes to the box title and content', async () => {
    const page = await newE2EPage()

    await page.setContent('<box-container>some contents</box-container>')
    const component = await page.find('box-container')
    expect(component.textContent).toEqual(`some contents`)

    // Watch out for snake case vs camel case
    component.setProperty('boxTitle', 'the element of supper rise')
    await page.waitForChanges()
    const titleContainer = await page.find(
      'box-container >>> .box-container__title',
    )
    expect(titleContainer.textContent).toEqual(`the element of supper rise`)
  })
})
