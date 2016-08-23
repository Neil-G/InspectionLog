import React, { Component } from 'react';
import { find } from 'lodash';
import moment from 'moment'
import { Comment } from './../parts/Comment'
import { InspectionAddress } from './../parts/InspectionAddress'
import { RecordsTable } from './../parts/RecordsTable'
import { ReportsTable } from './../parts/ReportsTable'
import { InspectionInformationTable } from './../parts/InspectionInformationTable'

require('./../../../public/css/custom.css')




export class InspectionDetails extends Component {
  constructor(){
    super()
    this.state = {
      edit: {
        DOB: false,
        address: false,
        client: false,
        records: false,
        reports: false,
        inspectionInformation: false
      }
    }
  }

  render() {
    const { inspections } = this.props
    const inspection = find(inspections.toJS(), {"DOB": String(this.props.params.dob) })
    return (
      <div className="inspection-details">

        <h2>DOB Application #
          <span className="edit-toggle">edit</span>
        </h2>
        <p>{inspection.DOB}</p>

        <h2>Address
          <span className="edit-toggle">edit</span>
        </h2>
        <InspectionAddress address={inspection.address} />

        <h2>Client Status
          <span className="edit-toggle">edit</span>
        </h2>
        <p>{inspection.client}</p>

        <h2>Records on File
          <span className="edit-toggle">edit</span>
        </h2>
        <RecordsTable recordsOnFile={inspection.recordsOnFile} />
        <ReportsTable reports={inspection.reports} />


        <h2>Inspection Information
          <span className="edit-toggle">edit</span>
        </h2>
        <InspectionInformationTable inspectionInformation={inspection.inspectionInformation} />


        <h2>Comments</h2>
          {
            inspection.comments.map( comment => {
              return(
                <Comment comment={comment} />
              )
            })
          }

      </div>
    );
  }
}
