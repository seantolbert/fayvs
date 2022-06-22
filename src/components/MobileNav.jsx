import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import {useLogout} from '../hooks/useLogout'

const navItems = [
  { icon: <CreateIcon />, name: "Create", link: "/create" },
  { icon: <HomeIcon />, name: "Home", link: "/" },
  { icon: <LoginIcon />, name: "Login", link: "/login" },
];

export default function MobileNav() {
  const {logout} = useLogout()  

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Mobile Navigation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<MenuIcon />}
      >
        {navItems.map((item) => (
          <SpeedDialAction
            href={item.link}
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
          />
        ))}
        <SpeedDialAction 
          icon={<LogoutIcon />}
          onClick={logout}
          tooltipTitle="Logout"
        />
      </SpeedDial>
    </Box>
  );
}
