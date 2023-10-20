class Libra {
  constructor() {
    this.name = 'Libra'
    this.startDate = new Date('2000-09-24')
    this.endDate = new Date('2000-10-23')
    this.lowerBoundary = 
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
    this.upperBoundary =
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
  }
}

export default Libra
