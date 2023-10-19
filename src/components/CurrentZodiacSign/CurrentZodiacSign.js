/**
 * The CurrentZodiacSign web component.
 *
 */

import ZodiacSignController from '../../controllers/ZodiacSignController.js'

const template = document.createElement('template')
template.innerHTML = `
  <div id="current-zodiac-sign">
    <p>The current Zodiac Sign:</p>
    <div id="current-zodiac-sign-name"></div>
  </div>
`

class CurrentZodiacSign extends HTMLElement {
  #currentZodiacSign
  #currentZodiacSignName

  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )

    let zodiacSignController = new ZodiacSignController()

    this.#currentZodiacSign = this.shadowRoot.querySelector('#current-zodiac-sign')
    this.#currentZodiacSignName = this.shadowRoot.querySelector('#current-zodiac-sign-name')
    this.#currentZodiacSignName.innerText = zodiacSignController.getZodiacSign(new Date()).name

  }
}

customElements.define('current-zodiac-sign', CurrentZodiacSign)

export default CurrentZodiacSign