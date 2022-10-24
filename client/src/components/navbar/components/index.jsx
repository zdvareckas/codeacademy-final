import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export { default as AuthMenu } from './auth-menu';
export { default as UserMenu } from './user-menu';

export const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  padding: theme.spacing(0, 3),
  textDecoration: 'none',
  color: 'inherit',

  '&.active': {
    color: theme.palette.primary.light,
  },

  ':hover': {
    color: theme.palette.secondary.main,
  },
}));
