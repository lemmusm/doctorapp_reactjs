import React, { Component, Fragment } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>Doctor App</Navbar.Brand>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;
