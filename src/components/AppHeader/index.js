import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/T3Kbowhitex.svg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Πράγματα Διακοπών</h1>
              <p className='app-intro'>
                Σούνιο 2019
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          
          <div className='view-src'>
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
