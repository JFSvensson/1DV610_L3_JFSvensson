/**
 * The RetrievedZodiacSign web component.
 */

import ZodiacSignController from '../../controllers/ZodiacSignController.js'
import CelestialFinderController from '../../controllers/CelestialFinderController.js'

const template = document.createElement('template')
template.innerHTML = `
  <div id="retrieved-zodiac-sign">
    <p>The Zodiac Sign for the given date</p>
    <p>is traditionally</p>
    <div id="retrieved-zodiac-sign-name"></div>
    <br>
    <p>But the sun is actually in</p>
    <div id="actual-retrieved-zodiac-sign-name"></div>
  </div>
`

class RetrievedZodiacSign extends HTMLElement {
  #retrievedZodiacSign
  #retrievedZodiacSignName
  #actualRetrievedZodiacSignName
  #date

  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )
  }

  set zodiacSign(date) {
    let zodiacSignController = new ZodiacSignController()

    this.#retrievedZodiacSign = this.shadowRoot.querySelector('#retrieved-zodiac-sign')
    this.#retrievedZodiacSignName = this.shadowRoot.querySelector('#retrieved-zodiac-sign-name')
    this.#retrievedZodiacSignName.innerText = zodiacSignController.getZodiacSign(date).name
    console.log(this.#retrievedZodiacSignName.innerText)
  }

  get zodiacSign() {
    return this.#retrievedZodiacSign
  }

  set actualZodiacSign(date) {
    let celestialFinderController = new CelestialFinderController()

    this.#actualRetrievedZodiacSignName = this.shadowRoot.querySelector('#actual-zodiac-sign-name')
    this.#actualRetrievedZodiacSignName.innerText = celestialFinderController.getZodiacSignWithSun(date).name
    console.log(this.#actualRetrievedZodiacSignName.innerText)
  }

  get actualZodiacSign() {
    return this.#actualRetrievedZodiacSignName
  }
}

customElements.define('retrieved-zodiac-sign', RetrievedZodiacSign)

export default RetrievedZodiacSign
