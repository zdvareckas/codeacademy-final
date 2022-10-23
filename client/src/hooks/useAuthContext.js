import React from 'react';
import AuthContext from '../contexts/auth-context';

const useAuthContext = () => React.useContext(AuthContext);

export default useAuthContext;
