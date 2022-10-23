import React from 'react';
import AuthContext from '../../contexts/auth-context';

const ProfilePage = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <pre>{JSON.stringify(user, null, 4)}</pre>
  );
};
export default ProfilePage;
