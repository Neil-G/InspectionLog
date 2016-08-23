import React, { Component } from 'react';
import { Link } from 'react-router';
require('./../../../public/css/custom.css')


const CreateInspectionForm = () => (
  <div>

    <h3 className="center-text">Create a New Inspection</h3>

    <div className="row">
      <Link to="/inspections/search" className="create-new-inspection"> search inspections </Link>
    </div>
    <div className="row">
      <input type="text" className="columns six offset-by-three" placeholder="DOB#"/>
    </div>

    <div className="row">
      <input type="text" placeholder="address line 1" className="columns six offset-by-three"/>
    </div>

    <div className="row">
      <input type="text" placeholder="address line 2" className="columns six offset-by-three"/>
    </div>

    <div className="row">
      <input type="text" placeholder="city" className="columns three offset-by-three"/>
      <input type="text" placeholder="state" className="column one" defaultValue="NY"/>
      <input type="text" placeholder="zip" className="columns two"/>
    </div>

    <div className="row">
      <button className="columns six offset-by-three create-button" > create new inspection </button>
    </div>

  </div>
)

export default CreateInspectionForm
