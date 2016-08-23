import React, { Component } from 'react';
import { find } from 'lodash';
import moment from 'moment'
import { Comment } from './../parts/Comment'
import { InspectionAddress } from './../parts/InspectionAddress'
import { RecordsTable } from './../parts/RecordsTable'
import { ReportsTable } from './../parts/ReportsTable'
import { InspectionInformationTable } from './../parts/InspectionInformationTable'
import DOBEditForm from './../forms/DOBEditForm'
import AddressEditForm from './../forms/AddressEditForm'
import ClientStatusForm from './../forms/ClientStatusForm'
import RecordsForm from './../forms/RecordsForm'
import ReportsForm from './../forms/ReportsForm'
import InspectionInformationForm from './../forms/InspectionInformationForm'

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

    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(section){
    this.state.edit[section] = !this.state.edit[section]
    this.setState({ edit: this.state.edit })
  }

  render() {
    const { inspections } = this.props
    const { DOB, address, client, records, reports, inspectionInformation } = this.state.edit
    const inspection = find(inspections.toJS(), {"DOB": String(this.props.params.dob) })
    return (
      <div className="inspection-details">


        <h2>DOB Application #
          <span className="edit-toggle" onClick={() => this.toggleEdit('DOB')}>edit</span>
        </h2>

        {
          DOB ?
          <DOBEditForm dob={inspection.DOB} id={inspection.id} />
          :
          <p>{inspection.DOB}</p>
        }


        <h2>Address
          <span className="edit-toggle" onClick={() => this.toggleEdit('address')}>edit</span>
        </h2>

        {
          address ?
          <AddressEditForm address={inspection.address} id={inspection.id} />
          :
          <InspectionAddress address={inspection.address} />
        }




        <h2>Client Status
          <span className="edit-toggle" onClick={() => this.toggleEdit('client')}>edit</span>
        </h2>

        {
            client ?
            <ClientStatusForm client={inspection.client} id={inspection.id} />
            :
            <p>{inspection.client}</p>
        }



        <h2> Records on File  </h2>
        <span className="edit-toggle" onClick={() => this.toggleEdit('records')}>edit</span>
        {
          records ?
          <RecordsForm recordsOnFile={inspection.recordsOnFile} id={inspection.id} />
          :
          <RecordsTable recordsOnFile={inspection.recordsOnFile} />
        }


        <span className="edit-toggle" onClick={() => this.toggleEdit('reports')}>edit</span>
        {
          reports ?
          <ReportsForm reports={inspection.reports} id={inspection.id} />
          :
          <ReportsTable reports={inspection.reports} />
        }




        <h2>Inspection Information
          <span className="edit-toggle" onClick={() => this.toggleEdit('inspectionInformation')}>edit</span>
        </h2>

        {
          inspectionInformation ?
          <InspectionInformationForm inspectionInformation={inspection.inspectionInformation} id={inspection.id}/>
          :
          <InspectionInformationTable inspectionInformation={inspection.inspectionInformation} />
        }


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
