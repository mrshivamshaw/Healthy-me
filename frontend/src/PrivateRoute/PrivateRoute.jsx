import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contextApi/ContextApi';

const PrivateRoute = ({ children }) => {
  const { checkAuth } = useContext(AuthContext);

  useEffect(() => {
    // You might want to call checkAuth() here to ensure that authentication is checked when the component mounts.
    // This is optional and depends on your use case.
    checkAuth()
  }, []);
  if (localStorage.getItem('token') !== null) {
    return children;
  } else {
    // Redirect to the login page if access is not granted
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
