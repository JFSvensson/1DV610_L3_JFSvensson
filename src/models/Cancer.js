class Cancer {
  constructor() {
    this.name = 'Cancer'
    this.startDate = new Date('2000-06-22')
    this.endDate = new Date('2000-07-23')
    this.lowerBoundary = 
      {
        rightAscension: {
          hours: 8,
          minutes: 0,
          seconds: 19
        },
        declination: {
          degrees: 20,
          arcminutes: 33,
          arcseconds: 51.1
        }
      }
    this.upperBoundary =
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
  }
}

export default Cancer
