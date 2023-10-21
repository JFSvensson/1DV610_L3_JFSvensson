/**
 * Handles the requests for a zodiac sign.
 */
import ZodiacSigns from '../models/ZodiacSigns.js'

class ZodiacSignController {
  #date
  #zodiacSigns
  #currentZodiacSign

  constructor() {
    this.#zodiacSigns = new ZodiacSigns()
    this.#currentZodiacSign = this.#zodiacSigns.getZodiacSign()

    const dateInput = document.querySelector('date-form')
    dateInput.addEventListener('date-submitted', (event) => {
      this.#date = event.detail
    })
  }

  setZodiacSign() {
    this.#zodiacSigns.setZodiacSign(this.#date)
  }

  getZodiacSign() {
    return this.#zodiacSigns.getZodiacSign()
  }
}

export default ZodiacSignController
