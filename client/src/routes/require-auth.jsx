import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../store/auth/auth-context';

const RequireAuth = ({ children: Page }) => {
  const { loggedIn } = React.useContext(AuthContext);
  const { pathname } = useLocation();

  if (!loggedIn) {
    return <Navigate to={`/auth/login?redirect=${pathname}`} />;
  }

  return Page;
};

export default RequireAuth;
