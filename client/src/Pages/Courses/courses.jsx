import React, { useState } from 'react';
import './courses.css';
import Homepage_head from '../../Component/Homepage_head/homepage';
import Homepage_footer from '../../Component/Homepage_footer/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import It_dipphoto from '../../assets/IT_dipphoto.jpg';
import Graphic_photo from '../../assets/Graphic_photo.jpg';
import English_photo from '../../assets/English_photo.jpg';
import Duration from '../../assets/history.png';
import Available from '../../assets/available.png';
import Campus from '../../assets/campus.png';

const Courses = () => {
    const [formData, setFormData] = useState({
        courseId: '',
        courseName: '',
        moduleCoordinatorName: '',
        coordinatorPhoneNumber: '',
        noOfStudent: '',
        courseDuration: '',
        descriptionOfCourse: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Course added successfully') {
                console.log('Course added successfully');
                setFormData({
                    courseId: '',
                    courseName: '',
                    moduleCoordinatorName: '',
                    coordinatorPhoneNumber: '',
                    noOfStudent: '',
                    courseDuration: '',
                    descriptionOfCourse: ''
                });
            } else {
                console.error('Error adding course to database:', data);
            }
        })
        .catch(error => {
            console.error('Error adding course to database:', error);
        });
    };

    const duration_icon = {
        maxWidth: '6%',
    };

    return (
        <div>
            <Homepage_head />
            <div className='course-main-big-big-rect'>
                <div className='course-main-sub-big-rect'>
                    <div className='course-sub-big-rect'>
                        <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(250, 255, 255)'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={It_dipphoto}
                                    alt="Diploma in Information Technology"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Diploma in Information Technology
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={Duration} style={duration_icon} alt="Duration" />
                                        . Duration : Full time 2 years<br />
                                        <img src={Available} style={duration_icon} alt="Available" />
                                        . Intakes : October 2023<br />
                                        <img src={Campus} style={duration_icon} alt="Campus" />
                                        . Campus : IUHS Galle Campus
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='course-sub-big-rect'>
                        <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(250, 255, 255)' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Graphic_photo}
                                    alt="Higher National Diploma in Graphic Designing"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Higher National Diploma in Graphic Designing                                
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={Duration} style={duration_icon} alt="Duration" />
                                        . Duration : Full time 3 years<br />
                                        <img src={Available} style={duration_icon} alt="Available" />
                                        . Intakes : February 2024<br />
                                        <img src={Campus} style={duration_icon} alt="Campus" />
                                        . Campus : IUHS Galle Campus
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='course-sub-big-rect1'>
                        <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(250, 255, 255)' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={English_photo}
                                    alt="IELTS Course in British English"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        IELTS Course in British English 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={Duration} style={duration_icon} alt="Duration" />
                                        . Duration : Full time 2 years<br />
                                        <img src={Available} style={duration_icon} alt="Available" />
                                        . Intakes : January 2024<br />
                                        <img src={Campus} style={duration_icon} alt="Campus" />
                                        . Campus : IUHS Galle Campus
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="courseId"
                        label="Course ID"
                        value={formData.courseId}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="courseName"
                        label="Course Name"
                        value={formData.courseName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="moduleCoordinatorName"
                        label="Module Coordinator Name"
                        value={formData.moduleCoordinatorName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="coordinatorPhoneNumber"
                        label="Coordinator Phone Number"
                        value={formData.coordinatorPhoneNumber}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="noOfStudent"
                        label="Number of Students"
                        value={formData.noOfStudent}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="courseDuration"
                        label="Course Duration"
                        value={formData.courseDuration}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="descriptionOfCourse"
                        label="Description of Course"
                        value={formData.descriptionOfCourse}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
            <Homepage_footer />
        </div>
    );
};

export default Courses;
