import React from 'react'
import './leavereq.css'
import Student_head from '../../Component/Student_head/sthead'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/send';

const leavereq = () => {
    return (
        <div>
            <Student_head />
            <div className='leavereq-big-rect1'>
                <div>
                    <h2 className='leavereq-top-head1'>Apply Leave Request!</h2>
                </div>
                <div className='leavereq-big-main-rect1'>
                    <div className='leavereq-sub-main-rect1'>
                        <div className='leavereq-main-txt-rec'>
                            <div>
                                <h2 className='leavereq-rect-topic'>Student ID:</h2>
                            </div>
                            <div className='leavereq-first-txt-rec'>
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
                        <div className='leavereq-main-txt-rec'>
                            <div>
                                <h2 className='leavereq-rect-topic'>Student Name:</h2>
                            </div>
                            <div className='leavereq-first-txt-rec'>
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
                        <div className='leavereq-main-txt-rec'>
                            <div>
                                <h2 className='leavereq-rect-topic'>Course Name:</h2>
                            </div>
                            <div className='leavereq-first-txt-rec'>
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
                    <div className='leavereq-sub-main-rect2'>
                        <div className='leavereq-main-txt-rec'>
                            <div>
                                <h2 className='leavereq-rect-topic'>Head Of Department:</h2>
                            </div>
                            <div className='leavereq-first-txt-rec'>
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
                        <div className='leavereq-main-txt-rec'>
                            <div>
                                <h2 className='leavereq-rect-topic'>Leave Duration:</h2>
                            </div>
                            <div className='leavereq-first-txt-rec'>
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
                    </div>
                    <div className='leavereq-sub-main-rect3'>
                        <div>
                            <h2 className='leavereq-rect-topic1'>Reason For Leave:</h2>
                        </div>
                        <div className='leavereq-first-txt-rec'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '116.5ch', borderRadius: 20 },
                                    display: 'flex', // Added for icon positioning
                                    alignItems: 'end',
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Reason for leave request" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                            </Box>
                        </div>
                    </div>
                    <div className='leavereq-send-btn'>
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

export default leavereq
