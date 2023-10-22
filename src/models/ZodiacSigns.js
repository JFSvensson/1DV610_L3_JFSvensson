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
import Ophiuchus from './Ophiuchus.js'
import Sagittarius from './Sagittarius.js'
import Capricorn from './Capricorn.js'
import Aquarius from './Aquarius.js'
import Pisces from './Pisces.js'

class ZodiacSign {
  #zodiacSign

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
      new Ophiuchus(),
      new Sagittarius(),
      new Capricorn(),
      new Aquarius(),
      new Pisces()
    ]
    let today = new Date()
    this.#zodiacSign = this.setZodiacSign(today)
  }

  setZodiacSign(date) {
    // Set year of incoming date to 2000 for comparison with start and end dates of zodiac signs.
    let dateWithEpochYear = new Date(2000, date.getMonth(), date.getDate());
    dateWithEpochYear = dateWithEpochYear.setHours(0, 0, 0, 0);
    dateWithEpochYear = new Date(dateWithEpochYear);
    console.log(dateWithEpochYear);
  
    for (const sign of this.zodiacSigns) {
      // Special case for Capricorn, being on both sides of new year.
      if ((sign.name === 'Capricorn') && ((dateWithEpochYear.getMonth() === 11 && dateWithEpochYear.getDate() > 21) 
          || (dateWithEpochYear.getMonth() === 0 && dateWithEpochYear.getDate() < 21))) {
        this.#zodiacSign = sign
        return
      }
      
      if (dateWithEpochYear >= sign.startDate.setHours(0, 0, 0, 0) 
          && dateWithEpochYear <= sign.endDate.setHours(0, 0, 0, 0)) {
        this.#zodiacSign = sign
        return
      }
    }
  }
  

  getZodiacSign() {
    return this.#zodiacSign
  }
}

export default ZodiacSign
