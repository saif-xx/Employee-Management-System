import React from 'react';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faUser, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const EmployeeList = ({ employees }) => {
  return (
    <Container className="mt-4">
      <h3>
        <FontAwesomeIcon icon={faUser} className="me-2" />
        Employee List
      </h3>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th><FontAwesomeIcon icon={faIdBadge} className="me-1" /> ID</th>
              <th><FontAwesomeIcon icon={faUser} className="me-1" /> Name</th>
              <th><FontAwesomeIcon icon={faBriefcase} className="me-1" /> Department</th>
              <th><FontAwesomeIcon icon={faDollarSign} className="me-1" /> Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>${employee.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default EmployeeList;