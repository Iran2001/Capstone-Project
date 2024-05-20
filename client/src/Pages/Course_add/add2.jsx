import React from 'react'
import './add2.css';
import Head from '../../Component/Head/head';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';

const add2 = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Head />
            <div className='big-rect9'>
                <div>
                    <h2 className='top-head9'>Add Course!</h2>
                </div>
                <div className='std-info-rect9'>
                    <div>
                        <h2 className='add-top-head9'>Course Information!</h2>
                    </div>
                    <div className='xs-add-main-info-rect9'>

                        <div className='xs-add-sub9'>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Course ID" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Coordinater Phone Number" variant="standard" />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub9'>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Course Name" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="No Of Student" variant="standard" />
                                </Box>
                            </div>

                        </div>

                        <div className='xs-add-sub9'>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Module Coordinator Name" variant="standard" />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7, // Add margin-top: 20px
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Course Duration" variant="standard" />
                                </Box>
                            </div>

                        </div>

                    </div>
                    <div className='xs-add-des-info-rect9'>
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    backgroundColor: 'rgb(188, 187, 187)',
                                    borderRadius: 4,
                                    '& > :not(style)': { m: 1, width: '97%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Description Of Course" variant="standard" />
                            </Box>
                        </div>
                    </div>
                    <div className='add-save-btn'>
                        <Stack direction="row" spacing={4}>
                            <Button variant="contained" endIcon={<SaveIcon />} className='edit-btn-min' style={{ width: '70%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                save
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default add2
