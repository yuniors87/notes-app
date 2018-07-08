import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCompaniesQuery } from '../../queries/company';
import List from '../ui/list';
import ListItem from '../ui/listItem';
import Button from '../ui/button';
import Subtitle from '../ui/subtitle';

class Companies extends Component {
  displayCompanies() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading companies</div>;
    } else {
      return data.companies.map(company => {
        return <ListItem key={company.id}>{company.name}</ListItem>;
      });
    }
  }
  render() {
    return (
      <div>
        <Subtitle subtitle="Companies" />
        <Button  to="/company" tag="Register new company" />
        <List>{this.displayCompanies()}</List>
      </div>
    );
  }
}

export default graphql(getCompaniesQuery)(Companies);
