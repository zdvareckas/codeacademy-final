import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';
import { authLogoutAction } from '../../../store/auth/auth-actions';

const UserMenu = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          px: 3,
        },
      }}
    >
      <MenuItem
        onClick={() => navigate('/profile')}
      >
        Profile
      </MenuItem>
      <MenuItem onClick={() => {
        dispatch(authLogoutAction);
        localStorage.removeItem('token');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }}
      >
        Logout
      </MenuItem>
    </Menu>
  );
};
export default UserMenu;
