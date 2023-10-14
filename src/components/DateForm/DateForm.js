/**
 * The date form web component.
 *
 */

const template = document.createElement('template')
template.innerHTML = `
  <div id="date-form">
    <p>Enter date:</p>
  </div>
`

class DateForm extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )
  }

  connectedCallback() {
  }
}

customElements.define('date-form', DateForm)

export default DateForm
