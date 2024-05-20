import React from 'react'
import './profile.css';
import Head from '../../Component/Head/head';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const profile = () => {
    return (
        <div>
            <Head />
            <div className='user-prof-main-big-rect'>
                <div className='user-prof-big-rect'>
                    <div>
                        <h2 className='user-prof-top-head'>Welcome To Your Profile!</h2>
                    </div>
                    <div className='user-prof-sub-sub-rect'></div>
                    <div className='user-prof-sub-big-rect'>

                        <div className='user-prof-sub-small-rect1'>
                            <div>
                                <h2 className='user-prof-head-txt1'>User Name</h2>
                            </div>
                            <div className='user-prof-txt-field'>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: -1, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 2,
                                        '& > :not(style)': { m: 1, width: '97%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="M. A. Heshan Rashmika" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='user-prof-head-txt2'>Email</h2>
                            </div>
                            <div className='user-prof-txt-field'>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: -1, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 2,
                                        '& > :not(style)': { m: 1, width: '97%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="heshan@gmail.com" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='user-prof-head-txt2'>Mobile Number</h2>
                            </div>
                            <div className='user-prof-txt-field'>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: -1, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 2,
                                        '& > :not(style)': { m: 1, width: '97%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="0786386950" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='user-prof-head-txt2'>Position</h2>
                            </div>
                            <div className='user-prof-txt-field'>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: -1, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 2,
                                        '& > :not(style)': { m: 1, width: '97%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Administrator(Acadamic)" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='user-prof-head-txt2'>Password</h2>
                            </div>
                            <div className='user-prof-txt-field'>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: -1, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 2,
                                        '& > :not(style)': { m: 1, width: '97%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="IT Diploma" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='user-prof-sub-small-rect2'>
                            <div>
                                <h2 className='user-prof-head-txt'>Profile Photo</h2>
                            </div>
                            <div className='user-prof-photo'></div>
                            <div className='edit-edit-btn'>
                                <Stack direction="row" spacing={2} width={80}>
                                    <Button variant="contained" startIcon={<EditIcon />} style={{ width: '100%', backgroundColor: 'rgb(0, 0, 79)', color: 'white', fontSize: '14px' }}>
                                        Edit
                                    </Button>
                                </Stack>
                            </div>
                        </div>

                    </div>
                    <div className='update-update-btn'>
                        <Stack direction="row" spacing={2} width={190}>
                            <Button variant="contained" startIcon={<EditIcon />} style={{ width: '100%', backgroundColor: 'rgb(0, 0, 79)', color: 'white', fontSize: '14px' }}>
                                Update Profile
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
