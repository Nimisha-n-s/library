import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar style={{ background: "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)" }}>
        <Toolbar style={{ color: 'white' }}>
          <Typography align='left' sx={{ flexGrow: 1 }}>BIBLIOTEEK</Typography>
          <MenuIcon onClick={toggleDrawer} />
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{ style: { background: '' } }}>
            <List>
              <ListItem  component={Link} to="/hp">
                <ListItemText primary="Home" />
              </ListItem>
              
              <ListItem component={Link} to="/l">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem  component={Link} to="/s">
                <ListItemText primary="Sign Up" />
              </ListItem>
              <ListItem  component={Link} to="/a">
                <ListItemText primary="Admin" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
