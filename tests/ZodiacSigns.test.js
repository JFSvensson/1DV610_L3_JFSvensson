import ZodiacSigns from '../src/models/ZodiacSigns.js'

describe('ZodiacSigns', () => {
  it('should return the correct zodiac sign for a given date', () => {
    const zodiac = new ZodiacSigns();

    const ariesDate = new Date('2000-03-21')
    zodiac.setZodiacSign(ariesDate);
    expect(zodiac.getZodiacSign().name).toBe('Aries')

    const taurusDate = new Date('2000-04-21')
    zodiac.setZodiacSign(taurusDate);
    expect(zodiac.getZodiacSign().name).toBe('Taurus')

    const geminiDate = new Date('2000-05-22')
    zodiac.setZodiacSign(geminiDate);
    expect(zodiac.getZodiacSign().name).toBe('Gemini')
  })

  it('should handle special case for Capricorn', () => {
    const zodiac = new ZodiacSigns()

    const capricornBeforeNewYear = new Date('2000-01-10')
    zodiac.setZodiacSign(capricornBeforeNewYear);
    expect(zodiac.getZodiacSign().name).toBe('Capricorn')
    
    const capricornAfterNewYear = new Date('2000-12-30')
    zodiac.setZodiacSign(capricornAfterNewYear);
    expect(zodiac.getZodiacSign().name).toBe('Capricorn')
  })
})
