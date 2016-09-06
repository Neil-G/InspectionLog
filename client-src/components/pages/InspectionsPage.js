import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')
import Parts from './../parts'
import Containers from './../../containers'
import Forms from './../forms'

class InspectionsPage extends Component {
  render() {
    return (
      <div>
        <Containers.SearchForm />
        <hr style={{ marginBottom: '2px'}} />
        <Containers.SearchResults />
      </div>
    );
  }
}

export default InspectionsPage
