import React, { useContext } from "react";
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
import { Link } from "react-router-dom";
import Authcontext from "../../Context/AuthContext";

const drawerWidth = 240;

function NavBar(props) {
  const { authHeader, logout } = useContext(Authcontext);
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FADED
      </Typography>
      <Divider />
      <List>
        {authHeader === "" &&
          (window.location.pathname === "/login" ||
          window.location.pathname === "/" ? (
            <Link style={{textDecoration:'none',color:'black'}} to='/register'>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
            </Link>
          ) : (
            <Link style={{textDecoration:'none',color:'black'}} to='/login'>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}

        {authHeader !== "" && (
            <Link style={{textDecoration:'none',color:'black'}} onClick={ logout} to='/login'>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          </Link>
        )}
         <Link style={{textDecoration:'none',color:'black'}} to='/about'>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    windows !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            FADED
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>
              <Link style={{textDecoration:'none',color:'white'}} to="/about">About</Link>
            </Button>

            {authHeader === "" &&
              (window.location.pathname === "/login" ||
              window.location.pathname === "/" ? (
                <Button sx={{ color: "#fff" }}>
                  {" "}
                  <Link style={{textDecoration:'none',color:'white'}} to="/register">Register</Link>{" "}
                </Button>
              ) : (
                <Button sx={{ color: "#fff" }}>
                  {" "}
                  <Link style={{textDecoration:'none',color:'white'}} to="/login">Login</Link>
                </Button>
              ))}

            {authHeader !== "" && (
              <Button sx={{ color: "#fff" }}>
                <Link style={{textDecoration:'none',color:'white'}} to="/login" onClick={logout}>
                  Logout
                </Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}

export default NavBar;
