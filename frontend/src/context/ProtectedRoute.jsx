import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { userRole } = useAuth();
  
    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/unauthorized" />;
    }
  
    return children;
  };
  

export default ProtectedRoute;
