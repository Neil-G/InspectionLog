import React, { Component } from 'react';
import { Link } from 'react-router';

const InspectionSearchForm = () => (
  <div>
    <div className="row">
      <Link to="/inspections/new" className="create-new-inspection"> create new inspection </Link>
    </div>
    <h3 className="center-text">Search for an Inspection</h3>

    <div className="row search-row">
        <input className="search-input" type="text" placeholder="enter DOB# or address" />
        <button className="clear-search-button">clear</button>
    </div>
  </div>
)

export default InspectionSearchForm
