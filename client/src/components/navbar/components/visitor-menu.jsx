import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VisitorMenu = ({ anchorEl, handleClose }) => {
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
      PaperProps={{
        sx: {
          p: 1,
        },
      }}
    >
      <MenuItem onClick={() => { handleNavigate('login'); }}>Login</MenuItem>
      <MenuItem onClick={() => { handleNavigate('register'); }}>Register</MenuItem>
    </Menu>
  );
};

export default VisitorMenu;
