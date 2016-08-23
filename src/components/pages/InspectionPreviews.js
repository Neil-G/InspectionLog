import React, { Component } from 'react';
import { InspectionPreview } from './../parts/InspectionPreview'
import { forms } from './../forms'
require('./../../../public/css/custom.css')


export class InspectionPreviews extends Component {
  render() {
    const { inspections } = this.props;
    return (
      <div>
        {this.props.children}
        <hr />
        <ul>
          {
            inspections.map( inspection => {
              return <li><InspectionPreview inspection={inspection} /></li>
            })
          }
        </ul>
      </div>
    );
  }
}
