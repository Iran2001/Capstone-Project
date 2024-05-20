import React from 'react'
import './resetpsw.css'
import Sign_side from '../../Component/Sign_side/side';
import ResPswImg1 from '../../assets/signupphoto.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const resetpsw = () => {

    const signimg3 = {
        width: '100%',
    };

    return (
        <div>
            <Sign_side />
            <div className='resetpwd-main-big-rect'>

                <div className='resetpwd-main-photo1'>
                    <img src={ResPswImg1} alt="image" style={signimg3} className='signin-image' />
                </div>

                <div className='resetpwd-main-form-1'>
                    <div>
                        <h2 className='resetpwd-main-topic'>Welcome to Nalanda IUHS Campus</h2>
                    </div>
                    <div>
                        <h6 className='resetpwd-sub-min-topic'>Let us help you</h6>
                    </div>
                    <div>
                        <h3 className='resetpwd-sub-main-topic'>Forget Password</h3>
                    </div>

                    <div className='resetpwd-form-form-form'>

                        <h6 className='resetpwd-txt-field-topic-in'>Your Student ID:</h6>
                        <div className='resetpwd-fieldsty-in'>
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

                    </div>
                    <div className='resetpwd-already-reg-rect-in'>
                        <h6 className='resetpwd-already-reg-topic-in'>Create an new account?</h6>
                        <a href='#' className='resetpwd-signup-link-txt'>Sign Up</a>
                    </div>
                    <div>
                        <button className='resetpwd-signin-main-btn'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default resetpsw
