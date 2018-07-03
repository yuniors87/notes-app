import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import styles from './companies.css'
import {getCompaniesQuery} from '../../queries/company'


class Companies extends Component {
  displayCompanies() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading companies</div>;
    } else {
      return data.companies.map(company => {
        return <li className={styles.list__item} key={company.id}>{company.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <Link className={[styles.btn]} to="/company">Register new company</Link>
        <div className={styles.subtitle}>Companies</div>
        <ul className={styles.list}>{this.displayCompanies()}</ul>
      </div>
    );
  }
}

export default graphql(getCompaniesQuery)(Companies);
