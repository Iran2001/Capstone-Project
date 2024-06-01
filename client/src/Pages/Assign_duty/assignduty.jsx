import React from 'react';
import './assignduty.css';
import Head from '../../Component/Head/head';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
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
    phone_number,
) {
    return { id, name, course_name, phone_number };
}

const rows = [
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),
    createData(220100009, 'M.A.Heshan Rashmika', 'IT Diploma', '0786386950'),

];


const assignduty = () => {

    const [openDetails, setOpenDetails] = React.useState({}); // State to track open details

    const handleOpenDetails = (rowId) => {
        setOpenDetails({ ...openDetails, [rowId]: !openDetails[rowId] });
    };

    return (
        <div>
            <Head />
            <div className='asduty-big-rect8'>
                <div>
                    <h2 className='asduty-top-head8'>Welcome To Duty Assign!</h2>
                </div>

                <div className='asduty-xs-add-sub7'>
                    <div>
                        <h2 className='asduty-top-head8'>Add work</h2>
                    </div>
                    <div>
                        <h2 className='available-std-txt-topic'>Student ID </h2>
                    </div>
                    <div className='btn-btn shared-box-width'>
                        <Box
                            component="form"
                            sx={{
                                marginTop: -1, // Add margin-top: 20px
                                backgroundColor: 'rgb(188, 187, 187)',
                                borderRadius: 2,
                                '& > :not(style)': { m: 1, width: '90%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Enter student ID " variant="standard" />
                        </Box>
                    </div>
                    <div>
                        <h2 className='available-std-txt-topic'>Place / Work</h2>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                marginTop: -1, // Add margin-top: 20px
                                backgroundColor: 'rgb(188, 187, 187)',
                                borderRadius: 2,
                                '& > :not(style)': { m: 1, width: '97%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="What is the place & work?" variant="standard" />
                        </Box>
                    </div>
                    <div>
                        <div className='asduty-add-save-btn7'>
                            <Stack direction="row" spacing={4}>
                                <Button variant="contained" endIcon={<SaveIcon />} className='edit-btn-min4' style={{ width: '100%', backgroundColor: 'rgb(0, 0, 79)', color: 'white' }}>
                                    save
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='available-std'>Available Students</h2>
                </div>

                <div className='asduty-std-table-rect'>
                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">Course Name</StyledTableCell>
                                    <StyledTableCell align="center">Phone Number</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell align="center">{row.id}</StyledTableCell>
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{row.course_name}</StyledTableCell>
                                        <StyledTableCell align="center">{row.phone_number}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default assignduty
