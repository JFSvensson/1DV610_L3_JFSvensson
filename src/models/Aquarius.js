class Aquarius {
  constructor() {
    this.name = 'Aquarius'
    this.startDate = new Date('2000-01-21')
    this.endDate = new Date('2000-02-19')
    this.lowerBoundary = 
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
    this.upperBoundary =
      {
        rightAscension: {
          hours: 23,
          minutes: 29,
          seconds: 19
        },
        declination: {
          degrees: -3,
          arcminutes: 18,
          arcseconds: 42.4
        }
      }
  }
}

export default Aquarius
