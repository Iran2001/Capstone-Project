import React from 'react'
import './sickleave.css';
import Head from '../../Component/Head/head';

import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
    course_name,
    informations,
    phone_number,
) {
    return { id, name, course_name, informations, phone_number };
}

const rows = [
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', 'Some detail about student', '0786386950'),

];

const sickleave = () => {


    const [openDetails, setOpenDetails] = React.useState({}); // State to track open details

    const handleOpenDetails = (rowId) => {
        setOpenDetails({ ...openDetails, [rowId]: !openDetails[rowId] });
    };

    return (
        <div>
            <Head />
            <div className='sickleave-main-big-big-rect'>
                <div>
                    <h2 className='big-main-rect-topic'>Welcome to Student Sick Leave Request!</h2>
                </div>
                <div className='sickleave-mid-big-rect'>
                    <div>
                        <h2 className='big-mid-rect-topic'>Student Sick Leave Request</h2>
                    </div>
                    <div className='sickleave-main-table-rect'>
                        <div className='sickleave-std-table-rect'>
                            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">ID</StyledTableCell>
                                            <StyledTableCell align="center">Name</StyledTableCell>
                                            <StyledTableCell align="center">Course Name</StyledTableCell>
                                            <StyledTableCell align="center">Reason</StyledTableCell>
                                            <StyledTableCell align="center">Contact Number</StyledTableCell>
                                            <StyledTableCell align="center">Action</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <React.Fragment key={row.id}>
                                                <StyledTableRow>
                                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                                    <StyledTableCell align="center">{row.course_name}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            sx={{ backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}
                                                            onClick={() => handleOpenDetails(row.id)}
                                                        >
                                                            {openDetails[row.id] ? 'Hide Details' : 'View'}
                                                        </Button>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{row.phone_number}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <Button variant="contained" size="small" sx={{ mr: 1, backgroundColor: 'rgb(0, 230, 58)', color: 'white',':hover': { backgroundColor: 'rgb(0, 130, 33)' } }}>
                                                            Accept
                                                        </Button>
                                                        <Button variant="contained" size="small" color="error" sx={{ ':hover': { backgroundColor: 'darkred' } }}>
                                                            Reject
                                                        </Button>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                                {openDetails[row.id] && (
                                                    <TableRow>
                                                        <StyledTableCell colSpan={5}>
                                                            {/* Display detailed information from the row.detail property */}
                                                            <p>{row.informations}</p>
                                                        </StyledTableCell>
                                                    </TableRow>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sickleave
