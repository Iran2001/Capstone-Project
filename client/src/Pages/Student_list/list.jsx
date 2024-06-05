import React, { useEffect, useState } from 'react';
import './list.css';
import Head from '../../Component/Head/head';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const List = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student data from the server
        fetch('http://localhost:5000/api/students')
            .then(response => response.json())
            .then(data => {
                // Update the students state with the fetched data
                setStudents(data);
            })
            .catch(error => console.error('Error fetching student data:', error));
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <div>
            <Head />
            <div className='big-rect2'>
                <div>
                    <h2 className='top-head2'>Welcome To Student List!</h2>
                </div>
                <div className='std-table-rect'>
                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Course Name</TableCell>
                                    <TableCell align="center">Other Info</TableCell>
                                    <TableCell align="center">Contact Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student) => (
                                    <TableRow key={student.studentId}>
                                        <TableCell align="center">{student.studentId}</TableCell>
                                        <TableCell align="center">{student.fname} {student.lname}</TableCell>
                                        <TableCell align="center">{student.cname}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                size="small"
                                                sx={{ backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}
                                                onClick={() => handleOpenDetails(student.studentId)}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center">{student.pnumber}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

export default List;
