import React, { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => (
  <Fragment>
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>{titulo}</Navbar.Brand>
    </Navbar>
  </Fragment>
);

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
