import axios from 'axios';
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create EmployeeContext
export const EmployeeContext = createContext();

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const EmployeeContextProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const navigate = useNavigate();

  // Function to fetch employee data
  const getEmployees = async () => {
    try {
      const response = await client.get('/employees');
      setEmployeesData(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Function for employee login
  const employeeLogin = async (email, password) => {
    try {
      const request = await client.post('/employee/login', { email, password });
      if (request.status === 200) {
        localStorage.setItem('employeeToken', request.data.token);
        navigate('/employee/dashboard');
      }
    } catch (error) {
      console.error('Employee login failed:', error);
    }
  };

  const data = {
    employeesData,
    getEmployees,
    employeeLogin,
  };
  console.log(employeesData);
  console.log(getEmployees);
  console.log(employeeLogin);
  return (
    <EmployeeContext.Provider value={data}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom hook to use EmployeeContext
export const useEmployeeContext = () => useContext(EmployeeContext);
