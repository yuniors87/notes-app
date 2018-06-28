import React, { Component } from 'react';
import styles from './main.css';
import Nota from './nota';

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
      </div>
    );
  }
}

export default Main;
