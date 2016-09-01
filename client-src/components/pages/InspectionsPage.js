import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')


class InspectionsPage extends Component {
  render() {
    return (
      <div>
        <h2 className='search-header'> Search Inspections </h2>

        <div className='row'>
          <div className='offset-by-four two columns'>
            <label>
              <input type="radio" name='search-criteria'/>
              <span className="label-body"> <b> DOB #</b> </span>
            </label>
          </div>
          <div className="two columns">
            <label>
              <input type="radio" name='search-criteria'/>
              <span className="label-body"> <b> ADDRESS</b> </span>
            </label>
          </div>
        </div>

        <div className='row'>
        </div>

        <div className='row'>
          <input type='text' className='offset-by-three six columns'/>
        </div>

        <div className='row'>
          <p className='center-text create-link'> <Link to='/inspections/create'> Create New Inspection </Link> </p>
        </div>

        <hr/>
      </div>
    );
  }
}

export default InspectionsPage
