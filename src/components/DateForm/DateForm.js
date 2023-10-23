/**
 * The date form web component.
 *
 */

import RetrievedZodiacSign from '../RetrievedZodiacSign/RetrievedZodiacSign.js'
import DateValidator from './DateValidator.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #date-form {
      display: inline;
      place-items: center;
      padding: 10px;
    }

    #date-form h2 {
      text-align: center;
      font-size: 2em;
      place-items: center;
    }

    #date-form p {
      text-align: center;
      font-size: 1em;
      place-items: center;
    }

    #form {
      text-align: center;
    }

    #error-message {
      color: red;
      text-align: center;
      font-size: 1em;
      place-items: center;
    }

  </style>

  <div id="date-form">
    <h2>Find Zodiac Signs for other dates</h2>
    <div id="form">
      <label for="date">Enter a date (yyyy-mm-dd):</label>
      <input type="text" id="date-input" placeholder="yyyy-mm-dd">
      <button id="submit">Submit</button>
    </div>
    <div id="error-message"></div>
    <p>(The year can be from 1 to 9999)</p>
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
      const errorElement = this.shadowRoot.getElementById('error-message');

      try {
        if (this.validateDate(date)) {
          const appContainer = document.getElementById('app')
          let retrievedZodiacSign = appContainer.querySelector('retrieved-zodiac-sign');
  
          if (!retrievedZodiacSign) {
            retrievedZodiacSign = new RetrievedZodiacSign();
            appContainer.appendChild(retrievedZodiacSign);
          }
  
          retrievedZodiacSign = document.querySelector('retrieved-zodiac-sign')
          retrievedZodiacSign.setZodiacSign(date)
          retrievedZodiacSign.setAstronomicalZodiacSign(date)
          retrievedZodiacSign.setMoonZodiacSign(date)

          errorElement.innerText = '';
        } else {
          throw new Error('Invalid date format!');
        }
      } catch (error) {
        const errorElement = this.shadowRoot.getElementById('error-message');
        errorElement.innerText = error.message;
      }
      
    })
  }

  validateDate(date) {
    let dateValidator = new DateValidator(date)
    return dateValidator.isValidDate()
  }

}

customElements.define('date-form', DateForm)

export default DateForm