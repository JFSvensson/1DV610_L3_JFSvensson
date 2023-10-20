class Virgo {
  constructor() {
    this.name = 'Virgo'
    this.startDate = new Date('2000-08-24')
    this.endDate = new Date('2000-09-23')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 11,
          minutes: 37,
          seconds: 25
        },
        declination: {
          degrees: 2,
          arcminutes: 26,
          arcseconds: 31.5
        }
      }
    this.upperBoundary =
      {
        rightAscension: {
          hours: 14,
          minutes: 21,
          seconds: 53
        },
        declination: {
          degrees: -14,
          arcminutes: 7,
          arcseconds: 16
        }
      }
  }
}

export default Virgo
