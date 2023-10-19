/**
 * The HomeView class.
 */

import HomePage from '../components/HomePage/HomePage.js'
import DateForm from '../components/DateForm/DateForm.js'
import CurrentZodiacSign from '../components/CurrentZodiacSign/CurrentZodiacSign.js'

class HomeView {
  constructor() {
    const appContainer = document.getElementById('app')
    
    const homePage = new HomePage()
    appContainer.appendChild(homePage)

    const dateForm = new DateForm()
    appContainer.appendChild(dateForm)

    const currentZodiacSign = new CurrentZodiacSign()
    appContainer.appendChild(currentZodiacSign)

  }
}

export default HomeView
