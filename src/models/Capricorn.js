class Capricorn {
  constructor() {
    this.name = 'Capricorn'
    this.startDate = new Date('2000-12-22')
    this.endDate = new Date('2001-01-20')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 20,
          minutes: 7,
          seconds: 20
        },
        declination: {
          degrees: -20,
          arcminutes: 12,
          arcseconds: 47.7
        }
      }
    this.upperBoundary =
      {
        rightAscension: {
          hours: 21,
          minutes: 58,
          seconds: 43.5
        },
        declination: {
          degrees: -12,
          arcminutes: 20,
          arcseconds: 42.7
        }
      }
  }
}

export default Capricorn
