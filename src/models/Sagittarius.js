class Sagittarius {
  constructor() {
    this.name = 'Sagittarius'
    this.startDate = new Date('2000-11-23')
    this.endDate = new Date('2000-12-21')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 17,
          minutes: 43,
          seconds: 35.5
        },
        declination: {
          degrees: -23,
          arcminutes: 23,
          arcseconds: 1
        }
      }
    this.upperBoundary =
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
  }
}

export default Sagittarius
