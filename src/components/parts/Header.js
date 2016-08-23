import React, { Component } from 'react';
import { Link } from 'react-router';
require('./../../../public/css/custom.css')

export class Header extends Component {
  render() {
    return (
      <header>
        <p>
          <Link to="/"> Inspection Manager </Link>
        </p>
      </header>
    );
  }
}
