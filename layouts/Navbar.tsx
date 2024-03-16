import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
  mode: string;
  setMode: (mode: string) => void;
}

const drawerWidth = 240;
const navItems = [
  "dashboard",
  "library",
  "transit",
  // "gym",
  "wallet",
  // "profile",
];

export default function NavBar(props: Props) {
  const { window, children, mode, setMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const myTheme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ my: 2 }}
      >
        Made
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              href={`/${item == "dashboard" ? "/" : item}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                sx={{ textTransform: "capitalize" }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontWeight="bold"
            textTransform="uppercase"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Made
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                LinkComponent={Link}
                href={`/${item == "dashboard" ? "/" : item}`}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box>
            <IconButton
              size="large"
              sx={{ color: "white" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {myTheme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
