import React from 'react'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'

import BiMoonStars from 'components/layoutComponents/Logo'


const Header = () => (
  <AppBar 
    position="absolute">
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}>
      <BiMoonStars 
        width='50px' 
        hight='50px' 
        fontSize='30px'/>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}>
        Мастерская Магии
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
