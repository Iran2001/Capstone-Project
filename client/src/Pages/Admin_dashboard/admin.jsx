import React from 'react'
import './admin.css'
import Head from '../../Component/Head/head'
import Image1 from '../../assets/student.png';
import Image2 from '../../assets/teacher.png';
import Image3 from '../../assets/online-course.png';
import Image4 from '../../assets/line-chart.png';
import Image5 from '../../assets/moon.png';
import Image6 from '../../assets/person.png';
import Image7 from '../../assets/lecturer.png';
import Image8 from '../../assets/arrow.png';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        borderRadius: theme.shape.borderRadius,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    id,
    name,
    marks,
    average,
    course
) {
    return { id, name, marks, average, course };
}

const rows = [
    createData(220100009, 'M.A.Heshan Rashmika', 'A+', '80%', 'IT Course'),
    createData(220100009, 'M.A.Heshan Rashmika', 'A+', '80%', 'IT Course'),
    createData(220100009, 'M.A.Heshan Rashmika', 'A+', '80%', 'IT Course'),
    createData(220100009, 'M.A.Heshan Rashmika', 'A+', '80%', 'IT Course'),
    createData(220100009, 'M.A.Heshan Rashmika', 'A+', '80%', 'IT Course'),

];

const sample = [1, 10, 30, 50, 70, 90, 100];

const admin = () => {

    const img1 = {
        width: '30%',
    };

    const img2 = {
        width: '40%',
    };


    return (
        <div>
            <Head />
            <div className='big-rect'>
                <div>
                    <h2 className='top-head'>Welcome To Admin Dashboard!</h2>
                </div>


                <div className='xs-main-rect'>

                    <div className='xs-rect'>
                        <h3 className='student'>Students</h3>
                        <img src={Image1} alt="image" style={img1} className='std-icon' />
                        <h1 className='quantity'>145</h1>
                    </div>
                    <div className='xs-rect'>
                        <h3 className='student'>Teachers</h3>
                        <img src={Image2} alt="image" style={img1} className='std-icon' />
                        <h1 className='quantity'>12</h1>
                    </div>
                    <div className='xs-rect'>
                        <h3 className='student'>Courses</h3>
                        <img src={Image3} alt="image" style={img1} className='std-icon' />
                        <h1 className='quantity'>8%</h1>
                    </div>

                </div>


                <div className='m-main-rect'>

                    <div className='m-rect'>
                        <h3 className='tp'>Overview</h3>
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
                                height={190}
                            />
                        </Box>
                    </div>
                    <div className='m-rect'>
                        <h3 className='tp'>Events</h3>
                        <div className='lbl-1'>
                            <img src={Image5} className='lbl-icon' />
                            <div className='lbl-detail'>
                                <h5>Poya Day In Chaithya At 12.00p.m.</h5>
                            </div>
                        </div>
                        <div className='lbl-2'>
                            <img src={Image6} className='lbl-icon' />
                            <div className='lbl-detail'>
                                <h5>Sharamadana 23/04/2024</h5>
                            </div>
                        </div>
                        <div className='lbl-2'>
                            <img src={Image7} className='lbl-icon' />
                            <div className='lbl-detail'>
                                <h5>Guest lecture 24/04/2024</h5>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='m-main-rect'>

                    <div className='m-rect'>
                        <h3 className='tp'>Overview</h3>
                        <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left">ID</StyledTableCell>
                                        <StyledTableCell align="center">Name</StyledTableCell>
                                        <StyledTableCell align="center">marks</StyledTableCell>
                                        <StyledTableCell align="center">Average</StyledTableCell>
                                        <StyledTableCell align="center">Course</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.id}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                                            <StyledTableCell align="center">{row.marks}</StyledTableCell>
                                            <StyledTableCell align="center">{row.average}</StyledTableCell>
                                            <StyledTableCell align="center">{row.course}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='m-rect'>
                        <h3 className='tp'>Student Activity</h3>
                        <div className='lbl-1'>
                            <img src={Image8} className='lbl-icon' />
                            <div className='lbl-detail'>
                                <h5>CS Assigment Submitions</h5>
                            </div>
                        </div>
                        <div className='lbl-2'>
                            <img src={Image8} className='lbl-icon' />
                            <div className='lbl-detail'>
                                <h5>CS Assigment Submition</h5>
                            </div>
                        </div>
                        <div className='lbl-2'>
                            <img src={Image8} className='lbl-icon' />
                            <div className='lbl-detail'>
                                <h5>MAD Assigment Submition</h5>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default admin
