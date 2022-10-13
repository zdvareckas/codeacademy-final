import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom';
import * as Nav from '.';

const DesktopNav = ({ handleDrawerToggle, pages }) => {
  const location = useLocation();
  const homePage = location.pathname === '/';

  return (
    <AppBar
      component="nav"
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: `${homePage ? 'common.white' : 'pallete.primary'}`,
        color: `${homePage ? 'black' : 'common.white'}`,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' }, color: 'inherit' }}
        >
          <MenuIcon />
        </IconButton>

        <DirectionsBikeIcon sx={{ display: { xs: 'none', sm: 'block' } }} />

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => (
            <Nav.Link key={to} to={to}>{text}</Nav.Link>
          ))}
        </Box>

        <Box>
          <IconButton sx={{ color: 'inherit' }}>
            <PersonIcon />
          </IconButton>
          <IconButton sx={{ color: 'inherit' }}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};
export default DesktopNav;
