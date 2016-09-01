
import React, { Component } from 'react';
import { Link } from 'react-router'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/inspections"> Inspections </Link>
      </div>
    );
  }
}

export default HomePage
