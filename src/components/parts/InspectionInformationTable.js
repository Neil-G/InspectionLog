import React, { Component } from 'react';
import moment from 'moment'
require('./../../../public/css/custom.css')

function formatResults(result){
  if (result) return "PASS"
  if (result == null ) return ""
  return "FAIL"
}

export class InspectionInformationTable extends Component {
  render() {
    const { inspectionInformation } = this.props;
    return (
      <table className="info-table">

        <thead>
          <tr>
            <th>Inspection Info</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Date</td>
            <td>{
              inspectionInformation.date &&
              moment(inspectionInformation.date).format("M/D/YY")
            }</td>
          </tr>

          <tr>
            <td>Inspector</td>
            <td>{
              inspectionInformation.inspector &&
              inspectionInformation.inspector
            }</td>
          </tr>

          <tr>
            <td>Results</td>
            <td>{ formatResults(inspectionInformation.results) }</td>
          </tr>

          <tr>
            <td>Report Filed</td>
            <td>{
              inspectionInformation.reportFiled &&
              moment(inspectionInformation.reportFiled).format("M/D/YY")
            }</td>
          </tr>

          <tr>
            <td>Signed-off Date</td>
            <td>{
              inspectionInformation.signedOffDate &&
              moment(inspectionInformation.signedOffDate).format("M/D/YY")
            }</td>
          </tr>

        </tbody>
      </table>
    );
  }
}
