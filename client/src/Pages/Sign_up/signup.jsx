import React, { useState } from 'react';
import{Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import Sign_side from '../../Component/Sign_side/side';
import SignupImg from '../../assets/signupphoto.jpg';
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = username ? "" : "Username is required";
    tempErrors.email = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/).test(email) ? "" : "Email is not valid";
    tempErrors.password = password.length >= 6 ? "" : "Password must be at least 6 characters long";
    tempErrors.confirmPassword = password === confirmPassword ? "" : "Passwords do not match";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
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
          alert('Sign up successful');
        } else {
          alert(`Sign up failed: ${result.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <Sign_side />
      <div className='signup-main-big-rect'>
        <div className='signup-main-photo1'>
          <img src={SignupImg} alt="Signup" className='signup-image' />
        </div>
        <div className='signup-main-form-1'>
          <div>
            <h2 className='signup-main-topic'>Welcome to Nalanda IUHS Campus</h2>
          </div>
          <div>
            <h6 className='signup-sub-min-topic'>Enter your details to create an account</h6>
          </div>
          <div>
            <h3 className='signup-sub-main-topic'>Sign Up</h3>
          </div>
         
          <form onSubmit={handleSubmit}>
            <div>
              <h6 className='txt-field-topic'>User Name:</h6>
              <div className='fieldsty'>
                <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <TextField
                    id="username"
                    label=""
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    error={Boolean(errors.username)}
                    helperText={errors.username}
                  />
                </Box>
              </div>
              <h6 className='txt-field-topic'>Email:</h6>
              <div className='fieldsty'>
                <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <TextField
                    id="email"
                    label=""
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                </Box>
              </div>
              <div className='pass-main-text-rect'>
                <div className='pass-sub-text-rect'>
                  <h6 className='txt-field-topic1'>Password:</h6>
                  <div className='fieldsty'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl variant="standard" fullWidth error={Boolean(errors.password)}>
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
                        {errors.password && <span className="error-text">{errors.password}</span>}
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div className='pass-sub-text-rect'>
                  <h6 className='txt-field-topic1'>Confirm Password:</h6>
                  <div className='fieldsty'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl variant="standard" fullWidth error={Boolean(errors.confirmPassword)}>
                        <InputLabel htmlFor="confirm-password"></InputLabel>
                        <Input
                          id="confirm-password"
                          type={showPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
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
                        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <div className='already-reg-rect'>
              <h6 className='already-reg-topic'>Already Registered?</h6>
              <a href='/Sign_in/signin' className='login-link-txt'>Login</a>
            </div>
            <div>
              <button type="submit" className='signup-main-btn'>Sign Up</button>
            </div>
          </form>

          <div>
            {/* Add signup button here */}
            <button className='signup-main-btn' onClick={() => {}}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
