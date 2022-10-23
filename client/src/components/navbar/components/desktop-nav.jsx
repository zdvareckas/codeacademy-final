import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Nav from '.';
import UserCartContext from '../../../contexts/cart-context';

const DesktopNav = ({ handleDrawerToggle, pages }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const homePage = location.pathname === '/';
  const { cart } = React.useContext(UserCartContext);

  return (
    <AppBar
      component="nav"
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: `${homePage ? 'common.white' : 'pallete.primary'}`,
        color: `${homePage ? 'black' : 'common.white'}`,
        height: '64px',
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
          sx={{
            mr: 2,
            display: { sm: 'none' },
            color: 'inherit',
          }}
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

          <IconButton
            onClick={() => navigate('/cart')}
            sx={{ position: 'relative', color: 'inherit' }}
          >
            <ShoppingCartIcon />
          </IconButton>

          <Typography sx={{
            position: 'absolute',
            top: 10,
            right: 20,
            fontSize: 12,
            backgroundColor: 'inherit',
          }}
          >
            {cart.length}
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  );
};
export default DesktopNav;
