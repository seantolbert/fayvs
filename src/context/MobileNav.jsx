import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Action } from "history";

const navItems = [
  { icon: <CreateIcon />, name: "Create" },
  { icon: <HomeIcon />, name: "Home" },
];

export default function MobileNav() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Mobile Navigation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<MenuIcon />}
      >
        {navItems.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
