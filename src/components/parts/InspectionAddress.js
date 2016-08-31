import React, { Component } from 'react';
require('./../../../public/css/custom.css')

export const InspectionAddress = ({ address }) => (
      <p>
        {address.line1}<br/>
        {address.line2.length > 0 && <span>{address.line2}<br/></span> }
        {address.city}, {address.state}, {address.zip}
      </p>
)
