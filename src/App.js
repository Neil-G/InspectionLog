import React, { Component } from 'react';
import { Header } from './components/parts/Header'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
