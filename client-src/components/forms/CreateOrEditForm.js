// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')
var axios = require('axios')

function valueOrNull(value){
  if ((value == "") || (value == "-") || value == undefined) return null
  return value
}

class CreateOrEditForm extends Component {
  constructor(){
    super()
    this.state = {
      comments: [],
      checkIns: []
    }
    this.onSubmitCreate = this.onSubmitCreate.bind(this)
  }

  onSubmitCreate(e){
    e.preventDefault();

    if (
      valueOrNull(this.refs.DOB.value) == null ||
      valueOrNull(this.refs.line1.value) == null
    ) {
      console.log('must have DOB and address line 1')
      return
    }

    const newInspection = {
      "DOB": valueOrNull(this.refs.DOB.value),
      "address": {
        "line1": valueOrNull(this.refs.line1.value),
        "line2": valueOrNull(this.refs.line2.value),
        "city": valueOrNull(this.refs.city.value),
        "state": valueOrNull(this.refs.state.value),
        "zip": valueOrNull(this.refs.zip.value)
      },
      "clientType": valueOrNull(this.refs.clientType.value),
      "recordsOnFile": {
        "proposal": valueOrNull(this.refs.proposal.value),
        "engagementLetter": valueOrNull(this.refs.engagementLetter.value),
        "invoice": valueOrNull(this.refs.invoice.value)
      },
      "reports": {
        "specialInspection": {
          "TR1": valueOrNull(this.refs.special1.value),
          "TR8": valueOrNull(this.refs.special8.value)
        },
        "initialReportCopies": {
          "TR1": valueOrNull(this.refs.initial1.value),
          "TR8": valueOrNull(this.refs.initial8.value)
        },
        "finalReports": {
          "TR1": valueOrNull(this.refs.final1.value),
          "TR8": valueOrNull(this.refs.final8.value)
        }
      },
      "inspectionInformation": {
        "progressCheckinDates": [],
        "date": valueOrNull(this.refs.date.value),
        "inspector": valueOrNull(this.refs.inspector.value),
        "results": valueOrNull(this.refs.results.value),
        "reportFiled": valueOrNull(this.refs.filed.value),
        "signedOffDate": valueOrNull(this.refs.signOff.value)
      },
      "comments": []
    }

    axios.post('/api/inspections/create', { newInspection })
      .then( (res) => {
        console.log(res.data)
      })
      .then( (err) => {
        console.log(err)
      })

  }

  render() {
    return (
      <form>
        <div className='row'>
          <label className="section-header">DOB #</label>
          <input ref='DOB' type='text' className='twelve columns'/>
        </div>

        <div className='row'>
          <label className="section-header">Address </label>
          <input ref='line1' type='text' placeholder='Address Line 1' className='twelve columns'/>
        </div>

        <div className='row'>
          <input ref='line2' type='text' placeholder='Address Line 2' className='twelve columns'/>
        </div>

        <div className='row'>
          <input ref='city' type='text' placeholder='City' className='six columns'/>
          <input ref='state' type='text' placeholder='State' defaultValue='NY' className='two columns'/>
          <input ref='zip' type='text' placeholder='Zip' className='four columns'/>
        </div>

        <label className="section-header">Client Type </label>
        <div className='row'>
          <select ref='clientType' defaultValue='IN-HOUSE' className='twelve columns'>
            <option>IN-HOUSE</option>
            <option>OUTSIDE</option>
          </select>
        </div>

        <label className="section-header">Records on File </label>
          <table className='u-full-width'>
            <thead>
              <tr>
                <th>Record Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proposal</td>
                <td><input ref='proposal' type='date' className='u-full-width'/></td>
              </tr>
              <tr>
                <td>Engagement Letter</td>
                <td><input ref='engagementLetter' type='date' className='u-full-width'/></td>
              </tr>
              <tr>
                <td>Invoice</td>
                <td><input ref='invoice' type='date' className='u-full-width'/></td>
              </tr>
            </tbody>
          </table>

          <table className='u-full-width'>
            <thead>
              <tr>
                <th>Report Type</th>
                <th>TR1</th>
                <th>TR8</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>Special Inspection</td>
              <td><input ref='special1' type='date' className='u-full-width'/></td>
              <td><input ref='special8' type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Initial Report Copies</td>
              <td><input ref='initial1' type='date' className='u-full-width'/></td>
              <td><input ref='initial8' type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Final Reports</td>
              <td><input ref='final1' type='date' className='u-full-width'/></td>
              <td><input ref='final8' type='date' className='u-full-width'/></td>
            </tr>
            </tbody>
          </table>

        {
          // <label className="section-header"> Progress Check-in Dates </label>
          // <div className='row'>
          //   <input type='date' className='nine columns' style={{height: '38px'}} />
          //   <button className='three columns add'>add</button>
          // </div>
        }


        <label className="section-header">Inspection Information </label>

        <table className="u-full-width">
          <thead>
            <tr>
              <th>Inspection Info</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td><input ref='date' type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Inspector Name</td>
              <td><input ref='inspector' type='text' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Results</td>
              <td>
                <select ref='results' className='u-full-width'>
                  <option value={undefined}> - </option>
                  <option value='PASS'> PASS </option>
                  <option value='FAIL'> FAIL </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Report Filed</td>
              <td><input ref='filed' type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Signed-off Date</td>
              <td><input ref='signOff' type='date' className='u-full-width'/></td>
            </tr>
          </tbody>
        </table>

        {
          // <label className="section-header">Comments </label>
          //
          // <textarea className='u-full-width' />
          // <div className="row">
          //   <button className="u-full-width add"> add comment </button>
          // </div>
        }


        <hr/>

        <div className="row">
          <button
            onClick={this.onSubmitCreate}
            className="u-full-width submit-create-or-edit"> Submit New Inspection </button>
        </div>
      </form>
    );
  }
}

export default CreateOrEditForm
