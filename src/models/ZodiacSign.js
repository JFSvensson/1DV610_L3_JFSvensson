/**
 * Provides the right zodiac sign for a given date.
 */

import Aries from './Aries.js'
import Taurus from './Taurus.js'
import Gemini from './Gemini.js'
import Cancer from './Cancer.js'
import Leo from './Leo.js'
import Virgo from './Virgo.js'
import Libra from './Libra.js'
import Scorpio from './Scorpio.js'
import Sagittarius from './Sagittarius.js'
import Capricorn from './Capricorn.js'
import Aquarius from './Aquarius.js'
import Pisces from './Pisces.js'

class ZodiacSign {
  
  constructor() {
    this.zodiacSigns = [
      new Aries(),
      new Taurus(),
      new Gemini(),
      new Cancer(),
      new Leo(),
      new Virgo(),
      new Libra(),
      new Scorpio(),
      new Sagittarius(),
      new Capricorn(),
      new Aquarius(),
      new Pisces()
    ]
  }

  getZodiacSign(date) {
    for (const sign of this.zodiacSigns) {
      if (date >= sign.startDate && date <= sign.endDate) {
        return sign
      }
    }
    return null;
  }
}

export default ZodiacSign
