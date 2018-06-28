import React, { Component } from 'react';
import styles from './app.css';
import Header from './components/header/header';
import Main from './components/main/main';

class App extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
