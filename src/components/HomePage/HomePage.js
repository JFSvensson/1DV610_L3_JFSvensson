/**
 * The home page web component.
 *
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #home-page {
      /* background-color: #fff; */
      color: #000;
      padding: 10px;
    }

    h1 {
      font-size: 4em;
    }
  </style>

  <div id="home-page">
    <h1>ZodiacCompanion</h1>
    <p>This is the page for the app...</p>
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
