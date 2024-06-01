import React from 'react'
import './stdsicklv.css'
import Student_head from '../../Component/Student_head/sthead'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadIcon from '@mui/icons-material/UploadFile';
import SaveIcon from '@mui/icons-material/send';

const stdsicklv = () => {
    return (
        <div>
            <Student_head />
            <div className='stdsicklv-big-rect1'>
                <div>
                    <h2 className='stdsicklv-top-head1'>Apply Sick Leave</h2>
                </div>
                <div className='stdsicklv-big-main-rect1'>
                    <div className='stdsicklv-sub-main-rect1'>
                        <div className='stdsicklv-main-txt-rec'>
                            <div>
                                <h2 className='stdsicklv-rect-topic'>Student ID:</h2>
                            </div>
                            <div className='stdsicklv-first-txt-rec'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch', borderRadius: 20 },
                                        display: 'flex', // Added for icon positioning
                                        alignItems: 'end',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Your student ID" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                                </Box>
                            </div>
                        </div>
                        <div className='stdsicklv-main-txt-rec'>
                            <div>
                                <h2 className='stdsicklv-rect-topic'>Student Name:</h2>
                            </div>
                            <div className='stdsicklv-first-txt-rec'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch', borderRadius: 20 },
                                        display: 'flex', // Added for icon positioning
                                        alignItems: 'end',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Your Name" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                                </Box>
                            </div>
                        </div>
                        <div className='stdsicklv-main-txt-rec'>
                            <div>
                                <h2 className='stdsicklv-rect-topic'>Course Name:</h2>
                            </div>
                            <div className='stdsicklv-first-txt-rec'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch', borderRadius: 20 },
                                        display: 'flex', // Added for icon positioning
                                        alignItems: 'end',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Your course name" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className='stdsicklv-sub-main-rect2'>
                        <div className='stdsicklv-main-txt-rec'>
                            <div>
                                <h2 className='stdsicklv-rect-topic'>Head Of Department:</h2>
                            </div>
                            <div className='stdsicklv-first-txt-rec'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch', borderRadius: 20 },
                                        display: 'flex', // Added for icon positioning
                                        alignItems: 'end',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Your department head name" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                                </Box>
                            </div>
                        </div>
                        <div className='stdsicklv-main-txt-rec'>
                            <div>
                                <h2 className='stdsicklv-rect-topic'>Leave Duration:</h2>
                            </div>
                            <div className='stdsicklv-first-txt-rec'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '30ch', borderRadius: 20 },
                                        display: 'flex', // Added for icon positioning
                                        alignItems: 'end',
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Leave duration" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                                </Box>
                            </div>
                        </div>
                        <div className='stdsicklv-main-txt-rec'>
                            <div>
                                <h2 className='stdsicklv-rect-topic'>Upload Document:</h2>
                            </div>
                            <div className='stdsicklv-first-upload-rec'>
                                <Stack direction="row" spacing={4}>
                                    <Button variant="contained" endIcon={<UploadIcon />} className='edit-btn-min' style={{ width: '100%', height: '55px', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                        Upload Document
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                    <div className='stdsicklv-send-btn'>
                        <Stack direction="row" spacing={4}>
                            <Button variant="contained" endIcon={<SaveIcon />} className='edit-btn-min' style={{ width: '70%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                Send
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default stdsicklv
