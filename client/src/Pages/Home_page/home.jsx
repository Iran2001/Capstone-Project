import React from 'react'
import './home.css';
import Homepage_head from '../../Component/Homepage_head/homepage';
import Homepage_footer from '../../Component/Homepage_footer/footer';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Men_img from '../../assets/men_img 1.png';
import Girl_img from '../../assets/men_img 2.png';


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

const home = () => {
    return (
        <div>
            <Homepage_head />

            <div className='main-big-big-homepage-rect'>
                <div className='homepage-big-big-rect'>


                    <div className='homepage-big-rect-one'>
                        <h5 className='rated-txt' a href='#'>GOOGLE RATED #NO.1</h5>
                        <div className='Main-topic-txt-rect'>
                            <h5 className='Main-topic-txt' a href='#'>Modern And Innovative Learning</h5>
                        </div>
                        <div className='Main-pharagraph-text-rect'>
                            <p className='Main-pharagraph-text'>
                                Our mission is to make a significant impact on the development of highly<br></br>
                                skilled IT engineering professionals in Sri Lanka.<br></br>
                                <br></br>
                                As the first ever community-funded university in Sri Lanka, we offer IT <br></br>
                                Diplomas to empower students and equip them with industry-recognized<br></br>
                                qualifications that prepare them for success in the global job market.<br></br>
                            </p>
                        </div>
                        <div className='home-search-rect'>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search courses in here…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>
                    </div>
                    <div className='homepage-big-rect-two'>
                        <div className='home-campus-photo-img1'>
                            <img src={Men_img} className='men-img' a href='#' />
                        </div>
                        <div className='home-campus-photo-img2'>
                            <img src={Girl_img} className='men-img' a href='#' />
                        </div>
                    </div>


                </div>


                <div className='homepage-bottom-bottom-rect'>
                    <div className='homepage-bottom-sub-rect1'>
                        <h1 className='homepage-bottom-sub-main-text1'>220+</h1>
                        <h3 className='homepage-bottom-sub-sub-text1'>Students Graduated</h3>
                    </div>
                    <div className='homepage-bottom-sub-rect2'>
                        <h1 className='homepage-bottom-sub-main-text1'>10+</h1>
                        <h3 className='homepage-bottom-sub-sub-text1'>Lecturers</h3>
                    </div>
                    <div className='homepage-bottom-sub-rect1'>
                        <h1 className='homepage-bottom-sub-main-text1'>4+</h1>
                        <h3 className='homepage-bottom-sub-sub-text1'>Available Courses</h3>
                    </div>
                </div>


            </div>

            <Homepage_footer />
        </div>
    )
}

export default home
