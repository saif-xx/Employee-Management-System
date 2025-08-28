import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import EmployeeList from '../components/EmployeeList';

const Home = ({ employees }) => {
  return (
    <Container className="mt-5 home-container" style={{ padding: '20px' }}>
      <h1>
        <FontAwesomeIcon icon={faHome} className="me-2" />
        Welcome to Employee Management System
      </h1>
      <p>Manage your employees efficiently with our intuitive tools for creating, updating, and deleting employee records.</p>
      <EmployeeList employees={employees} />
    </Container>
  );
};

export default Home;