import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, AppBar, Toolbar, Typography, IconButton, CssBaseline, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLead } from './store';
import Sidebar from './Sidebar';
import Logo from "./two.png";

const HomePage = () => {
  const leads = useSelector((state) => state.leads);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteLead(id));
  };

  // Sort leads by date and get the last 4
  const sortedLeads = [...leads].sort((a, b) => new Date(a.date) - new Date(b.date)); // Adjust if sorting order is different
  const latestLeads = sortedLeads.slice(-4); // Take the last 4 items

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: '64px' }}>
        <Toolbar sx={{ minHeight: '64px' }}>
          <Box mr={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <img src={Logo} alt="Logo" style={{ height: '120px', width: 'auto' }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>Dashboard</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sales ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Enquiry Info</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {latestLeads.length > 0 ? (
                latestLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>{lead.salesId}</TableCell>
                    <TableCell>{lead.salesName}</TableCell>
                    <TableCell>{lead.salesAge}</TableCell>
                    <TableCell>{lead.salesAddress}</TableCell>
                    <TableCell>{lead.salesMobile}</TableCell>
                    <TableCell>{lead.salesEnquiryInfo}</TableCell>
                    <TableCell>
                      <IconButton component={Link} to={`/edit-lead/${lead.id}`}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(lead.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">No data available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default HomePage;
