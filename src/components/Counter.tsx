import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
<Box
  sx={{
    background: `linear-gradient(to right, rgba(0, 0, 255, ${count / 10}), rgba(0, 255, 255, ${count / 10}))`,
    padding: 2,
    borderRadius: 2,
    color: "#333",
    height:"350px",
    justifyContent: "center",
    alignItems:"center",
    textAlign: 'center',
    border: '1px solid #333',
    transition: 'background-color 0.3s ease', // Add transition for smooth color change
  }}
>
  <Typography variant="h4">Counter</Typography>
  <Typography variant="h2">{count}</Typography>
  <Button variant="contained" onClick={increment}>+</Button>
  <Button variant="contained" onClick={reset}>Reset</Button>
  <Button variant="contained" onClick={decrement}>-</Button>
</Box>
  );
};

export default Counter;
