import React, { Component } from 'react';
import { Link } from 'react-router';
var axios = require('axios');

class InspectionSearchForm extends Component {
  constructor(){
    super()
    this.searchInspections = this.searchInspections.bind(this)
  }

  searchInspections(text){
    // e.preventDefault()
    axios.get('/api/inspections/search-by-dob/' + text)
      .then( (res) => {
        console.log(res.data)
        this.props.setInspections(res.data)
      })
      .then( (err) => {
        console.log(err)
      })
  }

  render(){
    const { searchText, updateText } = this.props
    return(
      <div>
        <div className="row">
          <Link to="/inspections/new" className="create-new-inspection"> create new inspection </Link>
        </div>
        <h3 className="center-text">Search for an Inspection</h3>

        <div className="row search-row">
            <input
              // value={searchText}
              onChange={ (e) => {
                // updateText(e.target.value);
                this.searchInspections(e.target.value)
              }}
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
  }
}

export default InspectionSearchForm
