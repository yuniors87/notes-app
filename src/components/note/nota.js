import React, { Component } from 'react'
import styles from './nota.css'

export class Nota extends Component {
  render() {
    return (
      <div className={styles.nota}>
        <div className={styles.nota__titulo} >Esta es una nota</div>
      </div>
    )
  }
}

export default Nota
