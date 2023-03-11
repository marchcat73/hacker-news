import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Link to="/">Home</Link>
        </Grid>
      </Grid>
      <hr />
      <Outlet />
    </Box>
  );
};

export default Navbar;
