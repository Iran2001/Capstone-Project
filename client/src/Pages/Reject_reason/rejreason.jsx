import React from 'react'
import './rejreason.css'
import Student_head from '../../Component/Student_head/sthead'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadIcon from '@mui/icons-material/UploadFile';
import SaveIcon from '@mui/icons-material/send';

const rejreason = () => {
    return (
        <div>
            <Student_head />
            <div className='rejreason-big-rect1'>
                <div className='rejreason-main-big-rect'>
                    <div className='rejreason-bottom-big-rect'>

                        <div>
                            <h2 className='rejreason-bottom-rect-topic'>Reason For Reject</h2>
                        </div>
                        <div className='rejreason-bottom-sub-rect'>
                            <div>
                                <h2 className='rejreason-rect-topic'>Upload Medical Documents:</h2>
                            </div>
                            <div className='rejreason-first-top-rect1'>
                                <Stack direction="row" spacing={4}>
                                    <Button variant="contained" endIcon={<UploadIcon />} className='edit-btn-min' style={{ width: '30%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                        Upload Document
                                    </Button>
                                </Stack>
                            </div>
                            <div>
                                <h2 className='rejreason-rect-topic'>Reason:</h2>
                            </div>
                            <div className='rejreason-second-top-rect1'>
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
                                    <TextField id="standard-basic" label="Reason for reject the assign duty" variant="filled" sx={{ flexGrow: 1, mr: 1 }} />

                                </Box>
                            </div>
                            <div className='rejreason-send-btn'>
                                <Stack direction="row" spacing={4}>
                                    <Button variant="contained" endIcon={<SaveIcon />} className='edit-btn-min' style={{ width: '70%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                        Send
                                    </Button>
                                </Stack>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default rejreason
