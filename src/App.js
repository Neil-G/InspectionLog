import React, { Component } from 'react';
import {Header} from './Header';
import {CreateOrEditForm} from './CreateOrEditForm';

const section = {
    borderLeft: "0.5px solid gray"
  , borderRight: "0.5px solid gray"
  ,padding: '8px'
}

export class App extends Component {
  render() {
    return (
      <div style={{ overflowX: 'scroll' }} >
        <Header/>

        <table style={{ position: 'absolute', top: '80px'}}>
          <thead>
            <tr>
              <td rowSpan="2" style={section}>Address</td>
              <td rowSpan="2" style={section}>Client Status</td>
              <td colSpan="3">Records on File</td>
              <td rowSpan="2" style={section}>NYC DOB APP#</td>
              <td colSpan="2" style={section}>Special Inspection Type</td>
              <td colSpan="2" style={section}>Copies of Initial Reports On File Date</td>
              <td rowSpan="2" style={section}>Date of Inspection</td>
              <td rowSpan="2" style={section}>Inspector Name</td>
              <td colSpan="2" style={section}>Type of Inspection</td>
              <td rowSpan="2" style={section}>Item Inspected</td>
              <td rowSpan="2" style={section}>Inspector Inspection Report on File</td>
              <td rowSpan="2" style={section}>Inspection Results</td>
              <td colSpan="2" style={section}>Copies of Final Reports on File</td>
              <td rowSpan="2" style={section}>Job Signed off Date</td>
            </tr>
            <tr>
              <td>Proposal</td>
              <td>Engagement Letter</td>
              <td>Invoice</td>
              <td>TR1</td>
              <td>TR8</td>
              <td>TR1</td>
              <td>TR8</td>
              <td>Progress</td>
              <td>Final</td>
              <td>TR1</td>
              <td>TR8</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}