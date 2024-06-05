import React, { useState } from 'react';
import './edit1.css';
import Head from '../../Component/Head/head';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';

const edit1 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        lectureId: '',
        age: '',
        loginUserName: '',
        name: '',
        contactNumber: '',
        email: '',
        gender: '',
        module: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        lectureId: '',
        age: '',
        loginUserName: '',
        name: '',
        contactNumber: '',
        email: '',
        gender: '',
        module: '',
        password: '',
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let error = '';

        switch (id) {
            case 'lectureId':
                if (/^[A-Z0-9]*$/.test(value)) {
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only numbers and capital letters without spaces are allowed.';
                }
                break;
            case 'age':
                if (/^\d{0,2}$/.test(value)) { // Updated regex to allow up to 2 digits
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only 2-digit numbers are allowed.';
                }
                break;
            case 'loginUserName':
            case 'name':
                if (/^[A-Za-z\s]*$/.test(value)) {
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only letters and spaces are allowed.';
                }
                break;
            case 'contactNumber':
                if (/^\d{0,10}$/.test(value)) { // Updated regex to allow up to 10 digits
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Must be a 10-digit number.';
                }
                break;
            case 'email':
                setFormValues({ ...formValues, [id]: value });

                if (value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Invalid email format.';
                }
                break;
            case 'gender':
                if (value === 'male' || value === 'female') {
                    setFormValues({ ...formValues, gender: value });
                } else {
                    error = 'Please select either male or female.';
                }
                break;
            case 'module':
                if (/^[A-Za-z\s]*$/.test(value)) {
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only letters and spaces are allowed.';
                }
                break;
            case 'password':
                setFormValues({ ...formValues, [id]: value });
                if (!/^[A-Z]/.test(value)) {
                    error = 'Password must start with a capital letter.';
                } else if (value.length < 8) {
                    error = 'Password must be at least 8 characters long.';
                }
                break;
            default:
                setFormValues({ ...formValues, [id]: value });
                break;
        }

        setErrors({ ...errors, [id]: error });
    };

    const handleSubmit = () => {
        // Add your submit logic here
        console.log(formValues);
    };

    return (
        <div>
            <Head />
            <div className='big-rect7'>
                <div>
                    <h2 className='top-head7'>Edit Lecture!</h2>
                </div>
                <div className='std-info-rect7'>
                    <div>
                        <h2 className='add-top-head7'>Lecture Information!</h2>
                    </div>
                    <div className='xs-add-main-info-rect7'>

                        <div className='xs-add-sub7'>
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
                                    <TextField
                                        id="lectureId"
                                        label="Lecture ID"
                                        variant="standard"
                                        value={formValues.lectureId}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.lectureId)}
                                        helperText={errors.lectureId}
                                    />
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
                                    <TextField
                                        id="age"
                                        label="Age"
                                        variant="standard"
                                        value={formValues.age}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.age)}
                                        helperText={errors.age}
                                    />
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
                                    <TextField
                                        id="loginUserName"
                                        label="Login User Name"
                                        variant="standard"
                                        value={formValues.loginUserName}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.loginUserName)}
                                        helperText={errors.loginUserName}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub7'>
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
                                    <TextField
                                        id="name"
                                        label="Name"
                                        variant="standard"
                                        value={formValues.name}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.name)}
                                        helperText={errors.name}
                                    />
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
                                    <TextField
                                        id="contactNumber"
                                        label="Contact Number"
                                        variant="standard"
                                        value={formValues.contactNumber}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.contactNumber)}
                                        helperText={errors.contactNumber}
                                    />
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
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="standard"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub7'>
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
                                    <TextField
                                        id="gender"
                                        label="Gender"
                                        variant="standard"
                                        select
                                        SelectProps={{ native: true }}
                                        value={formValues.gender}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.gender)}
                                        helperText={errors.gender}
                                    >
                                        <option value=""></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </TextField>
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
                                    <TextField
                                        id="module"
                                        label="Module"
                                        variant="standard"
                                        value={formValues.module}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.module)}
                                        helperText={errors.module}
                                    />
                                </Box>
                            </div>
                            <div>
                                <Box sx={{ display: 'flex', flexWrap: '                            wrap' }}>
                                    <div>
                                        <FormControl
                                            sx={{
                                                marginTop: 7,
                                                marginLeft: 1,
                                                backgroundColor: 'rgb(188, 187, 187)',
                                                borderRadius: 4,
                                                '& > :not(style)': { m: 1, width: '90%', height: '50px' },
                                            }}
                                            variant="standard"
                                        >
                                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={formValues.password}
                                                onChange={handleInputChange}
                                                error={Boolean(errors.password)}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            {errors.password && (
                                                <Box sx={{ color: 'red', marginTop: 1 }}>
                                                    {errors.password}
                                                </Box>
                                            )}
                                        </FormControl>
                                    </div>
                                </Box>
                            </div>
                        </div>

                    </div>
                    <div className='add-save-btn7'>
                        <Stack direction="row" spacing={4}>
                            <Button
                                variant="contained"
                                endIcon={<SaveIcon />}
                                className='edit-btn-min4'
                                style={{ width: '70%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default edit1;


