import axios from 'axios';
import { createContext, useContext, useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const UserContext = createContext();

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const UserContextProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const { userRole, loginAs } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole) {
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'employee') {
        navigate('/employee');
      } else if (userRole === 'thirdParty') {
        navigate('/third-party');
      } else {
        navigate('*');
      }
    }
  }, [userRole, navigate]);

  const getEmployees = async () => {
    try {
      const response = await client.get('/users');
      setEmployeesData(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const validateEmail = async (email) => {
    try {
      const response = await client.post('/validate-email', { email });
      return response.data.exists;
    } catch (error) {
      console.error('Error validating email:', error);
      throw new Error('Failed to validate email');
    }
  };

  const Login = async (email, password) => {
    try {
      const request = await client.post('/login', {
        email,
        password,
      },{
        withCredential : true,
      }
    );

      if (request.status === 200) {
        const role = request.data.user.role; 
        console.log("-->",role)
        loginAs(role);
        localStorage.setItem('token', request.data.token);
        localStorage.setItem('user', JSON.stringify({ email}));
      }
    } catch (e) {
      console.error('Login failed:', e);

    }
  };

  const data = {
    employeesData,
    getEmployees,
    validateEmail,
    Login,
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};
