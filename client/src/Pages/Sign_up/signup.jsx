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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value) || value === '') {
      setUsername(value);
      setUsernameError('');
    } else {
      setUsernameError('Username can only contain letters and spaces.');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.includes('@') || value.endsWith('.com')) {
      if (emailRegex.test(value)) {
        setEmailError('');
      } else {
        setEmailError('Email is not valid.');
      }
    } else {
      setEmailError('');
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (/^(?=.*[A-Z])[A-Za-z\d!@#$%^&*()_+]{0,}$/.test(value) || value === '') {
      setPassword(value);
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 8 characters long and start with a capital letter.');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === password) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match.');
    }
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
        alert('Sign up successful');
        navigate('/signin'); // Navigate to the sign-in page after successful sign-up
      } else {
        alert(`Sign up failed: ${result.message}`);
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
          <img src={SignupImg} alt="Signup" className='signup-image' />
          <img src={SignupImg1} alt="Signup" className='signup-image' />
        </div>
        <div className='signup-main-form-1'>
          <div>
            <h2 className='signup-main-topic'>Welcome to Nalanda IUHS Campus</h2>
          </div>
          <div>
            <h6 className='signup-sub-min-topic'>Enter your details to create an account</h6>
            <h6 className='signup-sub-min-topic'>Sign up for an account</h6>
          </div>
          <div>
            <h3 className='signup-sub-main-topic'>Sign Up</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <h6 className='txt-field-topic'>User Name:</h6>
              <div className='fieldsty'>
              <h6 className='txt-field-topic-in'>User Name:</h6>
              <div className='fieldsty-in'>
                <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <TextField
                    id="username"
                    label=""
                    variant="standard"
                    value={username}
                    onChange={handleUsernameChange}
                    fullWidth
                    error={Boolean(usernameError)}
                    helperText={<span style={{ color: 'red', fontSize: '12px' }}>{usernameError}</span>}
                  />
                </Box>
              </div>
              <h6 className='txt-field-topic'>Email:</h6>
              <div className='fieldsty'>
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
                    onChange={handleEmailChange}
                    fullWidth
                    error={Boolean(emailError)}
                    helperText={<span style={{ color: 'red', fontSize: '12px' }}>{emailError}</span>}
                  />
                </Box>
              </div>
              <div className='pass-main-text-rect'>
                <div className='pass-sub-text-rect'>
                  <h6 className='txt-field-topic1'>Password:</h6>
                  <div className='fieldsty1'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl variant="standard" fullWidth error={Boolean(passwordError)}>
                        <InputLabel htmlFor="password"></InputLabel>
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={handlePasswordChange}
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
                        {passwordError && <span className="error-message" style={{ color: 'red', fontSize: '12px' }}>{passwordError}</span>}
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div className='pass-sub-text-rect'>
                  <h6 className='txt-field-topic2'>Confirm Password:</h6>
                  <div className='fieldsty2'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl variant="standard" fullWidth error={Boolean(confirmPasswordError)}>
                        <InputLabel htmlFor="confirm-password"></InputLabel>
                        <Input
                          id="confirm-password"
                          type={showPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
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
                        {confirmPasswordError && <span className="error-message" style={{ color: 'red', fontSize: '12px' }}>{confirmPasswordError}</span>}
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <div className='already-reg-rect'>
              <h6 className='already-reg-topic'>Already registered? <a href='/signin'>Sign in</a></h6>
            </div>
            <div>
              <button type="submit" className='signup-main-btn'>Sign Up</button>
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
