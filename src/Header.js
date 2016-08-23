import React, { Component } from 'react';
import {CreateOrEditForm} from './CreateOrEditForm';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { formOpen: false }
    this.toggleFormOpen = () => this.setState({ formOpen: !this.state.formOpen})
  }

  render() {
    return (
      <header style={{  
        background: '#263238'
        , color: '#eceff1'
      
        , borderBottom: '4px solid tomato'
        , height: '80px'
        , boxSizing: 'border-box' 
        , position: 'fixed'
        , top: '0'
        , left: '0'
        , right: '0'

      }} >
        <h1 style={{paddingLeft: '2px', marginBottom: '0', padding: '8px' }}>
          Inspection Log 
          <button onClick={this.toggleFormOpen} style={{ float: 'right', color: 'white', background: '#455a64'}}> 
            create new inspection 
          </button>
        </h1>
        <CreateOrEditForm open={this.state.formOpen} toggleFormOpen={this.toggleFormOpen}/>
      </header>
    );
  }
}
