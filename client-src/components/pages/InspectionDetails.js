import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')
import Parts from './../parts'
import Containers from './../../containers'
import Forms from './../forms'
var axios = require('axios')


class InspectionDetails extends Component {
  constructor(){
    super()
    this.state = { inspection: undefined, edit: false }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateInspection = this.updateInspection.bind(this)
  }

  componentWillMount(){
    console.log(this.props.routeParams.id)
    axios.get('/api/inspections/' + this.props.routeParams.id)
      .then( (res) => {
        console.log(res.data)
        this.setState({ inspection: res.data })
      })
      .then( (err) => {
        console.log(err)
      })
  }

  toggleEdit(){
    console.log('toggle')
    this.setState({ edit: !this.state.edit })
  }

  updateInspection(inspection){
    this.setState({ inspection })
  }

  render() {
    const { inspection, edit } = this.state
    console.log('edit: ',edit)
    return (
      <div>
        <p className='center-text'><Link to='/inspections'> Search Inspections </Link></p>
        {
          (inspection == undefined) && "LOADING..."
        }
        {
          inspection &&
          !edit &&
          <Parts.InspectionDetails inspection={inspection} toggleEdit={this.toggleEdit} />
        }
        {
          inspection &&
          edit &&
          <Forms.EditForm inspection={inspection} toggleEdit={this.toggleEdit} updateInspection={this.updateInspection}/>
        }

      </div>
    );
  }
}

export default InspectionDetails
