import React, { Component } from 'react';
import moment from 'moment'

require('./../../../public/css/custom.css')

export class ReportsTable extends Component {
  render() {
    const { reports } = this.props;
    return (
      <table className="info-table">
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
            <td>{
              reports.specialInspection.TR1 &&
              moment(reports.specialInspection.TR1).format("M/D/YY")
            }</td>
            <td>{
              reports.specialInspection.TR8 &&
              moment(reports.specialInspection.TR8).format("M/D/YY")
            }</td>
          </tr>

          <tr>
            <td>Initial Report Copies</td>
            <td>{
              reports.initialReportCopies.TR1 &&
              moment(reports.initialReportCopies.TR1).format("M/D/YY")
            }</td>
            <td>{
              reports.initialReportCopies.TR8 &&
              moment(reports.initialReportCopies.TR8).format("M/D/YY")
            }</td>
          </tr>

          <tr>
            <td>Final Reports</td>
            <td>{
              reports.finalReports.TR1 &&
              moment(reports.finalReports.TR1).format("M/D/YY")
            }</td>
            <td>{
              reports.finalReports.TR8 &&
              moment(reports.finalReports.TR8).format("M/D/YY")
            }</td>
          </tr>

        </tbody>
      </table>
    );
  }
}
