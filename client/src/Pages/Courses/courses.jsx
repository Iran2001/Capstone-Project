import React from 'react'
import './courses.css';
import Homepage_head from '../../Component/Homepage_head/homepage';
import Homepage_footer from '../../Component/Homepage_footer/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import It_dipphoto from '../../assets/IT_dipphoto.jpg';
import Graphic_photo from '../../assets/Graphic_photo.jpg';
import English_photo from '../../assets/English_photo.jpg';
import Duration from '../../assets/history.png';
import Available from '../../assets/available.png';
import Campus from '../../assets/campus.png';

const courses = () => {

    const duration_icon = {
        maxWidth: '6%',
    }

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
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Diploma in Information Technology
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={Duration} style={duration_icon} />
                                        . Duration : Full time 2 years<br></br>
                                        <img src={Available} style={duration_icon} />
                                        . Intakes : October 2023<br></br>
                                        <img src={Campus} style={duration_icon} />
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
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Higher National Diploma in Graphic Designing                                
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={Duration} style={duration_icon} />
                                        . Duration : Full time 3 years<br></br>
                                        <img src={Available} style={duration_icon} />
                                        . Intakes : Feburary 2024<br></br>
                                        <img src={Campus} style={duration_icon} />
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
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        IELTS Course in British English 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <img src={Duration} style={duration_icon} />
                                        . Duration : Full time 2 years<br></br>
                                        <img src={Available} style={duration_icon} />
                                        . Intakes : January 2024<br></br>
                                        <img src={Campus} style={duration_icon} />
                                        . Campus : IUHS Galle Campus
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    
                </div>
            </div>
            <Homepage_footer />
        </div>
    )
}

export default courses
