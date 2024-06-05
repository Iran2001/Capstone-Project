import React, { useState } from 'react';
import './add1.css';
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

const Add1 = () => {
    const [formData, setFormData] = useState({
        lname: '',
        gender: '',
        age: '',
        lnumber: '',
        module: '',
        username: '',
        email: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        lname: false,
        gender: false,
        age: false,
        lnumber: false,
        module: false,
        username: false,
        email: false,
        password: false
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateField = (name, value) => {
        // Basic validation example, you can add more complex validations as needed
        if (value.trim() === '') {
            setFormErrors({ ...formErrors, [name]: true });
        } else {
            setFormErrors({ ...formErrors, [name]: false });
        }
    };

    const resetForm = () => {
        setFormData({
            lname: '',
            gender: '',
            age: '',
            lnumber: '',
            module: '',
            username: '',
            email: '',
            password: ''
        });
        setFormErrors({
            lname: false,
            gender: false,
            age: false,
            lnumber: false,
            module: false,
            username: false,
            email: false,
            password: false
        });
    };

    const handleSubmit = () => {
        // Check if any field has errors
        const hasErrors = Object.values(formErrors).some(error => error);
        if (!hasErrors) {
            // Submit the form
            fetch('http://localhost:5000/api/teachers', { // Ensure this URL matches your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Teacher added successfully');
                    resetForm(); // Reset the form after successful submission
                    // You can handle success here, like showing a success message or redirecting
                } else {
                    console.error('Error adding teacher to database');
                    // Handle error response from the server
                }
            })
            .catch(error => {
                console.error('Error adding teacher to database:', error);
                // Handle network errors or other exceptions
            });
        } else {
            console.error('Form has errors. Cannot submit.');
            // Handle form errors
        }
    };

    return (
        <div>
            <Head />
            <div className='big-rect6'>
                <div>
                    <h2 className='top-head6'>Add Lecture!</h2>
                </div>
                <div className='std-info-rect6'>
                    <div>
                        <h2 className='add-top-head6'>Lecture Information!</h2>
                    </div>
                    <div className='xs-add-main-info-rect6'>

                        <div className='xs-add-sub6'>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="lname" 
                                        name="lname" 
                                        label="Lecture Name" 
                                        variant="standard" 
                                        value={formData.lname} 
                                        onChange={handleChange} 
                                        error={formErrors.lname}
                                    />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="age" 
                                        name="age" 
                                        label="Age" 
                                        variant="standard" 
                                        value={formData.age} 
                                        onChange={handleChange} 
                                        error={formErrors.age}
                                    />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="username" 
                                        name="username" 
                                        label="Username" 
                                        variant="standard" 
                                        value={formData.username} 
                                        onChange={handleChange} 
                                        error={formErrors.username}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub6'>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="lnumber" 
                                        name="lnumber" 
                                        label="Lecture Number" 
                                        variant="standard" 
                                        value={formData.lnumber} 
                                        onChange={handleChange} 
                                        error={formErrors.lnumber}
                                    />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="module" 
                                        name="module" 
                                        label="Module" 
                                        variant="standard" 
                                        value={formData.module} 
                                        onChange={handleChange} 
                                        error={formErrors.module}
                                    />
                                </Box>
                            </div>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="email" 
                                        name="email" 
                                        label="Email" 
                                        variant="standard" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        error={formErrors.email}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub6'>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                        id="gender" 
                                        name="gender" 
                                        label="Gender" 
                                        variant="standard" 
                                        value={formData.gender} 
                                        onChange={handleChange} 
                                        error={formErrors.gender}
                                    />
                                </Box>
                            </div>
                            <div>
                                <FormControl
                                    sx={{
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    variant="standard"
                                >
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleChange}
                                        error={formErrors.password}
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
                                </FormControl>
                            </div>
                            <div>
                                <Stack direction="row" spacing={2}>
                                    <Button 
                                        variant="contained" 
                                        endIcon={<SaveIcon />} 
                                        sx={{ width: 130, height: 40, borderRadius: 4 }}
                                        onClick={handleSubmit}
                                    >
                                        Add
                                    </Button>
                                </Stack>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add1;
