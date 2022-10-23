import React from 'react';
import AuthContext from '../../store/auth/auth-context';

const ProfilePage = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <pre>{JSON.stringify(user, null, 4)}</pre>
  );
};
export default ProfilePage;
