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
  }

  setZodiacSign(date) {
    this.#date = new Date(date)
    this.#zodiacSigns.setZodiacSign(this.#date)
  }

  getZodiacSign() {
    return this.#zodiacSigns.getZodiacSign()
  }
}

export default ZodiacSignController
