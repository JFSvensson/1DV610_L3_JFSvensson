/**
 * The HomeView class.
 */

import HomePage from '../components/homePage/HomePage.js'

class HomeView {
  constructor() {
    const homePage = new HomePage()
    const appContainer = document.getElementById('app')
    appContainer.appendChild(homePage)
  }
}

export default HomeView
