import React from 'react';
import './list2.css';
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
    course_coordinator,
    detail,
    phone_number,
) {
    return { id, name, course_coordinator, detail, phone_number };
}

const rows = [
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
    createData('CID001', 'IT Diploma', 'H.M.Perera', 'Some detail about student', '0786386950'),
 
];


const list2 = () => {

    const [openDetails, setOpenDetails] = React.useState({}); // State to track open details

  const handleOpenDetails = (rowId) => {
    setOpenDetails({ ...openDetails, [rowId]: !openDetails[rowId] });
  };

    return (
        <div>
            <Head />
            <div className='big-rect8'>
                <div>
                    <h2 className='top-head8'>Welcome To Course List!</h2>
                </div>
                <div className='std-table-rect8'>
                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Course ID</StyledTableCell>
                                    <StyledTableCell align="center">Course Name</StyledTableCell>
                                    <StyledTableCell align="center">Course Coordinator</StyledTableCell>
                                    <StyledTableCell align="center">Course Detail</StyledTableCell>
                                    <StyledTableCell align="center">Coordinator Phone Number</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <React.Fragment key={row.id}>
                                    <StyledTableRow>
                                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                                      <StyledTableCell align="center">{row.course_coordinator}</StyledTableCell>
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
                                    </StyledTableRow>
                                    {openDetails[row.id] && (
                                      <TableRow>
                                        <StyledTableCell colSpan={5}>
                                          {/* Display detailed information from the row.detail property */}
                                          <p>{row.detail}</p>
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
    )
}

export default list2
