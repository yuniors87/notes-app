import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Link className={styles.header__link} to="/">Home</Link>
        <Link className={styles.header__link}  to="/notes">Notes</Link>
        <Link className={styles.header__link}  to="/companies">Companies</Link>
      </div>
    );
  }
}

export default Header;
