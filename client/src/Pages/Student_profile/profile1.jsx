import React from 'react'
import './profile1.css';
import Student_head from '../../Component/Student_head/sthead';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const profile1 = () => {
    return (
        <div>
            <Student_head />
            <div className='std-prof-main-big-rect'>
                <div className='std-prof-big-rect'>
                    <div>
                        <h2 className='std-prof-top-head'>Welcome To Your Profile!</h2>
                    </div>
                    <div className='std-prof-sub-sub-rect'></div>
                    <div className='std-prof-sub-big-rect'>

                        <div className='std-prof-sub-small-rect1'>
                            <div>
                                <h2 className='std-prof-head-txt1'>User Name</h2>
                            </div>
                            <div className='std-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="User name" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='std-prof-head-txt2'>Email</h2>
                            </div>
                            <div className='std-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="Email address" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <h2 className='std-prof-head-txt2'>Contact Number</h2>
                            </div>
                            <div className='std-prof-txt-field'>
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
                                <h2 className='std-prof-head-txt2'>Course Name</h2>
                            </div>
                            <div className='std-prof-txt-field'>
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
                                    <TextField id="outlined-basic" label="Course name" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='std-prof-sub-small-rect2'>
                            <div>
                                <h2 className='std-prof-head-txt'>Profile Photo</h2>
                            </div>
                            <div className='std-prof-photo'></div>
                            <div className='std-edit-edit-btn'>
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

export default profile1
