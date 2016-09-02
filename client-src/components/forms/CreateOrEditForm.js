// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')


class CreateOrEditForm extends Component {
  constructor(){
    super()
    this.state = {
      comments: [],
      checkIns: []
    }
  }
  render() {
    return (
      <form>
        <div className='row'>
          <label className="section-header">DOB #</label>
          <input type='text' className='twelve columns'/>
        </div>

        <div className='row'>
          <label className="section-header">Address </label>
          <input type='text' placeholder='Address Line 1' className='twelve columns'/>
        </div>
        <div className='row'>
          <input type='text' placeholder='Address Line 2' className='twelve columns'/>
        </div>
        <div className='row'>
          <input type='text' placeholder='City' className='six columns'/>
          <input type='text' placeholder='State' defaultValue='NY' className='two columns'/>
          <input type='text' placeholder='Zip' className='four columns'/>
        </div>

        <label className="section-header">Client Type </label>
        <div className='row'>
          <select defaultValue='IN-HOUSE' className='twelve columns'>
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
                <td><input type='date' className='u-full-width'/></td>
              </tr>
              <tr>
                <td>Engagement Letter</td>
                <td><input type='date' className='u-full-width'/></td>
              </tr>
              <tr>
                <td>Invoice</td>
                <td><input type='date' className='u-full-width'/></td>
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
              <td><input type='date' className='u-full-width'/></td>
              <td><input type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Initial Report Copies</td>
              <td><input type='date' className='u-full-width'/></td>
              <td><input type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Final Reports</td>
              <td><input type='date' className='u-full-width'/></td>
              <td><input type='date' className='u-full-width'/></td>
            </tr>
            </tbody>
          </table>

        <label className="section-header"> Progress Check-in Dates </label>
        <div className='row'>
          <input type='date' className='nine columns' style={{height: '38px'}} />
          <button className='three columns add'>add</button>
        </div>

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
              <td><input type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Inspector Name</td>
              <td><input type='text' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Results</td>
              <td>
                <select className='u-full-width'>
                  <option value={undefined}> - </option>
                  <option value='PASS'> PASS </option>
                  <option value='FAIL'> FAIL </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Report Filed</td>
              <td><input type='date' className='u-full-width'/></td>
            </tr>
            <tr>
              <td>Signed-off Date</td>
              <td><input type='date' className='u-full-width'/></td>
            </tr>
          </tbody>
        </table>


        <label className="section-header">Comments </label>


        <textarea className='u-full-width' />
        <div className="row">
          <button className="u-full-width add"> add comment </button>
        </div>

        <hr/>

        <div className="row">
          <button className="u-full-width submit-create-or-edit"> Submit New Inspection </button>
        </div>
      </form>
    );
  }
}

export default CreateOrEditForm
