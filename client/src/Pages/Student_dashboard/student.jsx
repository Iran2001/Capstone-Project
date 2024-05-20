import React from 'react'
import './student.css'
import Head from '../../Component/Head/head'
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

const student = () => {

    const img1 = {
        width: '30%',
    };

    const img2 = {
        width: '40%',
    };


    return (
        <div>
            <Head />
            <div className='big-rect1'>
                <div>
                    <h2 className='top-head1'>Welcome To Student Dashboard!</h2>
                </div>


                <div className='xs-main-rect1'>

                    <div className='xs-rect1'>
                        <h3 className='student1'>All Modules</h3>
                        <img src={Image1} alt="image" style={img1} className='std-icon1' />
                        <h1 className='quantity1'>12</h1>
                    </div>
                    <div className='xs-rect1'>
                        <h3 className='student1'>All Projects</h3>
                        <img src={Image2} alt="image" style={img1} className='std-icon1' />
                        <h1 className='quantity1'>2</h1>
                    </div>
                    <div className='xs-rect1'>
                        <h3 className='student1'>Semester Attended</h3>
                        <img src={Image3} alt="image" style={img1} className='std-icon1' />
                        <h1 className='quantity1'>8%</h1>
                    </div>

                </div>


                <div className='m-main-rect1'>

                    <div className='m-rect1'>
                        <h3 className='tp1'>Semester Attended</h3>
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
                    <div className='m-rect1'>
                        <h3 className='tp1'>Upcoming Events</h3>
                        <div className='lbl-11'>
                            <img src={Image5} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5>Poya Day In Chaithya At 12.00p.m.</h5>
                            </div>
                        </div>
                        <div className='lbl-21'>
                            <img src={Image6} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5>Sharamadana 23/04/2024</h5>
                            </div>
                        </div>
                        <div className='lbl-21'>
                            <img src={Image7} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5>Guest lecture 24/04/2024</h5>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='m-main-rect1'>

                    <div className='m-rect1'>
                        <h3 className='tp1'>Recent Monthly Duty</h3>
                        <div className='lbl-11'>
                            <img src={Image8} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5></h5>
                            </div>
                        </div>
                        <div className='lbl-21'>
                            <img src={Image8} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5></h5>
                            </div>
                        </div>
                        <div className='lbl-21'>
                            <img src={Image8} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                    <div className='m-rect1'>
                        <h3 className='tp1'>Student Activity</h3>
                        <div className='lbl-11'>
                            <img src={Image9} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5>CS Assigment Submitions</h5>
                            </div>
                        </div>
                        <div className='lbl-21'>
                            <img src={Image9} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5>CS Assigment Submition</h5>
                            </div>
                        </div>
                        <div className='lbl-21'>
                            <img src={Image9} className='lbl-icon1' />
                            <div className='lbl-detail1'>
                                <h5>MAD Assigment Submition</h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default student
