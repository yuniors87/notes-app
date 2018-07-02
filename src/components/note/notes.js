import React, { Component } from 'react';
import styles from './notes.css';
import Nota from './nota';

class Notes extends Component {
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

export default Notes;
