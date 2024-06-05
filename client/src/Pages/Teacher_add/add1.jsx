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


const add1 = () => {
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
                                        id="lectureId"
                                        label="Lecture ID"
                                        variant="standard"
                                        value={formValues.lectureId}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.lectureId)}
                                        helperText={errors.lectureId}

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
                                        label="Age"
                                        variant="standard"
                                        value={formValues.age}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.age)}
                                        helperText={errors.age}

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
                                        id="loginUserName"
                                        label="Login User Name"
                                        variant="standard"
                                        value={formValues.loginUserName}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.loginUserName)}
                                        helperText={errors.loginUserName}

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
                                        id="name"
                                        label="Name"
                                        variant="standard"
                                        value={formValues.name}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.name)}
                                        helperText={errors.name}

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
                                        id="contactNumber"
                                        label="Contact Number"
                                        variant="standard"
                                        value={formValues.contactNumber}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.contactNumber)}
                                        helperText={errors.contactNumber}

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
                                        label="Email"
                                        variant="standard"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email}

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

                    <div className='add-save-btn6'>
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

export default add1;

