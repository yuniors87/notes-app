import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getCompaniesQuery = gql`
  {
    companies {
      id
      name
    }
  }
`;

class Companies extends Component {
  displayCompanies() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading companies</div>;
    } else {
      return data.companies.map(company => {
        return <li key={company.id}>{company.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <Link to="/company">Register new company</Link>
        <div>Current companies</div>
        <ul>{this.displayCompanies()}</ul>
      </div>
    );
  }
}

export default graphql(getCompaniesQuery)(Companies);
