import React, { Component } from 'react';
import { InspectionPreview } from './../parts/InspectionPreview'
require('./../../../public/css/custom.css')


export class InspectionPreviews extends Component {
  render() {
    const { inspections } = this.props;
    console.log(this.props)
    return (
      <div>
        <h3 className="center-text">Search for an Inspection</h3>

        <div className="row search-row">
            <input className="search-input" type="text" placeholder="enter DOB# or address" />
            <button className="clear-search-button" >clear</button>
        </div>

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
