// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
import Parts from './index'
require('./../../../public/custom.css')


class InspectionsSearchResults extends Component {
  render() {
    const { inspections } = this.props
    return (
      <div>
      <div style={{ marginBottom: '14px' }} >
        <span style={{ fontSize: 'larger', color: 'green' }} >{inspections.size} </span> results
      </div>
        <ul>
          { inspections.map( inspection => <Parts.InspectionPreview inspection={inspection} key={inspection['_id']} /> )}
        </ul>
      </div>
    );
  }
}

export default InspectionsSearchResults
