/**
 * The home page web component.
 *
 */

const template = document.createElement('template')
template.innerHTML = `
  <div id="home-page">
    <h1>ZodiacCompanion</h1>
    <p>The page it is</p>
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
