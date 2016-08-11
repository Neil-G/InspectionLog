import React, { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header style={{  background: '#263238', color: '#eceff1', padding: '8px', borderBottom: '4px solid tomato' }} >
        <h1 style={{paddingLeft: '2px', marginBottom: '0' }}>Inspection Log</h1>
      </header>
    );
  }
}
