import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileNavBtn = ({ path }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      Browse
      {' '}
      {path}
    </Button>
  );
};

export default ProfileNavBtn;
