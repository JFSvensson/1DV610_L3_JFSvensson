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
    <br>
    <p>and the moon is in</p>
    <div id="moon-retrieved-zodiac-sign-name"></div>
    <br>
  </div>
`

class RetrievedZodiacSign extends HTMLElement {
  #retrievedZodiacSign
  #retrievedZodiacSignName
  #actualRetrievedZodiacSignName
  #moonRetrievedZodiacSignName
  #date

  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )
  }

  setZodiacSign(date) {
    let zodiacSignController = new ZodiacSignController()
    zodiacSignController.setZodiacSign(date)
    this.#retrievedZodiacSign = this.shadowRoot.querySelector('#retrieved-zodiac-sign')
    this.#retrievedZodiacSignName = this.shadowRoot.querySelector('#retrieved-zodiac-sign-name')
    this.#retrievedZodiacSignName.innerText = zodiacSignController.getZodiacSign().name
  }

  getZodiacSign() {
    return this.#retrievedZodiacSign
  }

  setActualZodiacSign(date) {
    let celestialFinderController = new CelestialFinderController()
    celestialFinderController.setZodiacSignWithSun(date)
    this.#actualRetrievedZodiacSignName = this.shadowRoot.querySelector('#actual-retrieved-zodiac-sign-name')
    this.#actualRetrievedZodiacSignName.innerText = celestialFinderController.getZodiacSignWithSun().name
  }

  getActualZodiacSign() {
    return this.#actualRetrievedZodiacSignName
  }

  setMoonZodiacSign(date) {
    let celestialFinderController = new CelestialFinderController()
    celestialFinderController.setZodiacSignWithMoon(date)
    this.#moonRetrievedZodiacSignName = this.shadowRoot.querySelector('#moon-retrieved-zodiac-sign-name')
    this.#moonRetrievedZodiacSignName.innerText = celestialFinderController.getZodiacSignWithMoon().name
  }

  getMoonZodiacSign() {
    return this.#moonRetrievedZodiacSignName
  }
}

customElements.define('retrieved-zodiac-sign', RetrievedZodiacSign)

export default RetrievedZodiacSign
