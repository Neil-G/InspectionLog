// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')
import moment from 'moment'

class InspectionPreview extends Component {
  render() {
    const {
      inspection: {
        createdAt,
        updatedAt,
        _id,
        DOB,
        address: {
          line1, line2, city, state, zip
        }
      }
    } = this.props
    return (
      <li className='inspection-preview'>
        <div style={{ float: 'right', fontSize: 'smaller' }}> created: {moment(createdAt).format('M/D/YY')} </div>
        <div style={{ float: 'right', clear: 'both', fontSize: 'smaller' }}> last updated: {moment(updatedAt).format('M/D/YY')} </div>
        <div>
          <div style={{ fontSize: 'larger', fontWeight: 'bold', marginBottom: '12px'}} > DOB#:
            <Link to={`/inspections/${_id}`}> { DOB } </Link>
          </div>

          <div className='tight-lines'>{line1}</div>
          <div className='tight-lines'> {line2}</div>
          <div className='tight-lines'>{city}, {state}, {zip}</div>
        </div>
      </li>
    );
  }
}

export default InspectionPreview
