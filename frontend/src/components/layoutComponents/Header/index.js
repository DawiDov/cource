import React from 'react'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import BiMoonStars from 'components/layoutComponents/Logo'
import { Switch } from '@mui/material'


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
        <Typography sx={{ fontStyle: 'oblique' }}>
          <div>
            Мастерская
          </div>
          <div>
            Желаний
          </div>
        </Typography> 
      </Typography>
      <Brightness4Icon />
      <Switch />
    </Toolbar>
  </AppBar>
)

export default Header
