class Pisces {
  constructor() {
    this.name = 'Pisces'
    this.startDate = new Date('2000-02-20')
    this.endDate = new Date('2000-03-20')
    this.lowerBoundary = 
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
    this.upperBoundary =
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
  }
}

export default Pisces
