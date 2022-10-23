import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthMenu = ({ anchorEl, handleClose }) => {
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleNavigate = (path) => {
    navigate(`/auth/${path}`);
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{ mt: 1.5 }}
    >
      <MenuItem onClick={() => { handleNavigate('login'); }}>LOGIN</MenuItem>
      <MenuItem onClick={() => { handleNavigate('register'); }}>REGISTER</MenuItem>
    </Menu>
  );
};

export default AuthMenu;
