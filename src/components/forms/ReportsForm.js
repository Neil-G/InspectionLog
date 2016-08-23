import React, { Component } from 'react';
import moment from 'moment'

const ReportsForm = ({ id, reports }) => (
  <form>
    <div className="row">
      <table className="eight columns u-full-width">
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
            <td><input type='date' defaultValue={reports.specialInspection.TR1} /></td>
            <td><input type='date' defaultValue={reports.specialInspection.TR8} /></td>
          </tr>

          <tr>
            <td>Initial Report Copies</td>
            <td><input type='date' defaultValue={reports.initialReportCopies.TR1} /></td>
            <td><input type='date' defaultValue={reports.initialReportCopies.TR8} /></td>
          </tr>

          <tr>
            <td>Final Reports</td>
            <td><input type='date' defaultValue={reports.finalReports.TR1} /></td>
            <td><input type='date' defaultValue={reports.finalReports.TR8} /></td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <button className="eight columns u-full-width submit-button">
          submit edit
        </button>
      </div>
    </div>
  </form>
)

export default ReportsForm
