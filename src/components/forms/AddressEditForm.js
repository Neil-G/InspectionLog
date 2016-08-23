import React, { Component } from 'react';

const AddressEditForm = ({ id, address }) => (
  <div>
    <form>

      <div className="row">
        <input
          type="text"
          defaultValue={address.line1}
          placeholder="address line 1"
          className="columns six"/>
      </div>

      <div className="row">
        <input
          type="text"
          defaultValue={address.line2}
          placeholder="address line 2"
          className="columns six"/>
      </div>

      <div className="row">
        <input
          defaultValue={address.city}
          type="text"
          placeholder="city"
          className="columns three"/>
        <input
          type="text"
          defaultValue={address.state}
          placeholder="state"
          className="column one"
          defaultValue="NY"/>
        <input
          defaultValue={address.zip}
          type="text"
          placeholder="zip"
          className="columns two"/>
      </div>

      <div className="row">
        <button className="columns six create-button"> submit edit </button>
      </div>
    </form>
  </div>
)

export default AddressEditForm
