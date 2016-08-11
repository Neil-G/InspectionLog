import React, { Component } from 'react';

export class CreateOrEditForm extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div style={{
        borderLeft: '3px solid tomato',
        position: 'fixed',
        right: '0',
        // height: '100%',
        // width: '100%',
        background: 'white',
        transform: this.props.open ? 'translateX(0%)': 'translateX(125%)',
        transition: '0.8s all',
        top: '80px',
        bottom: '0px',
        // height: '80%',
        padding: '18px',
        zIndex: '2',
        color: 'black',
        overflowY: 'scroll',
      }}>
        <span style={{ position: 'absolute', top: '4px', right: '4px', cursor: 'pointer'}} onClick={this.props.toggleFormOpen} > close </span>
        <form style={{ background: 'white'}}>
          <h2 style={{ textAlign: "center", margin: '12px auto' }}>Create New Inspection</h2>
          
          <h4>Address</h4>
          <label>address line 1 </label>
          <input type="text" />
          <label>address line 2 </label>
          <input type="text" />
          <label>city </label>
          <input type="text" />
          <label>state </label>
          <input type="text" />
          <label>zip </label>
          <input type="text" />

          <hr/>
          
          <h4>Client Status</h4>
          <select>
            <option value="inHouse">in-house</option>
            <option value="outside">outside</option>
          </select>

          <hr/>

          <h4>Records on File</h4>
          <label>Proposal </label>
          
          <input type="checkbox" />
          <label>Engagement Letter </label>
          <input type="checkbox" />
          <label>Invoice </label>
          <input type="checkbox" />

          <button style={{ background: '#c8e6c9', margin: 'auto', display: 'block', width: '100%'}}> Submit Form </button>
        </form>
      </div>
    );
  }
}