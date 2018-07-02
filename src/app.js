import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './app.css';
import Header from './components/header/header';
import Hero from './components/hero';
import Notes from './components/note/notes';
import Company from './components/company/company';
import Companies from './components/company/companies';

class App extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/company" component={Company} />
        </Switch>
      </div>
    );
  }
}

export default App;
