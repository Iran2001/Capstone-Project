import React, { useState } from 'react';
import './add.css';
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


const add = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        age: '',
        courseName: '',
        email: '',
        admissionId: '',
        gender: '',
        phoneNumber: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        age: '',
        courseName: '',
        email: '',
        admissionId: '',
        gender: '',
        phoneNumber: '',
        password: '',
    });

const Add = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        gender: '',
        age: '',
        email: '',
        pnumber: '',
        cname: '',
        aid: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        fname: false,
        lname: false,
        gender: false,
        age: false,
        email: false,
        pnumber: false,
        cname: false,
        aid: false,
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


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let error = '';

        switch (id) {
            case 'firstName':
            case 'lastName':
            case 'courseName':
                if (/^[A-Za-z\s]*$/.test(value)) {
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only letters and spaces are allowed.';
                }
                break;
            case 'age':
                if (/^\d*$/.test(value) && value.length <= 2) {
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only 2-digit numbers are allowed.';
                }
                break;
            case 'admissionId':
                if (/^[A-Z0-9]*$/.test(value)) {
                    setFormValues({ ...formValues, [id]: value });
                } else {
                    error = 'Only numbers and capital letters without spaces are allowed.';
                }
                break;
            case 'phoneNumber':
                if (/^\d*$/.test(value) && value.length <= 10) {
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

    const handleGenderChange = (e) => {
        const value = e.target.value;
        if (value === 'male' || value === 'female') {
            setFormValues({ ...formValues, gender: value });
            setErrors({ ...errors, gender: '' });
        } else {
            setErrors({ ...errors, gender: 'Please select either male or female.' });
        }
    };

    const handleSubmit = () => {
        // Add your submit logic here
        console.log(formValues);

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
            fname: '',
            lname: '',
            gender: '',
            age: '',
            email: '',
            pnumber: '',
            cname: '',
            aid: '',
            password: ''
        });
        setFormErrors({
            fname: false,
            lname: false,
            gender: false,
            age: false,
            email: false,
            pnumber: false,
            cname: false,
            aid: false,
            password: false
        });
    };

    const handleSubmit = () => {
        // Check if any field has errors
        const hasErrors = Object.values(formErrors).some(error => error);
        if (!hasErrors) {
            // Submit the form
            fetch('http://localhost:5000/api/students', { // Ensure this URL matches your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Student added successfully');
                    resetForm(); // Reset the form after successful submission
                    // You can handle success here, like showing a success message or redirecting
                } else {
                    console.error('Error adding student to database');
                    // Handle error response from the server
                }
            })
            .catch(error => {
                console.error('Error adding student to database:', error);
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
            <div className='big-rect3'>
                <div>
                    <h2 className='top-head3'>Add Student!</h2>
                </div>
                <div className='std-info-rect3'>
                    <div>
                        <h2 className='add-top-head3'>Student Information!</h2>
                    </div>
                    <div className='xs-add-main-info-rect3'>

                        <div className='xs-add-sub3'>
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

                                        id="firstName"
                                        label="First Name"
                                        variant="standard"
                                        value={formValues.firstName}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.firstName)}
                                        helperText={errors.firstName}

                                        id="fname"
                                        name="fname"
                                        label="First Name"
                                        variant="standard"
                                        value={formData.fname}
                                        onChange={handleChange}
                                        error={formErrors.fname}

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

                                        label="Age"
                                        variant="standard"
                                        value={formValues.age}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.age)}
                                        helperText={errors.age}

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

                                        id="courseName"
                                        label="Course Name"
                                        variant="standard"
                                        value={formValues.courseName}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.courseName)}
                                        helperText={errors.courseName}

                                        id="cname"
                                        name="cname"
                                        label="Course Name"
                                        variant="standard"
                                        value={formData.cname}
                                        onChange={handleChange}
                                        error={formErrors.cname}
 
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub3'>
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
 
                                        id="lastName"
                                        label="Last Name"
                                        variant="standard"
                                        value={formValues.lastName}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.lastName)}
                                        helperText={errors.lastName}

                                        id="lname"
                                        name="lname"
                                        label="Last Name"
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
                                        id="email"
 
                                        label="Email"
                                        variant="standard"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email}

                                        name="email"
                                        label="Email"
                                        variant="standard"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={formErrors.email}
 
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
 
                                        id="admissionId"
                                        label="Admission ID"
                                        variant="standard"
                                        value={formValues.admissionId}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.admissionId)}
                                        helperText={errors.admissionId}

                                        id="aid"
                                        name="aid"
                                        label="Admission ID"
                                        variant="standard"
                                        value={formData.aid}
                                        onChange={handleChange}
                                        error={formErrors.aid}
 
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub3'>
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
 
                                        label="Gender"
                                        variant="standard"
                                        select
                                        SelectProps={{ native: true }}
                                        value={formValues.gender}
                                        onChange={handleGenderChange}
                                        error={Boolean(errors.gender)}
                                        helperText={errors.gender}
                                    >
                                        <option value=""></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </TextField>

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
 
                                        id="phoneNumber"
                                        label="Phone Number"
                                        variant="standard"
                                        value={formValues.phoneNumber}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.phoneNumber)}
                                        helperText={errors.phoneNumber}

                                        id="pnumber"
                                        name="pnumber"
                                        label="Phone Number"
                                        variant="standard"
                                        value={formData.pnumber}
                                        onChange={handleChange}
                                        error={formErrors.pnumber}
 
                                    />
                                </Box>
                            </div>
                            <div>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <div>
 
                                        <FormControl sx={{
                                            marginTop: 7,
                                            marginLeft: 1,
                                            backgroundColor: 'rgb(188, 187, 187)',
                                            borderRadius: 4,
                                            '& > :not(style)': { m: 1, width: '90%', height: '50px' },
                                        }} variant="standard">
                                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={formValues.password}
                                                onChange={handleInputChange}
                                                error={Boolean(errors.password)}

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
                    <div className='add-save-btn'>
                        <Stack direction="row" spacing={4}>
                            <Button
                                variant="contained"
                                endIcon={<SaveIcon />}
                                className='edit-btn-min'
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

}
}

export default add;


