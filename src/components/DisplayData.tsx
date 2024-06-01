import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const DisplayData: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <Box sx={{
      border:"3px solid #700B97",
      borderRadius:"12px",
      padding:"3rem",
      letterSpacing:"3rem"
    }}>
      <Typography variant="h6">Name: {data.name}</Typography>
      <Typography variant="h6">Address: {data.address}</Typography>
      <Typography variant="h6">Email: {data.email}</Typography>
      <Typography variant="h6">Phone: {data.phone}</Typography>
    </Box>
  );
};

export default DisplayData;
