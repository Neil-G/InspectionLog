import React, { Component } from 'react';

const ClientStatusForm = ({ id, client }) => (
  <form>
    <div className="row">
      <select className="six columns" defaultValue={client}>
        <option value='IN-HOUSE'>IN-HOUSE</option>
        <option value='OUTSIDE'>OUTSIDE</option>
      </select>
    </div>
    <div className="row">
      <button className="six columns u-full-width submit-button">
        submit edit
      </button>
    </div>
  </form>
)

export default ClientStatusForm
