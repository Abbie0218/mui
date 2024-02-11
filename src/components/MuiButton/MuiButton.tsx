import React from 'react';
import Button from '@mui/material/Button';

const MuiButton = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default MuiButton;