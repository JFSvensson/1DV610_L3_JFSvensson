import ZodiacSigns from '../src/models/ZodiacSigns.js'

describe('ZodiacSigns', () => {
  it('should return the correct zodiac sign for a given date', () => {
    const ariesDate = new Date('2000-03-21')
    const taurusDate = new Date('2000-04-21')
    const geminiDate = new Date('2000-05-22')

    const zodiac = new ZodiacSigns();

    zodiac.setZodiacSign(ariesDate);
    expect(zodiac.getZodiacSign().name).toBe('Aries')

    zodiac.setZodiacSign(taurusDate);
    expect(zodiac.getZodiacSign().name).toBe('Taurus')

    zodiac.setZodiacSign(geminiDate);
    expect(zodiac.getZodiacSign().name).toBe('Gemini')
  });

  it('should handle special case for Capricorn', () => {
    const capricornBeforeNewYear = new Date('2000-01-10')
    const capricornAfterNewYear = new Date('2000-12-30')

    const zodiac = new ZodiacSigns()

    zodiac.setZodiacSign(capricornBeforeNewYear);
    expect(zodiac.getZodiacSign().name).toBe('Capricorn')

    zodiac.setZodiacSign(capricornAfterNewYear);
    expect(zodiac.getZodiacSign().name).toBe('Capricorn')
  })
})
