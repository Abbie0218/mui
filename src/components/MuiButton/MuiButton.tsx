import React from 'react';
import Button from '@mui/material/Button';

interface IProps{
  onClick : any,
  label: any
}
const MuiButton = (props:IProps) => {
  return (
    <Button variant="contained" color="primary" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default MuiButton;