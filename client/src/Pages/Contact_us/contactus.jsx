import React from 'react'
import './contactus.css';
import Homepage_head from '../../Component/Homepage_head/homepage';
import Homepage_footer from '../../Component/Homepage_footer/footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/send';

const contactus = () => {
    return (
        <div>
            <Homepage_head />
            <div className='contactus-main-big-big-rect'>
                <div className='contactus-main-big-rect'>
                    <div className='contactus-middle-txt-rect'>
                        <div className='cnt-top-main-txt-rect'>
                            <h1 className='cnt-top-main-txt1'>We are here to provide</h1>
                            <h1 className='cnt-top-main-txt2'>24x7 Support</h1>
                        </div>
                        <div className='first-top-txt-rect'>
                            <div className='first-top-txt1'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="First Name" variant="standard" />
                                </Box>

                            </div>
                            <div className='first-top-txt2'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Last Name" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='first-top-txt-rect'>
                            <div className='first-top-txt1'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="E-mail" variant="standard" />
                                </Box>

                            </div>
                            <div className='first-top-txt2'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Contact Number" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='second-top-txt-rect'>
                            <div className='second-top-txt1'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '116.5ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="How We Can Help You ?" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='second-top-txt-rect'>
                            <div className='second-top-txt1'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '116.5ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="Tell Us About You" variant="standard" />
                                </Box>
                            </div>
                        </div>
                        <div className='add-send-btn'>
                            <Stack direction="row" spacing={4}>
                                <Button variant="contained" endIcon={<SaveIcon />} className='edit-btn-min' style={{ width: '70%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                    Send
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <Homepage_footer />
        </div>
    )
}

export default contactus
