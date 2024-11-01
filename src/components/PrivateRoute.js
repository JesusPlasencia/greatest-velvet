import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../services/authService';

const PrivateRoute = ({ children }) => {
  const token = getAccessToken();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;