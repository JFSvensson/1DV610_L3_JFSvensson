/**
 * The date form web component.
 *
 */

import RetrievedZodiacSign from '../RetrievedZodiacSign/RetrievedZodiacSign.js'

const template = document.createElement('template')
template.innerHTML = `
  <div id="date-form">
  <label for="date">Enter a date:</label>
  <input type="text" id="date-input" placeholder="YYYY-MM-DD">
  <button id="submit">Submit</button>
  </div>
`

class DateForm extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )

    this.shadowRoot.getElementById('submit').addEventListener('click', () => {
      let date = this.shadowRoot.getElementById('date-input').value
      if (this.validateDate(date)) {
        let retrievedZodiacSign = document.querySelector('retrieved-zodiac-sign')
        retrievedZodiacSign.setZodiacSign(date)
        retrievedZodiacSign.setActualZodiacSign(date)
        retrievedZodiacSign.setMoonZodiacSign(date)
      }
    })
  }

  validateDate(date) {
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/
    return dateRegex.test(date)
  }

}

customElements.define('date-form', DateForm)

export default DateForm