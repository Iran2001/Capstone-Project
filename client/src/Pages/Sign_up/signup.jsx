import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Sign_side from '../../Component/Sign_side/side';
import SignupImg1 from '../../assets/signupphoto.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Signup successful');
        navigate('/signin'); // Navigate to the sign-in page after successful signup
      } else {
        alert(`Signup failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Sign_side />
      <div className='signup-main-big-rect'>
        <div className='signup-main-photo1'>
          <img src={SignupImg1} alt="Signup" className='signup-image' />
        </div>
        <div className='signup-main-form-1'>
          <div>
            <h2 className='signup-main-topic'>Welcome to Nalanda IUHS Campus</h2>
          </div>
          <div>
            <h6 className='signup-sub-min-topic'>Sign up for an account</h6>
          </div>
          <div>
            <h3 className='signup-sub-main-topic'>Sign Up</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <h6 className='txt-field-topic-in'>User Name:</h6>
              <div className='fieldsty-in'>
                <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <TextField
                    id="username"
                    label=""
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                  />
                </Box>
              </div>
              <h6 className='txt-field-topic-in'>Email:</h6>
              <div className='fieldsty-in'>
                <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <TextField
                    id="email"
                    label=""
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </Box>
              </div>
              <div className='pass-main-text-rect-in'>
                <div className='pass-sub-text-rect-in'>
                  <h6 className='txt-field-topic1-in'>Password:</h6>
                  <div className='fieldsty-in'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="password"></InputLabel>
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <div className='already-reg-rect-in'>
              <h6 className='already-reg-topic-in'>Already have an account?</h6>
              <a className='already-reg-btn-in' href='/signin'>
                Sign In
              </a>
            </div>
            <div className='signup-btn-rect'>
              <button className='signup-btn-main' type='submit'>
                <span className='signup-btn-text'>Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
