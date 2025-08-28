import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EmployeeList from '../components/EmployeeList';

const DeleteEmployee = ({ employees, setEmployees }) => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeExists = employees.find(emp => emp.id === id);
    if (!employeeExists) {
      alert('Employee ID not found!');
      return;
    }
    const filteredEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(filteredEmployees);
    alert('Employee deleted successfully!');
    setId(''); // Clear form field
  };

  return (
    <Container className="mt-5 delete-container" style={{ padding: '20px' }}>
      <h2>
        <FontAwesomeIcon icon={faTrash} className="me-2" />
        Delete Employee
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter employee ID"
            required
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Delete Employee
        </Button>
      </Form>
      <EmployeeList employees={employees} />
    </Container>
  );
};

export default DeleteEmployee;