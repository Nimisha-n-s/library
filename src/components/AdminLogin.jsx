import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import {  Stack } from '@mui/material';
import ad from './images/ad.jpg';

function validateForm(username, password) {
  if (!username || username.trim() === '') {
    return 'Please enter a valid username.';
  }

  if (!password || password.trim() === '') {
    return 'Please enter a valid password.';
  }

  return '';
}

function AdminLogin() {
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    const error = validateForm(username, password);
    if (error) {
      setUsernameError(username ? '' : 'Please enter a valid username.');
      setPasswordError(password ? '' : 'Please enter a valid password.');
    } else {
      console.log('Form submitted:', {
        username,
        password,
      });
      setUsernameError('');
      setPasswordError('');
    }
  };



  return (
    <div style={{backgroundImage: `url(${ad})`, backgroundRepeat:"no-repeat", backgroundSize:'cover', height: '100vh' }}>

      <br/><br/><br/><br/><br/>
    <Box
     
    >
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            p: 3,

          }}
        >
          <Stack direction="column" alignItems="center" spacing={1}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <Avatar src="http://www.w3.org/2000/svg" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                sx={{ color: 'blue', width: '200px' }}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                error={Boolean(usernameError)}
                helperText={usernameError}
                onChange={() => setUsernameError('')}
              /><br/>
              <TextField
                sx={{ color: 'blue', width: '200px' }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={Boolean(passwordError)}
                helperText={passwordError}
                onChange={() => setPasswordError('')}
              />
              <br/>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Admin Login
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
    </div>
  );
}

export default AdminLogin;
