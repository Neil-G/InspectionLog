import React, { Component } from 'react';
import { Link } from 'react-router';
require('./../../../public/css/custom.css')


class CreateInspectionForm extends Component {
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    const newInspection = {
      "DOB": this.refs.DOB.value,
      "address": {
        "line1": this.refs.addressLine1.value,
        "line2": this.refs.addressLine2.value,
        "city": this.refs.city.value,
        "state": this.refs.state.value,
        "zip": this.refs.zip.value
      },
      "client": this.refs.clientType.value,
      "recordsOnFile": {
        "proposal": null,
        "engagementLetter": null,
        "invoice": null
      },
      "reports": {
        "specialInspection": {
          "TR1": null, "TR8": null
        },
        "initialReportCopies": {
          "TR1": null, "TR8": null
        },
        "finalReports": {
          "TR1": null, "TR8": null
        }
      },
      "inspectionInformation": {
        "progressCheckinDates": [],
        "date": null,
        "inspector": null,
        "results": false,
        "reportFiled": null,
        "signedOffDate": null
      },
      "comments": []
    }
    this.props.createInspection(newInspection)
  }

  render(){
    return(
      <div>
        <div className="row">
          <Link to="/inspections/search" className="create-new-inspection"> search inspections </Link>
        </div>

        <h3 className="center-text">Create a New Inspection</h3>
        <label className="six columns offset-by-three"> Address </label>
        <div className="row">
          <input ref="DOB" type="text" className="columns six offset-by-three" placeholder="DOB#"/>
        </div>

        <div className="row">
          <input ref="addressLine1" type="text" placeholder="address line 1" className="columns six offset-by-three"/>
        </div>

        <div className="row">
          <input ref="addressLine2" type="text" placeholder="address line 2" className="columns six offset-by-three"/>
        </div>

        <div className="row">
          <input ref="city" type="text" placeholder="city" className="columns three offset-by-three"/>
          <input ref="state" type="text" placeholder="state" className="column one" defaultValue="NY"/>
          <input ref="zip" type="text" placeholder="zip" className="columns two"/>
        </div>

        <div className="row">
        <label className="six columns offset-by-three"> Client Type</label>
          <select ref="clientType" className="six columns offset-by-three" defaultValue="IN-HOUSE" >
            <option value='IN-HOUSE'>IN-HOUSE</option>
            <option value='OUTSIDE'>OUTSIDE</option>
          </select>
        </div>

        <div className="row">
          <button
            onClick={this.onSubmit}
            className="columns six offset-by-three create-button">
            create new inspection
          </button>
        </div>

      </div>
    )
  }

}

export default CreateInspectionForm
