class Aries {
  constructor() {
    this.name = 'Aries'
    this.startDate = new Date('2000-03-21')
    this.endDate = new Date('2000-04-20')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 1,
          minutes: 46,
          seconds: 38
        },
        declination: {
          degrees: 11,
          arcminutes: 0,
          arcseconds: 28.9
        }
      }
    this.upperBoundary =
      {
        rightAscension: {
          hours: 3,
          minutes: 24,
          seconds: 7
        },
        declination: {
          degrees: 18,
          arcminutes: 37,
          arcseconds: 39
        }
      }
  }
}

export default Aries
