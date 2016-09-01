// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
import Forms from './../forms'
require('./../../../public/custom.css')


class CreateInspectionPage extends Component {
  render() {
    return (
      <div>
        <p className='center-text'><Link to='/inspections'> Search Inspections </Link></p>
        <h2 className='center-text'> Create an Inspection </h2>
        <Forms.CreateOrEditForm />
      </div>
    );
  }
}

export default CreateInspectionPage
