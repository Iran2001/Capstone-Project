import React from 'react'
import './profile2.css';
import Head from '../../Component/Head/head';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const profile2 = () => {
    return (
        <div>
            <Head />
            <div className='teacher-prof-main-big-rect'>
                <div className='teacher-prof-big-rect'>
                    <div>
                        <h2 className='teacher-prof-top-head'>Welcome To Your Profile!</h2>
                    </div>
                    <div className='teacher-prof-sub-sub-rect'></div>
                    <div className='teacher-prof-sub-big-rect'>

                        <div className='teacher-prof-sub-small-rect1'>
                            <div>
                                <h2 className='teacher-prof-head-txt1'>User Name</h2>
                            </div>
                            <div className='teacher-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="user name" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='teacher-prof-head-txt2'>Email</h2>
                            </div>
                            <div className='teacher-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="E-mail address" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='teacher-prof-head-txt2'>Mobile Number</h2>
                            </div>
                            <div className='teacher-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="Contact number" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='teacher-prof-head-txt2'>Module</h2>
                            </div>
                            <div className='teacher-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="Module name" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='teacher-prof-sub-small-rect2'>
                            <div>
                                <h2 className='teacher-prof-head-txt'>Profile Photo</h2>
                            </div>
                            <div className='teacher-prof-photo'></div>
                            <div className='teacher-edit-edit-btn'>
                                <Stack direction="row" spacing={2} width={80}>
                                    <Button variant="contained" startIcon={<EditIcon />} style={{ width: '100%', backgroundColor: 'rgb(0, 0, 79)', color: 'white', fontSize: '14px' }}>
                                        Edit
                                    </Button>
                                </Stack>
                            </div>
                        </div>

                    </div>
                    <div className='std-update-update-btn'>
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

export default profile2
