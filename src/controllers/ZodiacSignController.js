/**
 * Handles the requests for a zodiac sign.
 */
import ZodiacSign from '../models/ZodiacSign.js'

class ZodiacSignController {
  
    constructor() {
      this.zodiacSign = new ZodiacSign()
    }
  
    getZodiacSign(date) {
      return this.zodiacSign.getZodiacSign(date)
    }
}

export default ZodiacSignController
