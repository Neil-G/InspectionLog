// @flow

import React, { Component } from 'react';
import Parts from './components/parts'


class App extends Component {
  render() {
    return (
      <div>
        <Parts.Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App
