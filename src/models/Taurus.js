class Taurus {
  constructor() {
    this.name = 'Taurus'
    this.startDate = new Date('2000-04-21')
    this.endDate = new Date('2000-05-21')
    this.lowerBoundary = 
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
    this.upperBoundary =
      {
        rightAscension: {
          hours: 6,
          minutes: 0,
          seconds: 36
        },
        declination: {
          degrees: 23,
          arcminutes: 26,
          arcseconds: 19.9
        }
      }
  }
}

export default Taurus
