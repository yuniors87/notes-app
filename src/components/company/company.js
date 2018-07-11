import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { addCompanyMutation, getCompaniesQuery } from '../../queries/company';
import Subtitle from '../ui/subtitle';
import Button from '../ui/button';
import Form from '../ui/form';
import Label from '../ui/label';
import Imput from '../ui/input';
import Input from '../ui/input';

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
        <Form>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className="field">
              <Label tag="Name:" />
              <Input onChange={console.log('cambiado')} />
            </div>
            <Button tag="Save" primary />
          </form>
        </Form>
        <Button to="/companies" tag="Back to list" />
      </div>
    );
  }
}
export default compose(
  graphql(addCompanyMutation, { name: 'addCompanyMutation' })
)(Company);
