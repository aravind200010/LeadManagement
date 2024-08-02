import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateLead } from './store';
import { TextField, Button, Typography, Container, Box, CssBaseline, AppBar, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Logo from "./two.png"


const EditSales = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lead = useSelector((state) => state.leads.find(lead => lead.id === parseInt(id)));

  const [salesId, setSalesId] = useState('');
  const [salesName, setSalesName] = useState('');
  const [salesAge, setSalesAge] = useState('');
  const [salesAddress, setSalesAddress] = useState('');
  const [salesMobile, setSalesMobile] = useState('');
  const [salesEnquiryInfo, setSalesEnquiryInfo] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (lead) {
      setSalesId(lead.salesId);
      setSalesName(lead.salesName);
      setSalesAge(lead.salesAge);
      setSalesAddress(lead.salesAddress);
      setSalesMobile(lead.salesMobile);
      setSalesEnquiryInfo(lead.salesEnquiryInfo);
      setStatus(lead.status);
    }
  }, [lead]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateLead({ id: parseInt(id), salesId, salesName, salesAge, salesAddress, salesMobile, salesEnquiryInfo, status }));
    navigate('/home');
  };

  if (!lead) {
    return <div>Lead not found</div>;
  }

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
            Edit Lead
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesId"
              label="Sales ID"
              name="salesId"
              autoComplete="sales-id"
              autoFocus
              value={salesId}
              onChange={(e) => setSalesId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesName"
              label="Sales Name"
              name="salesName"
              autoComplete="sales-name"
              value={salesName}
              onChange={(e) => setSalesName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesAge"
              label="Sales Age"
              name="salesAge"
              autoComplete="sales-age"
              value={salesAge}
              onChange={(e) => setSalesAge(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesAddress"
              label="Sales Address"
              name="salesAddress"
              autoComplete="sales-address"
              value={salesAddress}
              onChange={(e) => setSalesAddress(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesMobile"
              label="Sales Mobile"
              name="salesMobile"
              autoComplete="sales-mobile"
              value={salesMobile}
              onChange={(e) => setSalesMobile(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="salesEnquiryInfo"
              label="Sales Enquiry Info"
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
              Update Lead
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EditSales;
