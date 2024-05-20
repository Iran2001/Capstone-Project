import React from 'react'
import './adminre_pwd.css'
import Sign_side from '../../Component/Sign_side/side';
import ResPswImg1 from '../../assets/signupphoto.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const adminre_pwd = () => {

    const signimg3 = {
        width: '100%',
    };

    return (
        <div>
            <Sign_side />
            <div className='admin-resetpwd-main-big-rect'>

                <div className='admin-resetpwd-main-photo1'>
                    <img src={ResPswImg1} alt="image" style={signimg3} className='admin-signin-image' />
                </div>

                <div className='admin-resetpwd-main-form-1'>
                    <div>
                        <h2 className='admin-resetpwd-main-topic'>Welcome to Nalanda IUHS Campus</h2>
                    </div>
                    <div>
                        <h6 className='admin-resetpwd-sub-min-topic'>Let us help you</h6>
                    </div>
                    <div>
                        <h3 className='admin-resetpwd-sub-main-topic'>Forget Password</h3>
                    </div>

                    <div className='admin-resetpwd-form-form-form'>

                        <h6 className='admin-resetpwd-txt-field-topic-in'>Email Address:</h6>
                        <div className='admin-resetpwd-fieldsty-in'>
                            <div className='admin-name-sub-text-rect-in shared-box-width'> 
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
                    <div>
                        <button className='admin-resetpwd-signin-main-btn'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default adminre_pwd
