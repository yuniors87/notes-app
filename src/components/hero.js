import React, { Component } from 'react'
import styles from './hero.css'

export default class Hero extends Component {
  render() {
    return (
      <div className={styles.title}>
        Bienvenido a NOTES-APP
      </div>
    )
  }
}
