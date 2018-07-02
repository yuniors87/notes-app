import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const client = new ApolloClient({
  uri: 'https://notes-app-server.herokuapp.com/graphql'
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('index'));
