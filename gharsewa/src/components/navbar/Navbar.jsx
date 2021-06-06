import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { spacing } from '@material-ui/system';
import Button from '@material-ui/core/Button';

export default function Navbar() {
  return (  
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className='title'>
          gharSewa.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}