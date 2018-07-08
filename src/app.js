import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme1, theme2 } from './components/theme/globalStyle';
import Button from './components/ui/button';
import Header from './components/header/header';
import Hero from './components/hero';
import Notes from './components/note/notes';
import Company from './components/company/company';
import Companies from './components/company/companies';

const StyledMain = styled.div`
  margin: 0 1rem;
`;
const AppWrapper = styled.div`
  // text-align: center;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme2}>
        <AppWrapper>
          <Header />
          <StyledMain>
            <Switch>
              <Route exact path="/" component={Hero} />
              <Route exact path="/notes" component={Notes} />
              <Route exact path="/companies" component={Companies} />
              <Route exact path="/company" component={Company} />
            </Switch>
          </StyledMain>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
