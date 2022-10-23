import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const ProfilePage = () => {
  const { user } = useAuthContext();

  return (
    <pre>{JSON.stringify(user, null, 4)}</pre>
  );
};
export default ProfilePage;
