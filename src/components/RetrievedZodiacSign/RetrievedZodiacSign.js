/**
 * The RetrievedZodiacSign web component.
 */

import ZodiacSignController from '../../controllers/ZodiacSignController.js'
import CelestialFinderController from '../../controllers/CelestialFinderController.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #retrieved-zodiac-sign h2 {
      text-align: center;
      font-size: 2em;
      place-items: center;
    }

    #zodiac-sign {
      display: inline-grid;
      place-items: center;
      padding: 10px;
    }

    #zodiac-sign img {
      height: 200px;
    }
  </style>

  <div id="retrieved-zodiac-sign">
    <h2 id="title-date">The Zodiac Signs for </h2>
    <div id="zodiac-sign">
      <p>Astrological</p>
      <img id="astrological-zodiac-sign-image" src="" alt="">
      <div id="astrological-zodiac-sign-name"></div>
    </div>
    <div id="zodiac-sign">
      <p>Astronomical</p>
      <img id="astronomical-zodiac-sign-image" src="" alt="">
      <div id="astronomical-zodiac-sign-name"></div>
    </div>
    <div id="zodiac-sign">
      <p>The Moon</p>
      <img id="moon-zodiac-sign-image" src="" alt="">
      <div id="moon-zodiac-sign-name"></div>
    </div>
  </div>
`

class RetrievedZodiacSign extends HTMLElement {
  #titleDate

  #astrologicalZodiacSignName
  #astrologicalZodiacSignImage

  #astronomicalZodiacSignName
  #astronomicalZodiacSignImage

  #moonZodiacSignName
  #moonZodiacSignImage

  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )
  }

  setZodiacSign(date) {
    let displayDate = new Date(date)
    this.#titleDate = this.shadowRoot.querySelector('#title-date')
    this.#titleDate.innerText = 'The Zodiac Signs for ' 
        + displayDate.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    let zodiacSignController = new ZodiacSignController()
    zodiacSignController.setZodiacSign(date)
    this.#astrologicalZodiacSignName = this.shadowRoot.querySelector('#astrological-zodiac-sign-name')
    this.#astrologicalZodiacSignName.innerText = zodiacSignController.getZodiacSign().name
    this.#astrologicalZodiacSignImage = this.shadowRoot.querySelector('#astrological-zodiac-sign-image')
    this.#astrologicalZodiacSignImage.src = './img/' + zodiacSignController.getZodiacSign().name + '400.png'
  }

  getZodiacSign() {
    return this.#astrologicalZodiacSignName
  }

  setActualZodiacSign(date) {
    let celestialFinderController = new CelestialFinderController()
    celestialFinderController.setZodiacSignWithSun(date)
    this.#astronomicalZodiacSignName = this.shadowRoot.querySelector('#astronomical-zodiac-sign-name')
    this.#astronomicalZodiacSignName.innerText = celestialFinderController.getZodiacSignWithSun().name
    this.#astronomicalZodiacSignImage = this.shadowRoot.querySelector('#astronomical-zodiac-sign-image')
    this.#astronomicalZodiacSignImage.src = './img/' + celestialFinderController.getZodiacSignWithSun().name + '400.png'
  }

  getActualZodiacSign() {
    return this.#astronomicalZodiacSignName
  }

  setMoonZodiacSign(date) {
    let celestialFinderController = new CelestialFinderController()
    celestialFinderController.setZodiacSignWithMoon(date)
    this.#moonZodiacSignName = this.shadowRoot.querySelector('#moon-zodiac-sign-name')
    this.#moonZodiacSignName.innerText = celestialFinderController.getZodiacSignWithMoon().name
    this.#moonZodiacSignImage = this.shadowRoot.querySelector('#moon-zodiac-sign-image')
    this.#moonZodiacSignImage.src = './img/' + celestialFinderController.getZodiacSignWithMoon().name + '400.png'
  }

  getMoonZodiacSign() {
    return this.#moonZodiacSignName
  }
}

customElements.define('retrieved-zodiac-sign', RetrievedZodiacSign)

export default RetrievedZodiacSign
