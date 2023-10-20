class Scorpio {
  constructor() {
    this.name = 'Scorpio'
    this.startDate = new Date('2000-10-24')
    this.endDate = new Date('2000-11-22')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 15,
          minutes: 55,
          seconds: 40
        },
        declination: {
          degrees: -20,
          arcminutes: 22,
          arcseconds: 12
        }
      }
    this.upperBoundary =
      {
        rightAscension: {
          hours: 16,
          minutes: 23,
          seconds: 23.5
        },
        declination: {
          degrees: -21,
          arcminutes: 35,
          arcseconds: 1.5
        }
      }
  }
}

export default Scorpio
