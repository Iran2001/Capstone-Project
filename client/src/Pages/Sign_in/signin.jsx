import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';
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

const Signin = () => {
  const [username, setUsername] = useState('');
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
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Login successful');
        navigate('/student-panel'); // Navigate to the student panel after successful sign-in
      } else {
        alert(`Login failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Sign_side />
      <div className='signin-main-big-rect'>
        <div className='signin-main-photo1'>
          <img src={SignupImg1} alt="Signin" className='signin-image' />
        </div>
        <div className='signin-main-form-1'>
          <div>
            <h2 className='signin-main-topic'>Welcome to Nalanda IUHS Campus</h2>
          </div>
          <div>
            <h6 className='signin-sub-min-topic'>Sign in to your account</h6>
          </div>
          <div>
            <h3 className='signin-sub-main-topic'>Sign In</h3>
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
            <div className='forgot-psw-rect-in'>
              <h6 className='forgot-psw-topic-in'>Forget Password?</h6>
            </div>
            <div className='already-reg-rect-in'>
              <h6 className='already-reg-topic-in'>Don't have an account?</h6>
              <a className='already-reg-btn-in' href='/signup'>
                Register Now
              </a>
            </div>
            <div className='signin-btn-rect'>
              <button className='signin-btn-main' type='submit'>
                <span className='signin-btn-text'>Sign In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
