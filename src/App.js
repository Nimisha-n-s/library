
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

import AdminLogin from './components/AdminLogin';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App"> 
    <Navigation />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/l" element={< Login/>} />
    
     <Route path='/s' element={<Signup/>} />
     
     <Route path='/a' element={<AdminLogin/>} />
     <Route path='/hp' element={<Homepage/>} />
    </Routes>
    </div>
  );
}

export default App;
