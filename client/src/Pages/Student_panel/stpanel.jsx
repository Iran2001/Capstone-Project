import React from 'react'
import './stpanel.css'
import Student_head from '../../Component/Student_head/sthead'
import Image1 from '../../assets/student.png';
import Image2 from '../../assets/teacher.png';
import Image3 from '../../assets/attendance-device.png';
import Image4 from '../../assets/line-chart.png';
import Image5 from '../../assets/moon.png';
import Image6 from '../../assets/person.png';
import Image7 from '../../assets/lecturer.png';
import Image8 from '../../assets/refresh.png';
import Image9 from '../../assets/arrow.png';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const sample = [1, 10, 30, 50, 70, 90, 100];

const stpanel = () => {

    const img1 = {
        width: '30%',
    };

    const img2 = {
        width: '40%',
    };


    return (
        <div>
            <Student_head />
            <div className='stpanel-big-rect1'>
                <div>
                    <h2 className='stpanel-top-head1'>Welcome To Dashboard!</h2>
                </div>


                <div className='stpanel-xs-main-rect1'>

                    <div className='stpanel-xs-rect1'>
                        <h3 className='stpanel-student1'>All Modules</h3>
                        <img src={Image1} alt="image" style={img1} className='stpanel-std-icon1' />
                        <h1 className='stpanel-quantity1'>12</h1>
                    </div>
                    <div className='stpanel-xs-rect1'>
                        <h3 className='stpanel-student1'>All Projects</h3>
                        <img src={Image2} alt="image" style={img1} className='stpanel-std-icon1' />
                        <h1 className='stpanel-quantity1'>2</h1>
                    </div>
                    <div className='stpanel-xs-rect1'>
                        <h3 className='stpanel-student1'>Semester Attended</h3>
                        <img src={Image3} alt="image" style={img1} className='stpanel-std-icon1' />
                        <h1 className='stpanel-quantity1'>8%</h1>
                    </div>

                </div>


                <div className='stpanel-m-main-rect1'>

                    <div className='stpanel-m-rect1'>
                        <h3 className='stpanel-tp1'>Semester Attended</h3>
                        <Box sx={{ width: '100%', maxWidth: 500 }}>
                            <LineChart
                                xAxis={[{ data: sample }]}
                                yAxis={[
                                    { id: 'linearAxis', scaleType: 'linear' },
                                    { id: 'logAxis', scaleType: 'log' },
                                ]}
                                series={[
                                    { yAxisKey: 'linearAxis', data: sample, label: 'Lec' },
                                    { yAxisKey: 'logAxis', data: sample, label: 'Std' },
                                ]}
                                leftAxis="linearAxis"
                                rightAxis="logAxis"
                                height={180}
                            />
                        </Box>
                    </div>
                    <div className='stpanel-m-rect1'>
                        <h3 className='stpanel-tp1'>Upcoming Events</h3>
                        <div className='stpanel-lbl-11'>
                            <img src={Image5} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5>Poya Day In Chaithya At 12.00p.m.</h5>
                            </div>
                        </div>
                        <div className='stpanel-lbl-21'>
                            <img src={Image6} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5>Sharamadana 23/04/2024</h5>
                            </div>
                        </div>
                        <div className='stpanel-lbl-21'>
                            <img src={Image7} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5>Guest lecture 24/04/2024</h5>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='stpanel-m-main-rect1'>

                    <div className='stpanel-m-rect1'>
                        <h3 className='stpanel-tp1'>Recent Monthly Duty</h3>
                        <div className='stpanel-lbl-11'>
                            <img src={Image8} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5></h5>
                            </div>
                        </div>
                        <div className='stpanel-lbl-21'>
                            <img src={Image8} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5></h5>
                            </div>
                        </div>
                        <div className='stpanel-lbl-21'>
                            <img src={Image8} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                    <div className='stpanel-m-rect1'>
                        <h3 className='stpanel-tp1'>Student Activity</h3>
                        <div className='stpanel-lbl-11'>
                            <img src={Image9} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5>CS Assigment Submitions</h5>
                            </div>
                        </div>
                        <div className='stpanel-lbl-21'>
                            <img src={Image9} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5>CS Assigment Submition</h5>
                            </div>
                        </div>
                        <div className='stpanel-lbl-21'>
                            <img src={Image9} className='stpanel-lbl-icon1' />
                            <div className='stpanel-lbl-detail1'>
                                <h5>MAD Assigment Submition</h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default stpanel
