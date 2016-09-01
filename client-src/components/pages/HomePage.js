
import React, { Component } from 'react';
import { Link } from 'react-router'
require('./../../../public/custom.css')


class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/inspections" className="home-page-link"> <h2> Inspections </h2> </Link>
      </div>
    );
  }
}

export default HomePage
