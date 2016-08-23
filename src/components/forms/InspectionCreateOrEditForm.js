import React, { Component } from 'react';


function formatResults(result){
  if (result) return "PASS"
  if (result == null ) return ""
  return "FAIL"
}

export class InspectionDetails extends Component {
  render() {
    const { inspection } = this.props
    console.log( inspection )
    return (
      <div>
        <h3> DOB Application # </h3>
        <p> {inspection.DOB} </p>

        <h3> Address </h3>
        <p>
          {inspection.address.line1}<br/>
          {inspection.address.line2.length > 0 && inspection.address.line2 }<br/>
          {inspection.address.city}
          {inspection.address.state}
          {inspection.address.zip}
        </p>

        <h3> Client Status </h3>
        <p> {inspection.client} </p>

        <h3> Records on File </h3>
        <table>
          <thead>
            <tr>
              <td>Record Type</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Proposal</td>
              <td>{inspection.recordsOnFile.proposal}</td>
            </tr>
            <tr>
              <td>Engagement Letter</td>
              <td>{inspection.recordsOnFile.engagementLetter}</td>
            </tr>
            <tr>
              <td>Invoice</td>
              <td>{inspection.recordsOnFile.invoice}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <td>Report Type</td>
              <td>TR1</td>
              <td>TR2</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Special Inspection</td>
              <td>{inspection.reports.specialInspection.TR1}</td>
              <td>{inspection.reports.specialInspection.TR8}</td>
            </tr>
            <tr>
              <td>Inspection Report Copies</td>
              <td>{inspection.reports.initialReportCopies.TR1}</td>
              <td>{inspection.reports.initialReportCopies.TR8}</td>
            </tr>
            <tr>
              <td>Final Reports</td>
              <td>{inspection.reports.finalReports.TR1}</td>
              <td>{inspection.reports.finalReports.TR8}</td>
            </tr>
          </tbody>
        </table>

        <h3> Inspection Information </h3>
        <table>
          <thead>
            <tr>
              <td>Inspection Info</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td>{inspection.inspectionInformation.date}</td>
            </tr>
            <tr>
              <td>Inspector</td>
              <td>{inspection.inspectionInformation.inspector}</td>
            </tr>
            <tr>
              <td>Results</td>
              <td>{formatResults(inspection.inspectionInformation.results)}</td>
            </tr>
            <tr>
              <td>Report Filed</td>
              <td>{inspection.inspectionInformation.reportFiled}</td>
            </tr>
            <tr>
              <td>Signed-off Date</td>
              <td>{inspection.inspectionInformation.signedOffDate}</td>
            </tr>
          </tbody>
        </table>

        <h3>Comments</h3>
        {
          inspection.comments.map( comment => {
            return(
              <div>
                <h5>{comment.title}</h5>
                <span>{comment.date}</span>
                <p>{comment.body}</p>
              </div>
            )
          })
        }

      </div>
    );
  }
}
