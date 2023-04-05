import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavComponent = () => {

  return(
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          Rick y Morty
        </Navbar.Brand>
        <Nav>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/characters'>Personajes</Link>
          <Link className='nav-link' to='/locations'>Lugares</Link>
          <Link className='nav-link' to='/episodes'>Episodios</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
