import React, { useState } from 'react';
import './edit2.css';
import Head from '../../Component/Head/head';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';

const edit2 = () => {
    const [courseId, setCourseId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [moduleCoordinatorName, setModuleCoordinatorName] = useState('');
    const [coordinatorPhoneNumber, setCoordinatorPhoneNumber] = useState('');
    const [noOfStudent, setNoOfStudent] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [descriptionOfCourse, setDescriptionOfCourse] = useState('');

    const [errors, setErrors] = useState({
        courseId: '',
        courseName: '',
        moduleCoordinatorName: '',
        coordinatorPhoneNumber: '',
        noOfStudent: '',
        courseDuration: '',
    });

    const handleCourseIdChange = (e) => {
        const value = e.target.value.toUpperCase();
        if (/^[A-Z0-9]*$/.test(value)) {
            setCourseId(value);
            setErrors((prev) => ({ ...prev, courseId: '' }));
        } else {
            setErrors((prev) => ({ ...prev, courseId: 'Only numbers and capital letters without spaces are allowed.' }));
        }
    };

    const handleCourseNameChange = (e) => {
        const value = e.target.value;
        if (/^[A-Za-z\s]*$/.test(value)) {
            setCourseName(value);
            setErrors((prev) => ({ ...prev, courseName: '' }));
        } else {
            setErrors((prev) => ({ ...prev, courseName: 'Only letters and spaces are allowed.' }));
        }
    };

    const handleModuleCoordinatorNameChange = (e) => {
        const value = e.target.value;
        if (/^[A-Za-z\s]*$/.test(value)) {
            setModuleCoordinatorName(value);
            setErrors((prev) => ({ ...prev, moduleCoordinatorName: '' }));
        } else {
            setErrors((prev) => ({ ...prev, moduleCoordinatorName: 'Only letters and spaces are allowed.' }));
        }
    };

    const handleCoordinatorPhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 10) {
            setCoordinatorPhoneNumber(value);
            setErrors((prev) => ({ ...prev, coordinatorPhoneNumber: value.length === 10 ? '' : 'Must be a 10-digit number.' }));
        } else {
            setErrors((prev) => ({ ...prev, coordinatorPhoneNumber: 'Only 10-digit numbers are allowed.' }));
        }
    };

    const handleNoOfStudentChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setNoOfStudent(value);
            setErrors((prev) => ({ ...prev, noOfStudent: '' }));
        } else {
            setErrors((prev) => ({ ...prev, noOfStudent: 'Only numbers are allowed.' }));
        }
    };

    const handleCourseDurationChange = (e) => {
        const value = e.target.value;
        if (/^[A-Za-z0-9\s]*$/.test(value)) {
            setCourseDuration(value);
            setErrors((prev) => ({ ...prev, courseDuration: '' }));
        } else {
            setErrors((prev) => ({ ...prev, courseDuration: 'Only letters and numbers are allowed.' }));
        }
    };

    const handleDescriptionChange = (e) => {
        setDescriptionOfCourse(e.target.value);
    };

    const handleSubmit = () => {
        // Add your submit logic here
        console.log({
            courseId,
            courseName,
            moduleCoordinatorName,
            coordinatorPhoneNumber,
            noOfStudent,
            courseDuration,
            descriptionOfCourse,
        });
    };

    return (
        <div>
            <Head />
            <div className='big-rect9'>
                <div>
                    <h2 className='top-head9'>Edit Course!</h2>
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
                                        marginTop: 7,
                                        backgroundColor: 'rgb(188, 187, 187)',
                                        borderRadius: 4,
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="courseId"
                                        label="Course ID"
                                        variant="standard"
                                        value={courseId}
                                        onChange={handleCourseIdChange}
                                        error={Boolean(errors.courseId)}
                                        helperText={errors.courseId}
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
                                        id="coordinatorPhoneNumber"
                                        label="Coordinator Phone Number"
                                        variant="standard"
                                        value={coordinatorPhoneNumber}
                                        onChange={handleCoordinatorPhoneNumberChange}
                                        error={Boolean(errors.coordinatorPhoneNumber)}
                                        helperText={errors.coordinatorPhoneNumber}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub9'>
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
                                        value={courseName}
                                        onChange={handleCourseNameChange}
                                        error={Boolean(errors.courseName)}
                                        helperText={errors.courseName}
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
                                        id="noOfStudent"
                                        label="No Of Students"
                                        variant="standard"
                                        value={noOfStudent}
                                        onChange={handleNoOfStudentChange}
                                        error={Boolean(errors.noOfStudent)}
                                        helperText={errors.noOfStudent}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='xs-add-sub9'>
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
                                        id="moduleCoordinatorName"
                                        label="Module Coordinator Name"
                                        variant="standard"
                                        value={moduleCoordinatorName}
                                        onChange={handleModuleCoordinatorNameChange}
                                        error={Boolean(errors.moduleCoordinatorName)}
                                        helperText={errors.moduleCoordinatorName}
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
                                        id="courseDuration"
                                        label="Course Duration"
                                        variant="standard"
                                        value={courseDuration}
                                        onChange={handleCourseDurationChange}
                                        error={Boolean(errors.courseDuration)}
                                        helperText={errors.courseDuration}
                                    />
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
                                <TextField
                                    id="descriptionOfCourse"
                                    label="Description Of Course"
                                    variant="standard"
                                    value={descriptionOfCourse}
                                    onChange={handleDescriptionChange}
                                />
                            </Box>
                        </div>
                    </div>
                    <div className='add-save-btn'>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<SaveIcon />}
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

export default edit2;
