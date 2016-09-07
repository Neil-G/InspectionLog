// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')
import moment from 'moment'



function formatDate(date){
  if (date == null) return "-"
  return moment(date).utcOffset(8).format('M/D/YY')
}


class InspectionDetails extends Component {
  render() {
    const { inspection, toggleEdit } = this.props
    console.log('inspection details part: ',inspection)
    return (
      <div>

        <button className='edit' onClick={toggleEdit} style={{float: 'right'}}>EDIT</button>

        <div className='row'>
          <label className="section-header">DOB #</label>
          <p className='larger-font'> {inspection.DOB} </p>
        </div>

        <div className='row'>
          <label className="section-header">Address </label>
          <p className='no-margin-bottom larger-font'> {inspection.address.line1} </p>
          <p className='no-margin-bottom larger-font'> {inspection.address.line2} </p>
          <p className='larger-font'>
            {inspection.address.city}, {inspection.address.state}, {inspection.address.zip}
          </p>
        </div>

        <label className="section-header"> Client Type </label>
        <p className='larger-font'> {inspection.clientType} </p>

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
                <td> {formatDate(inspection.recordsOnFile.proposal)} </td>
              </tr>
              <tr>
                <td>Engagement Letter</td>
                <td> {formatDate(inspection.recordsOnFile.engagementLetter)} </td>
              </tr>
              <tr>
                <td>Invoice</td>
                <td> {formatDate(inspection.recordsOnFile.invoice)} </td>
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
              <td> { formatDate(inspection.reports.specialInspection.TR1)} </td>
              <td> { formatDate(inspection.reports.specialInspection.TR8)} </td>
            </tr>
            <tr>
              <td>Initial Report Copies</td>
              <td> { formatDate(inspection.reports.initialReportCopies.TR1)} </td>
              <td> { formatDate(inspection.reports.initialReportCopies.TR8)} </td>
            </tr>
            <tr>
              <td>Final Reports</td>
              <td> { formatDate(inspection.reports.finalReports.TR1)} </td>
              <td> { formatDate(inspection.reports.finalReports.TR8)} </td>
            </tr>
            </tbody>
          </table>

        { /* <label className="section-header"> Progress Check-in Dates </label> */}



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
              <td> { formatDate(inspection.inspectionInformation.date) } </td>
            </tr>
            <tr>
              <td>Inspector Name</td>
              <td> {inspection.inspectionInformation.inspector} </td>
            </tr>
            <tr>
              <td>Results</td>
              <td> {inspection.inspectionInformation.results} </td>
            </tr>
            <tr>
              <td>Report Filed</td>
              <td> { formatDate(inspection.inspectionInformation.reportFiled) } </td>
            </tr>
            <tr>
              <td>Signed-off Date</td>
              <td> { formatDate(inspection.inspectionInformation.signedOffDate) } </td>
            </tr>
          </tbody>
        </table>


        {/* <label className="section-header">Comments </label> */}



      </div>
    );
  }
}

export default InspectionDetails
