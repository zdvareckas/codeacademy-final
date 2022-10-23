import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const MobileNav = ({
  handleDrawerToggle,
  pages,
  mobileOpen,
  drawerWidth,
}) => {
  const navigate = useNavigate();

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            margin: 1,
          }}
        >
          <Box>
            <Typography variant="h6" textAlign="center" sx={{ my: 2 }}>
              <DirectionsBikeIcon />
            </Typography>

            <Divider />

            <List>
              {pages.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`${item.to}`);
                      handleDrawerToggle();
                    }}
                    sx={{ textAlign: 'center' }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}

            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
export default MobileNav;
