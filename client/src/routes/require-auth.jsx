import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

const RequireAuth = ({ children: Page }) => {
  const { loggedIn } = useAuthContext();
  const { pathname } = useLocation();

  if (!loggedIn) {
    return <Navigate to={`/auth/login?redirect=${pathname}`} />;
  }

  return Page;
};

export default RequireAuth;
