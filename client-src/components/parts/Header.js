// @flow

import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')


class Header extends Component {
  render() {
    return (
      <header>
        <p className="container"> <Link to='/'> Cheap Engineers </Link> </p>
      </header>
    );
  }
}

export default Header
