import React  from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from 'components/layoutComponents/Header'
import Footer from 'components/layoutComponents/Footer'

const Layout = () => (
  <header>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Outlet />
          </Paper>
        </Container>
      </Box>
    </Box>
    <CssBaseline />
    <Footer />
  </header>
)


export default Layout
