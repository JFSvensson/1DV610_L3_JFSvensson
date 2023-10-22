/**
 * The CurrentZodiacSign web component.
 *
 */

import CelestialFinderController from '../../controllers/CelestialFinderController.js'
import ZodiacSigns from '../../models/ZodiacSigns.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #current-zodiac-sign h2{
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
  
  <div id="current-zodiac-sign">
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

class CurrentZodiacSign extends HTMLElement {
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

    let zodiacSigns = new ZodiacSigns()
    let today = new Date()
    zodiacSigns.setZodiacSign(today)
    this.#titleDate = this.shadowRoot.querySelector('#title-date')
    this.#titleDate.innerText = 'The Zodiac Signs for ' 
        + today.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    this.#astrologicalZodiacSignName = this.shadowRoot.querySelector('#astrological-zodiac-sign-name')
    this.#astrologicalZodiacSignName.innerText = zodiacSigns.getZodiacSign().name
    this.#astrologicalZodiacSignImage = this.shadowRoot.querySelector('#astrological-zodiac-sign-image')
    this.#astrologicalZodiacSignImage.src = './img/' + zodiacSigns.getZodiacSign().name + '400.png'

    let celestialFinderController = new CelestialFinderController()
    let dateCelestialFinderFormat = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    celestialFinderController.setZodiacSignWithSun(dateCelestialFinderFormat)
    this.#astronomicalZodiacSignName = this.shadowRoot.querySelector('#astronomical-zodiac-sign-name')
    this.#astronomicalZodiacSignName.innerText = celestialFinderController.getZodiacSignWithSun().name
    this.#astronomicalZodiacSignImage = this.shadowRoot.querySelector('#astronomical-zodiac-sign-image')
    this.#astronomicalZodiacSignImage.src = './img/' + celestialFinderController.getZodiacSignWithSun().name + '400.png'

    celestialFinderController.setZodiacSignWithMoon(dateCelestialFinderFormat)
    this.#moonZodiacSignName = this.shadowRoot.querySelector('#moon-zodiac-sign-name')
    this.#moonZodiacSignName.innerText = celestialFinderController.getZodiacSignWithMoon().name
    this.#moonZodiacSignImage = this.shadowRoot.querySelector('#moon-zodiac-sign-image')
    this.#moonZodiacSignImage.src = './img/' + celestialFinderController.getZodiacSignWithMoon().name + '400.png'
  }
}

customElements.define('current-zodiac-sign', CurrentZodiacSign)

export default CurrentZodiacSign
