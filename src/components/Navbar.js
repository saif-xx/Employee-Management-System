import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faPlus,
  faEdit,
  faTrash,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbarComponent = ({ user, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Employee Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left-side links (Create, Update, Delete when logged in) */}
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link as={Link} to="/create">
                  <FontAwesomeIcon icon={faPlus} className="me-1" />
                  Create
                </Nav.Link>
                <Nav.Link as={Link} to="/update">
                  <FontAwesomeIcon icon={faEdit} className="me-1" />
                  Update
                </Nav.Link>
                <Nav.Link as={Link} to="/delete">
                  <FontAwesomeIcon icon={faTrash} className="me-1" />
                  Delete
                </Nav.Link>
              </>
            )}
          </Nav>
          {/* Right-side links (Home, Login/Signup or User ID/Logout) */}
          <Nav>
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} className="me-1" />
              Home
            </Nav.Link>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} className="me-1" />
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  <FontAwesomeIcon icon={faUserPlus} className="me-1" />
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Item className="d-flex align-items-center text-white me-3">
                  User ID: {user}
                </Nav.Item>
                <Nav.Link onClick={onLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;