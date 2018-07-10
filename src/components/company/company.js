import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { addCompanyMutation, getCompaniesQuery } from '../../queries/company';
import Subtitle from '../ui/subtitle';
import Button from '../ui/button';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      guardado: false
    };
  }
  submitForm(e) {
    e.preventDefault();
    this.props.addCompanyMutation({
      variables: {
        name: this.state.name
      },
      refetchQueries: [{ query: getCompaniesQuery }]
    });
    this.setState({ guardado: true });
  }
  render() {
    if (this.state.guardado) {
      return <Redirect to="/companies" />;
    }
    return (
      <div>
        <Subtitle subtitle="Register new company" />
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <Button tag="Save" primary />
        </form>
        <Button to="/companies" tag="Back to list" />
      </div>
    );
  }
}
export default compose(
  graphql(addCompanyMutation, { name: 'addCompanyMutation' })
)(Company);
