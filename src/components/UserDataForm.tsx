import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const UserDataForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log(formData);
    alert('User data saved');
    window.location.reload();
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        borderRadius: 2, 
        backgroundColor: '#700B97',
        border: '5px solid #3E065F', 
        color: '#FFFFFF',
      }}
    >
      <Typography variant="h5" gutterBottom>
        User Information
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        style={{
          backgroundColor: "white",
          borderRadius:"13px",
          border:"0px"
        }}
        
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
        style={{
          backgroundColor: "white",
          borderRadius:"13px"
        }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        style={{
          backgroundColor: "white",
          borderRadius:"13px"
        }}
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        style={{
          backgroundColor: "white",
          borderRadius:"13px"
        }}
      />
      <Box mt={2} textAlign="center">
        <Button variant="contained" sx={
          {backgroundColor: "#3E065F", width: "100%", height:50}
        } onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default UserDataForm;

