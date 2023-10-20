class Gemini {
  constructor() {
    this.name = 'Gemini'
    this.startDate = new Date('2000-05-22')
    this.endDate = new Date('2000-06-21')
    this.lowerBoundary = 
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
    this.upperBoundary =
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
  }
}

export default Gemini
