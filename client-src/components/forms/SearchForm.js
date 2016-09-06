import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')
import Parts from './../parts'
import Containers from './../../containers'

var axios = require('axios')

class SearchForm extends Component {
  constructor(){
    super()
    this.submitSearch = this.submitSearch.bind(this)
    this.state = { total: undefined }
  }

  submitSearch(e){
    console.log(e.target.value)
    if (e.target.value != ""){
      axios.get('/api/inspections/search/' + e.target.value)
        .then( (res) => {
          console.log(res.data)
          this.props.setInspections(res.data)
        })
        .then( (err) => {
          console.log(err)
        })
    }
  }

  componentWillMount(){
    console.log('mounted!')
    axios.get('/api/inspections/count')
      .then( (res) => {
        console.log('total: ', res.data)
        this.setState({ total: res.data.total })
      })
      .then( (err) => {
        console.log(err)
      })
  }

  render() {
    const { total } = this.state
    return (
      <div>

        <div className='row'>
          <p className='center-text'> <Link to='/inspections/create'> Create New Inspection </Link> </p>
        </div>

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
          <input
            onChange={this.submitSearch}
            type='text'
            className='offset-by-three six columns'/>
        </div>

        <p style={{ textAlign: 'center'}}> {total && <span>Total # of inspections: <span className='total-number'>{total}</span>  </span>} </p>

      </div>
    );
  }
}

export default SearchForm
