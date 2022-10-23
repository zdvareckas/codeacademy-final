import * as React from 'react';
import DesktopNav from './components/desktop-nav';
import MobileNav from './components/mobile-nav';

const drawerWidth = 240;

const pages = [
  { text: 'Home', to: '/' },
  { text: 'Bikes', to: '/bikes' },
  { text: 'Equipment', to: '/equipment' },
  { text: 'Contacts', to: '/contacts' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <DesktopNav
        handleDrawerToggle={handleDrawerToggle}
        pages={pages}
      />
      <MobileNav
        handleDrawerToggle={handleDrawerToggle}
        pages={pages}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />
    </>
  );
};

export default Navbar;
