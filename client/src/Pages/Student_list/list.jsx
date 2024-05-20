import React from 'react';
import './list.css';
import Head from '../../Component/Head/head';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
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

const Search = styled('div')(({ theme }) => ({
    position: 'relative', // Allows positioning of elements within the search container
    borderRadius: theme.shape.borderRadius, // Applies MUI's default border radius
    backgroundColor: alpha(theme.palette.common.white, 0.15), // Sets a semi-transparent white background
    '&:hover': { // Styles on hover state
        backgroundColor: alpha(theme.palette.common.white, 0.15), // Slightly more opaque background on hover
    },
    marginRight: theme.spacing(2), // Margin from the right side
    marginLeft: 0, // No margin from the left side
    width: '100%', // Takes up the full available width
    [theme.breakpoints.up('sm')]: { // Styles for screens wider than small size
        marginLeft: theme.spacing(3), // Add some margin from the left on larger screens
        width: 'auto', // Allow the container to adjust its width automatically
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2), // Padding around the icon
    height: '100%', // Ensures the icon fills the vertical space
    position: 'absolute', // Positions the icon absolutely within the container
    pointerEvents: 'none', // Disables pointer events on the wrapper (prevents accidental clicks)
    display: 'flex', // Allows for horizontal alignment of the icon
    alignItems: 'center', // Aligns the icon vertically within the wrapper
    justifyContent: 'center', // Centers the icon horizontally within the wrapper
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit', // Inherits the text color from the parent theme
    '& .MuiInputBase-input': { // Styles for the actual input element
        padding: theme.spacing(1, 1, 1, 0), // Padding around the input text
        // Adjusts vertical padding to account for the search icon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Space for icon + some padding
        transition: theme.transitions.create('width'), // Enables smooth width changes
        width: '100%', // Takes up the full available width within the container
        [theme.breakpoints.up('md')]: { // Styles for medium screens and above
            width: '20ch', // Sets a fixed width for the input field on larger screens
        },
    },
}));


const list = () => {

    const [openDetails, setOpenDetails] = React.useState({}); // State to track open details

    const handleOpenDetails = (rowId) => {
        setOpenDetails({ ...openDetails, [rowId]: !openDetails[rowId] });
    };

    return (
        <div>
            <Head />
            <div className='big-rect2'>
                <div>
                    <h2 className='top-head2'>Welcome To Student List!</h2>
                </div>
                <div className='search-rect'>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Enter Student ID…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div className='std-table-rect'>
                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">Course Name</StyledTableCell>
                                    <StyledTableCell align="center">Other Info</StyledTableCell>
                                    <StyledTableCell align="center">Contact Number</StyledTableCell>
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
    )
}

export default list
