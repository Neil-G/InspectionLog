import React, { Component } from 'react';
import { Link } from 'react-router';
import { InspectionAddress } from './InspectionAddress'
require('./../../../public/css/custom.css')

export class InspectionPreview extends Component {
  render() {
    const { inspection } = this.props
    return (
        <div className="inspection-preview">
          <p><Link to={`/inspections/${inspection.DOB}`}> DOB #: {inspection.DOB} </Link></p>
          <InspectionAddress address={inspection.address} />
        </div>
    );
  }
}
