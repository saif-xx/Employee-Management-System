import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmployeeList from '../components/EmployeeList';

const CreateEmployee = ({ employees, setEmployees }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('front-end developer');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && name && department && salary) {
      const employeeExists = employees.find(emp => emp.id === id);
      if (employeeExists) {
        alert('Employee ID already exists!');
        return;
      }
      const newEmployee = { id, name, department, salary: parseFloat(salary) };
      setEmployees([...employees, newEmployee]);
      alert('Employee created successfully!');
      // Clear form fields
      setId('');
      setName('');
      setDepartment('front-end developer');
      setSalary('');
    }
  };

  return (
    <Container className="mt-5 create-container" style={{ padding: '20px' }}>
      <h2>
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Create Employee
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="front-end developer">Front-end Developer</option>
            <option value="back-end developer">Back-end Developer</option>
            <option value="database handler">Database Handler</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Create Employee
        </Button>
      </Form>
      <EmployeeList employees={employees} />
    </Container>
  );
};

export default CreateEmployee;