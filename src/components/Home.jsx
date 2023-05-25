import React from 'react';
import { Typography, Button } from '@mui/material';
import library from './images/old-library-book.png'
import { Link } from 'react-router-dom'; 
import { WidthFull } from '@mui/icons-material';


const Home = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'Lucida Handwriting',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: 320,
    right: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-center',
  };

  return (
    <div>
      <div className="image-home">
        <Typography style={gradientStyle}>Home</Typography> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={library} alt="logo" width={500} />
      </div>

      <div style={buttonContainerStyle}>
        <Button variant="contained" size="large" style={{ backgroundColor: '#f32170' ,marginBottom: '10px' }}>
          <Link to={"/l"} style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </Button>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
        <Button variant="contained" size="large" style={{ backgroundColor: '#cf23cf',marginBottom: '10px' }}>
          <Link to={"/s"} style={{ color: 'white', textDecoration: 'none' }} > Sign up</Link>
        </Button>
      </div>  <br/><br/><br/>
      <Typography variant="h4" style={gradientStyle}>"Nothing Is Pleasanter Than A Library"</Typography>
      <Typography variant='h5' style={{ fontFamily: 'Papyrus' }}>-Walter Savage Landor</Typography>
    </div>
  );
};

export default Home;
