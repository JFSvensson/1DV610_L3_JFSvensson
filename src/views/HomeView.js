/**
 * The HomeView class.
 */

import HomePage from '../components/HomePage/HomePage.js'
import DateForm from '../components/DateForm/DateForm.js'
import CurrentZodiacSign from '../components/CurrentZodiacSign/CurrentZodiacSign.js'
import RetrievedZodiacSign from '../components/RetrievedZodiacSign/RetrievedZodiacSign.js'

class HomeView {
  constructor() {
    const appContainer = document.getElementById('app')
    
    const homePage = new HomePage()
    appContainer.appendChild(homePage)

    const currentZodiacSign = new CurrentZodiacSign()
    appContainer.appendChild(currentZodiacSign)

    const dateForm = new DateForm()
    appContainer.appendChild(dateForm)

  }
}

export default HomeView
