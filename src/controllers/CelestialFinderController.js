/**
 * Handles the requests from user for a certain date
 */
import CelestialFinder from '../../node_modules/celestialfinder/index.js'
import ZodiacSign from '../models/ZodiacSign.js'

class CelestialFinderController {
  constructor() {
    this.zodiacSign = new ZodiacSign()
  }

  getZodiacSignWithSun(date) {
    this.celestialFinder = new CelestialFinder(date, 0)
    let solarPosition = this.celestialFinder.positionOfTheSun()
    let solarPositionRightAscension = 
      solarPosition.rightAscension.hours 
      + solarPosition.rightAscension.minutes / 60 
      + solarPosition.rightAscension.seconds / 3600

    for (const sign of this.zodiacSign.zodiacSigns) {
      let signLowerBoundaryRightAscension = 
        sign.lowerBoundary.rightAscension.hours 
        + sign.lowerBoundary.rightAscension.minutes / 60 
        + sign.lowerBoundary.rightAscension.seconds / 3600
      let signUpperBoundaryRightAscension = 
        sign.upperBoundary.rightAscension.hours 
        + sign.upperBoundary.rightAscension.minutes / 60 
        + sign.upperBoundary.rightAscension.seconds / 3600
      if (solarPositionRightAscension >= signLowerBoundaryRightAscension 
          && solarPositionRightAscension <= signUpperBoundaryRightAscension) {
        return sign
      }
    }
    return null
  }
}

export default CelestialFinderController
