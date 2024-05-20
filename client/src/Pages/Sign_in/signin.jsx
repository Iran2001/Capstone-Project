import React from 'react'
import './signin.css'
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

const signin = () => {

    const signimg2 = {
        width: '100%',
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div>
            <Sign_side />
            <div className='signin-main-big-rect'>

                <div className='signin-main-photo1'>
                    <img src={SignupImg1} alt="image" style={signimg2} className='signin-image' />
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

                    <div className='form-form-form'>

                        <h6 className='txt-field-topic-in'>User Name:</h6>
                        <div className='fieldsty-in'>
                            <div className='name-sub-text-rect-in shared-box-width'> 
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
                        </div>
                        <div className='pass-main-text-rect-in'>
                            <div className='pass-sub-text-rect-in'>

                                <h6 className='txt-field-topic1-in'>Password:</h6>
                                <div className='fieldsty-in shared-box-width'>
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
                    <div className='forgot-psw-rect-in'>
                        <h6 className='forgot-psw-topic-in'>Forget Password?</h6>
                    </div>
                    <div className='already-reg-rect-in'>
                        <h6 className='already-reg-topic-in'>Don't have an account?</h6>
                        <a href='#' className='signup-link-txt'>Sign Up</a>
                    </div>
                    <div>
                        <button className='signin-main-btn'>Sign In</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default signin
