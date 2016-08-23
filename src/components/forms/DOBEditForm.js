import React, { Component } from 'react';

const DOBEditForm = ({ id, dob }) => (
  <form>
    <div className="row">
      <div className="six columns">
        <input type="text" defaultValue={dob} className="u-full-width"/>
      </div>
    </div>
    <div className="row">
      <button className="six columns u-full-width submit-button">
        submit edit
      </button>
    </div>
  </form>
)

export default DOBEditForm
