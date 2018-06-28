import React, {Component} from 'react'
import styles from './header.css'

class Header extends Component {
  render(){
    return(
      <div className={styles.header}>
        <div className={styles.header__titulo}>Notes-App</div>
      </div>
    )
  }
}

export default Header