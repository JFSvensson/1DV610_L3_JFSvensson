/**
 * Validates the date input.
 */

class DateValidator {
  #date

  constructor(date) {
    this.#date = date
  }

  isValidDate() {
    if (!this.isValidDateFormat()) {
      return false
    }
  
    const [year, month, day] = this.parseDateParts();
  
    if (!this.isValidYear(year) || !this.isValidMonth(month) || !this.isValidDay(year, month, day)) {
      return false
    }
  
    return true
  }
  
  isValidDateFormat() {
    const pattern = /^\d{1,4}-\d{2}-\d{2}$/
    return pattern.test(this.#date)
  }
  
  parseDateParts() {
    return this.#date.split("-").map(Number)
  }
  
  isValidYear(year) {
    return year >= 1 && year <= 9999
  }

  isValidMonth(month) {
    return month >= 1 && month <= 12
  }
  
  isValidDay(year, month, day) {
    const daysInMonth = new Date(year, month, 0).getDate()
    return day >= 1 && day <= daysInMonth
  }
}

export default DateValidator
