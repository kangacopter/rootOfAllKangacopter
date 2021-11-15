export const loadFonts = () => {
  const googleAPIURL = 'https://fonts.googleapis.com'
  const googleStaticURL = 'https://fonts.gstatic.com'

  let googleAPIElement = document.querySelector(`link[href="${googleAPIURL}"]`)

  if (!googleAPIElement) {
    googleAPIElement = document.createElement('link')
    googleAPIElement.setAttribute('rel', 'preconnect')
    googleAPIElement.setAttribute('href', googleAPIURL)
    document.head.appendChild(googleAPIElement)
  }

  let googleFontsStatic = document.querySelector(
    `link[href="${googleStaticURL}"]`,
  )

  if (!googleFontsStatic) {
    googleFontsStatic = document.createElement('link')
    googleFontsStatic.setAttribute('rel', 'preconnect')
    googleFontsStatic.setAttribute('href', googleStaticURL)
    googleFontsStatic.setAttribute('crossorigin', '')
    document.head.appendChild(googleFontsStatic)
  }

  const fontCssUrl =
    'https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&family=VT323&display=swap'
  let element = document.querySelector(`link[href="${fontCssUrl}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'stylesheet')
    element.setAttribute('href', fontCssUrl)
    document.head.appendChild(element)
  }
}

// export const loadCSS = () => {}
