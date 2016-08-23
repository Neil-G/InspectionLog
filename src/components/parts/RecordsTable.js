import React, { Component } from 'react';
import moment from 'moment'
require('./../../../public/css/custom.css')

export class RecordsTable extends Component {
  render() {
    const { recordsOnFile } = this.props;
    return (
      <table className="info-table">
        <thead>
          <tr>
            <th>Record Type</th>
            <th>Date Filed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proposal</td>
            <td>{
              recordsOnFile.proposal &&
              moment(recordsOnFile.proposal).format("M/D/YY")
            }</td>
          </tr>
          <tr>
            <td>Engagement Letter</td>
            <td>{
              recordsOnFile.engagementLetter &&
              moment(recordsOnFile.engagementLetter).format("M/D/YY")
            }</td>
          </tr>
          <tr>
            <td>Invoice</td>
            <td>{
              recordsOnFile.invoice &&
              moment(recordsOnFile.invoice).format("M/D/YY")
            }</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
