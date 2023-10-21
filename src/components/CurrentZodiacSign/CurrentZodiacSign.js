/**
 * The CurrentZodiacSign web component.
 *
 */

import ZodiacSignController from '../../controllers/ZodiacSignController.js'
import CelestialFinderController from '../../controllers/CelestialFinderController.js'

const template = document.createElement('template')
template.innerHTML = `
  <div id="current-zodiac-sign">
    <p>The current Zodiac Sign</p>
    <p>is traditionally</p>
    <div id="current-zodiac-sign-name"></div>
    <br>
    <p>But the sun is actually in</p>
    <div id="actual-zodiac-sign-name"></div>
  </div>
`

class CurrentZodiacSign extends HTMLElement {
  #currentZodiacSign
  #currentZodiacSignName
  #actualZodiacSignName

  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )

    let zodiacSignController = new ZodiacSignController()

    this.#currentZodiacSign = this.shadowRoot.querySelector('#current-zodiac-sign')
    this.#currentZodiacSignName = this.shadowRoot.querySelector('#current-zodiac-sign-name')
    this.#currentZodiacSignName.innerText = zodiacSignController.getZodiacSign(new Date()).name

    let celestialFinderController = new CelestialFinderController()

    this.#actualZodiacSignName = this.shadowRoot.querySelector('#actual-zodiac-sign-name')
    this.#actualZodiacSignName.innerText = celestialFinderController.getZodiacSignWithSun('2023-10-21').name

  }
}

customElements.define('current-zodiac-sign', CurrentZodiacSign)

export default CurrentZodiacSign
