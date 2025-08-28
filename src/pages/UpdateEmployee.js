import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EmployeeList from '../components/EmployeeList';

const UpdateEmployee = ({ employees, setEmployees }) => {
  const [id, setId] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeExists = employees.find(emp => emp.id === id);
    if (!employeeExists) {
      alert('Employee ID not found!');
      return;
    }
    if (!department && !salary) {
      alert('Please provide at least one field to update (Department or Salary).');
      return;
    }
    const updatedEmployees = employees.map(emp =>
      emp.id === id
        ? {
            ...emp,
            department: department || emp.department,
            salary: salary ? parseFloat(salary) : emp.salary,
          }
        : emp
    );
    setEmployees(updatedEmployees);
    alert('Employee updated successfully!');
    // Clear form fields
    setId('');
    setDepartment('');
    setSalary('');
  };

  return (
    <Container className="mt-5 update-container" style={{ padding: '20px' }}>
      <h2>
        <FontAwesomeIcon icon={faEdit} className="me-2" />
        Update Employee
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
        <Form.Group className="mb-3">
          <Form.Label>New Department (optional)</Form.Label>
          <Form.Select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Keep current</option>
            <option value="front-end developer">Front-end Developer</option>
            <option value="back-end developer">Back-end Developer</option>
            <option value="database handler">Database Handler</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>New Salary (optional)</Form.Label>
          <Form.Control
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter new salary"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Update Employee
        </Button>
      </Form>
      <EmployeeList employees={employees} />
    </Container>
  );
};

export default UpdateEmployee;