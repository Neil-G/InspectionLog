import React, { Component } from 'react';
import moment from 'moment'

const RecordsForm = ({ id, recordsOnFile }) => (
  <form>
    <div className="row">
      <table className="eight columns u-full-width">
        <thead>
          <tr>
            <th>Record Type</th>
            <th>Date Filed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proposal</td>
            <td><input type="date" defaultValue={recordsOnFile.proposal} /></td>
          </tr>
          <tr>
            <td>Engagement Letter</td>
            <td><input type="date" defaultValue={recordsOnFile.engagementLetter} /></td>
          </tr>
          <tr>
            <td>Invoice</td>
            <td><input type="date" defaultValue={recordsOnFile.invoice} /></td>
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

export default RecordsForm
