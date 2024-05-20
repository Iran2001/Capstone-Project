import React from 'react'
import './signup.css'
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

const signup = () => {

  const signimg1 = {
    width: '100%',
  };

  const txtfieldStyle = {
    width: '80%',
    padding: '8px',
    border: '2px solid #ccc',
    borderRadius: '10px',
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div>
      <Sign_side />
      <div className='signup-main-big-rect'>

        <div className='signup-main-photo1'>
          <img src={SignupImg} alt="image" style={signimg1} className='signup-image' />
        </div>

        <div className='signup-main-form-1'>
          <div>
            <h2 className='signup-main-topic'>Welcome to Nalanda IUHS Campus</h2>
          </div>
          <div>
            <h6 className='signup-sub-min-topic'>Enter your details to create account</h6>
          </div>
          <div>
            <h3 className='signup-sub-main-topic'>Sign Up</h3>
          </div>

          <div>

            <h6 className='txt-field-topic'>User Name:</h6>
            <div className='fieldsty'>
              <Box
                component="form"
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  marginLeft: 1, // Add margin-top: 20px
                  backgroundColor: 'white',
                  borderRadius: 2,
                  '& > :not(style)': { m: 1, width: '91%', height: '30px' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="" variant="standard" />
              </Box>
            </div>

            <h6 className='txt-field-topic'>Email:</h6>
            <div className='fieldsty'>
              <Box
                component="form"
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  marginLeft: 1, // Add margin-top: 20px
                  backgroundColor: 'white',
                  borderRadius: 2,
                  '& > :not(style)': { m: 1, width: '91%', height: '30px' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="" variant="standard" />
              </Box>
            </div>

            <div className='pass-main-text-rect'>
              <div className='pass-sub-text-rect'>

                <h6 className='txt-field-topic1'>Password:</h6>
                <div className='fieldsty'>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                      <FormControl sx={{
                        marginLeft: 1, // Add margin-top: 20px
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '& > :not(style)': { m: 1, width: '91%', height: '30px' },
                      }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password"></InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword ? 'text' : 'password'}
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
                    </div>
                  </Box>
                </div>
              </div>

              <div className='pass-sub-text-rect'>

                <h6 className='txt-field-topic1'>Confirm Password:</h6>
                <div className='fieldsty'>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                      <FormControl sx={{
                        marginLeft: 1, // Add margin-top: 20px
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '& > :not(style)': { m: 1, width: '91%', height: '30px' },
                      }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password"></InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword ? 'text' : 'password'}
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
                    </div>
                  </Box>
                </div>

              </div>
            </div>

          </div>
          <div className='already-reg-rect'>
            <h6 className='already-reg-topic'>Already Registered?</h6>
            <a href='#' className='login-link-txt'>Login</a>
          </div>
          <div>
            <button className='signup-main-btn'>Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default signup
