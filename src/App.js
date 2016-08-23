import React, { Component } from 'react';
import { Header } from './components/parts/Header'
// require("./../stylesheet.css")





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
