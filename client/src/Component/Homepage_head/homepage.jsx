import React from 'react';
import './homepage.css';
import Icon1 from '../../assets/Help.png';
import Icon2 from '../../assets/envelope.png';
import Campuslg2 from '../../assets/IUHS-Logo.png';
import callerIcon2 from '../../assets/phone-call.png';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
        navigate('/signin');
    }
    const handleEnrollNowClick = () => {
        navigate('/signup');
    }
    const handleConatctUSClick = () => {
        navigate('/contact-us');
    }
    const handleMainHomeClick = () => {
        navigate('/home');
    }
    const handleCourseClick = () => {
        navigate('/courses');
    }
    const handleAboutUsClick = () => {
        navigate('/about-us');
    }

    return (
        <div className='main-main-main-class'>
            <div className='top-top-head-bar-rect'>
                <div className='top-question_icon'>
                    <a href='#'>
                        <img src={Icon1} className='q-icon' />
                        <h5 className='any-q-txt' onClick={handleConatctUSClick}>Have any questions</h5>
                    </a>
                </div>
                <div className='top-email_icon'>
                    <a href='#'>
                        <img src={Icon2} className='m-icon' />
                        <h5 className='admin-sup-txt'>admin@email.com</h5>
                    </a>
                </div>
                <div className='top-enroll_icon'>
                    <h5 className='few-seat-txt'>Only Few Seats Left -</h5>
                    <a href='#'>
                        <h5 className='enroll-now-txt' onClick={handleEnrollNowClick}>Enroll Now</h5>
                    </a>
                </div>
            </div>

            <div className='top-head-main-bar-rect'>
                <div className='campus-logo-icon-rect'>
                    <a href='#'>
                        <img src={Campuslg2} className='campus-logo-icon' />
                    </a>
                </div>
                <div className='navbar-txt-main-rect'>
                    <a href='#'>
                        <h5 className='nav-bar-txt' onClick={handleMainHomeClick}>Home</h5>
                    </a>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <a href='#'>
                        <h5 className='nav-bar-txt' onClick={handleCourseClick}>Course</h5>
                    </a>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <a href='#'>
                        <h5 className='nav-bar-txt' onClick={handleAboutUsClick}>About Us</h5>
                    </a>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <a href='#'>
                        <h5 className='nav-bar-txt' onClick={handleConatctUSClick}>Contact Us</h5>
                    </a>
                </div>
                <div className='talk-expert-rect'>
                    <a href='#' className='talk-expert-link'>
                        <img src={callerIcon2} className='caller-icon' />
                        <div className='talk-expert-txt-rect'>
                            <h5 className='talk-expert-txt'>Talk To An Experts</h5>
                            <h5 className='talk-expert-txt1'>0716475991</h5>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='Login_in-main-btn' onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
