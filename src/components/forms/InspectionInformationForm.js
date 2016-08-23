import React, { Component } from 'react';
import moment from 'moment'

const InspectionInformationForm = ({ id, inspectionInformation }) => (
  <form>
    <div className="row">
      <table className="eight columns u-full-width">

        <thead>
          <tr>
            <th>Inspection Info</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Date</td>
            <td><input type="date" /></td>
          </tr>

          <tr>
            <td>Inspector</td>
            <td><input type="text" defaultValue={inspectionInformation.inspector} /></td>
          </tr>

          <tr>
            <td>Results</td>
            <td>
              <select defaultValue={inspectionInformation.results}>
                <option value={undefined}> - </option>
                <option value="PASS">PASS</option>
                <option value="FAIL">FAIL</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Report Filed</td>
            <td><input type="date" defaultValue={inspectionInformation.reportFiled} /></td>
          </tr>

          <tr>
            <td>Signed-off Date</td>
            <td><input type="date" defaultValue={inspectionInformation.signedOffDate} /></td>
          </tr>

        </tbody>
      </table>
    </div>
    <div className="row">
      <button className="eight columns u-full-width submit-button">
        submit edit
      </button>
    </div>
  </form>
)

export default InspectionInformationForm
