import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import background from './images/background.jpg';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Login = () => {
  return (
    <div style={{ padding: 80, backgroundImage: `url(${background})` }}>
      <br /><br /><br />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)', height: '70vh', backdropFilter: 'blur(10px)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
          <Stack direction="column" alignItems="center" spacing={1}><br/>
            <Typography variant="h4"><LoginIcon style={{ color: "#f32170" }} />Login </Typography><br/>             
            <TextField id="outlined-basic" label="Username" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
            <Button variant="contained" size="large" style={{ backgroundColor: '#f32170', marginBottom: '100px' }}><Link to={"/hp"}  style={{ color: 'white', textDecoration: 'none' }}>Login</Link></Button>
            <Typography>Don't have an account?<Button variant="text"><Link to={"/s"}>Sign up</Link></Button></Typography>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
