// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')


class CreateOrEditForm extends Component {
  render() {
    return (
      <form>
        <div className='row'>
          <label>DOB #</label>
          <input type='text' className='twelve columns'/>
        </div>

        <div className='row'>
          <label>Address </label>
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

        <label>Client Type </label>
        <div className='row'>
          <select defaultValue='IN-HOUSE' className='twelve columns'>
            <option>IN-HOUSE</option>
            <option>OUTSIDE</option>
          </select>
        </div>

        <label>Records on File </label>
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
                <td><input type='date' /></td>
              </tr>
              <tr>
                <td>Engagement Letter</td>
                <td><input type='date' /></td>
              </tr>
              <tr>
                <td>Invoice</td>
                <td><input type='date' /></td>
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
              <td><input type='date' /></td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td>Initial Report Copies</td>
              <td><input type='date' /></td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td>Final Reports</td>
              <td><input type='date' /></td>
              <td><input type='date' /></td>
            </tr>
            </tbody>
          </table>

        <label> Progress Check-in Dates </label>
        <div className='row'>
          <input type='date' className='nine columns'/>
          <button className='three columns'>add check-in</button>
        </div>

        <label>Inspection Information </label>

        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>


        <label>Comments </label>
      </form>
    );
  }
}

export default CreateOrEditForm
