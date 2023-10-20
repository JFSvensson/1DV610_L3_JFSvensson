class Ophiuchus {
  constructor() {
    this.name = 'Ophiuchus'
    this.lowerBoundary = 
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
    this.upperBoundary =
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
  }
}

export default Ophiuchus
