class Leo {
  constructor() {
    this.name = 'Leo'
    this.startDate = new Date('2000-07-24')
    this.endDate = new Date('2000-08-23')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 9,
          minutes: 21,
          seconds: 55
        },
        declination: {
          degrees: 15,
          arcminutes: 25,
          arcseconds: 28.2
        }
      }
    this.upperBoundary =
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
  }
}

export default Leo
