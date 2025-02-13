import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx'; 
import { Table, Container } from 'react-bootstrap';
import './getEmployees.css'; 

const EmployeeListPage = () => {
  const { employeesData, getEmployees } = useContext(UserContext); 

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <Container className="employee-container">
      <h1 className="text-center mb-4">Employee List</h1>
      <Table striped bordered hover responsive className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.length > 0 ? (
            employeesData.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.status ? 'Active' : 'Inactive'}</td>
                <td>{employee.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export { EmployeeListPage };
