import React from 'react';
import './Navbar.scss';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const MyNav = () => {
  return (
    <>
      <Navbar expand='lg' className='navigation-container'>
        <Container>
          <Navbar.Brand href='#home' className='navigation-title'>
            Portfolio
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className='ms-auto'
              style={{
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              <Nav.Link href='#about' className='navigation-link'>
                About me
              </Nav.Link>
              <Nav.Link href='#projects' className='navigation-link'>
                Projects
              </Nav.Link>
              <Nav.Link href='#skills' className='navigation-link'>
                Skills
              </Nav.Link>
              <Nav.Link href='#contact' className='navigation-link'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
