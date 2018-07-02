import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Company extends Component {
  render() {
    return (
      <div>
        <div>Esto es para registrar las empresas</div>
        <Link to="/companies">Back</Link>
      </div>
    );
  }
}
export default Company;
