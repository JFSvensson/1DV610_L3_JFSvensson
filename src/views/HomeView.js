/**
 * The HomeView class.
 */

import HomePage from '../components/homePage/HomePage.js'
import DateForm from '../components/DateForm/DateForm.js'

class HomeView {
  constructor() {
    const appContainer = document.getElementById('app')
    
    const homePage = new HomePage()
    appContainer.appendChild(homePage)

    const dateForm = new DateForm()
    appContainer.appendChild(dateForm)
  }
}

export default HomeView
