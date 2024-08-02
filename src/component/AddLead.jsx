import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLead } from './store';
import { TextField, Button, Typography, Container, Box, CssBaseline, AppBar, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Logo from "./two.png";

const AddLead = () => {
  const [salesName, setSalesName] = useState('');
  const [salesAge, setSalesAge] = useState('');
  const [salesAddress, setSalesAddress] = useState('');
  const [salesMobile, setSalesMobile] = useState('');
  const [salesEnquiryInfo, setSalesEnquiryInfo] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to generate a unique sales ID
  const generateSalesId = () => {
    return `ID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  // Validation function
  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!/^[a-zA-Z\s]+$/.test(salesName)) {
      errors.salesName = 'Name should not contain numbers';
      valid = false;
    }

    if (!/^\d+$/.test(salesAge)) {
      errors.salesAge = 'Age should be a number';
      valid = false;
    }

    if (!/^\d{10}$/.test(salesMobile)) {
      errors.salesMobile = 'Mobile number must be exactly 10 digits';
      valid = false;
    }

    if (!/^[a-zA-Z0-9\s]+$/.test(salesAddress)) {
      errors.salesAddress = 'Address should be alphanumeric';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const salesId = generateSalesId(); // Generate the unique sales ID
      dispatch(addLead({ salesId, salesName, salesAge, salesAddress, salesMobile, salesEnquiryInfo }));
      navigate('/home');
    }
  };

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
      <Container component="main" maxWidth="sm" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            Add New Lead
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesName"
              label="Name"
              name="salesName"
              autoComplete="sales-name"
              value={salesName}
              onChange={(e) => setSalesName(e.target.value)}
              error={Boolean(errors.salesName)}
              helperText={errors.salesName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesAge"
              label="Age"
              name="salesAge"
              autoComplete="sales-age"
              value={salesAge}
              onChange={(e) => setSalesAge(e.target.value)}
              error={Boolean(errors.salesAge)}
              helperText={errors.salesAge}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesAddress"
              label="Address"
              name="salesAddress"
              autoComplete="sales-address"
              value={salesAddress}
              onChange={(e) => setSalesAddress(e.target.value)}
              error={Boolean(errors.salesAddress)}
              helperText={errors.salesAddress}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesMobile"
              label="Mobile"
              name="salesMobile"
              autoComplete="sales-mobile"
              value={salesMobile}
              onChange={(e) => setSalesMobile(e.target.value)}
              error={Boolean(errors.salesMobile)}
              helperText={errors.salesMobile}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesEnquiryInfo"
              label="Enquiry Info"
              name="salesEnquiryInfo"
              autoComplete="sales-enquiry-info"
              value={salesEnquiryInfo}
              onChange={(e) => setSalesEnquiryInfo(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Lead
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AddLead;
