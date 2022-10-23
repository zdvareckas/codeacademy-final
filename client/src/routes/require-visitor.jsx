import React from 'react';
import { Navigate } from 'react-router-dom';
import { authClearRedirect } from '../store/auth/auth-actions';
import useAuthContext from '../hooks/useAuthContext';

const RequireVisitor = ({ children: Page }) => {
  const { loggedIn, redirect, dispatch } = useAuthContext();

  if (loggedIn) {
    if (redirect) {
      dispatch(authClearRedirect);

      return <Navigate to={redirect} />;
    }

    return <Navigate to="/profile" />;
  }

  return Page;
};

export default RequireVisitor;
