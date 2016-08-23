import React, { Component } from 'react';
import { Link } from 'react-router';

const InspectionSearchForm = ({ searchText, updateText }) => (
  <div>
    <div className="row">
      <Link to="/inspections/new" className="create-new-inspection"> create new inspection </Link>
    </div>
    <h3 className="center-text">Search for an Inspection</h3>

    <div className="row search-row">
        <input
          value={searchText}
          onChange={ (e) => updateText(e.target.value) }
          className="search-input"
          type="text"
          placeholder="enter DOB# or address" />
        <button
          onClick={ () => updateText("")}
          className="clear-search-button">
          clear
        </button>
    </div>
  </div>
)

export default InspectionSearchForm
