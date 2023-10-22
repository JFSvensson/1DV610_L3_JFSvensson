/**
 * The home page web component.
 *
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #home-page {
      display: grid;
      place-items: center;
    }

    h1 {
      font-size: 4em;
      color: purple;
    }
  </style>

  <div id="home-page">
    <h1>ZodiacCompanion</h1>
    <h2>Find the astrological and astronomical zodiac sign - and learn more about it!</h2>
  </div>
`

class HomePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    )
  }

  connectedCallback() {
  }
}

customElements.define('home-page', HomePage)

export default HomePage
