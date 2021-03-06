import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CycloneIcon from '@mui/icons-material/Cyclone';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from 'redux/actions/authentication/authAC'
import { getToken } from 'redux/api/auth';


const LogIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    isAuthenticated,
    username,
    password,
  } = useSelector(
    state => ({
      isAuthenticated: state.auth.isAuthenticated,
      username: state.auth.username,
      password: state.auth.password,
    })
  )

  const handleChangeLogin = (e) => {
    dispatch(setUsername(e.target.value))
  }

  const handleChangePass = (e) => {
    dispatch(setPassword(e.target.value))
  }

  
  const handleAuthentification = () => {
    dispatch(getToken(username,password))
    navigate('/')
  }

  if (isAuthenticated) {
    return <Navigate to='/' replace />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <CycloneIcon fontSize='large' />
        </Avatar>
        <Typography component="h1" variant="h5">
          Доступ в Мастерскую
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 , textAlign: 'center'}}>
          <TextField
            onChange={handleChangeLogin}
            value={username}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Имя волшебника"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleChangePass}
            value={password}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Заклинание доступа"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            onClick={handleAuthentification}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '200px'}}>
            колдовать
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LogIn
