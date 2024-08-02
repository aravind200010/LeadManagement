import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar, IconButton, Divider } from '@mui/material';
import { Add, Visibility, Home, ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <List>
          <ListItem button component={Link} to="/home">
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/add-lead">
            <ListItemIcon><Add /></ListItemIcon>
            <ListItemText primary="Create Sales" />
          </ListItem>
          <ListItem button component={Link} to="/sales-list">
            <ListItemIcon><Visibility /></ListItemIcon>
            <ListItemText primary="Sales List" />
          </ListItem>
        </List>
        <Box sx={{ marginTop: 'auto', bgcolor: 'background.paper', p: 1 }}>
          <Divider />
          <List>
            <ListItem button component={Link} to="/" sx={{ color: 'text.secondary', justifyContent: 'center' }}>
              <ListItemIcon>
                <ExitToApp sx={{ color: 'error.main' }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
