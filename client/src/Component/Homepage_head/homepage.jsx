import React from 'react'
import './homepage.css'
import Icon1 from '../../assets/Help.png';
import Icon2 from '../../assets/envelope.png';
import Campuslg2 from '../../assets/IUHS-Logo.png';
import callerIcon2 from '../../assets/phone-call.png';


const homepage = () => {

    return (
        <div className='main-main-main-class'>
            

            <div className='top-top-head-bar-rect'>
                <div className='top-question_icon'>
                    <img src={Icon1} className='q-icon' a href='#' />
                    <h5 className='any-q-txt' a href='#'>Have any questions</h5>
                </div>
                <div className='top-email_icon'>
                    <img src={Icon2} className='m-icon' a href='#' />
                    <h5 className='admin-sup-txt' a href='#'>admin@email.com</h5>
                </div>
                <div className='top-enroll_icon'>
                    <h5 className='few-seat-txt' a href='#'>Only Few Seats Left -</h5>
                    <h5 className='enroll-now-txt' a href='#'>Enroll Now</h5>
                </div>
            </div>



            <div className='top-head-main-bar-rect'>
                <div className='campus-logo-icon-rect'>
                    <img src={Campuslg2} className='campus-logo-icon' a href='#' />
                </div>
                <div className='navbar-txt-main-rect'>
                    <h5 className='nav-bar-txt' a href='#'>Home</h5>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <h5 className='nav-bar-txt' a href='#'>Course</h5>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <h5 className='nav-bar-txt' a href='#'>About Us</h5>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <h5 className='nav-bar-txt' a href='#'>Contact Us</h5>
                </div>
                <div className='talk-expert-rect'>
                    <img src={callerIcon2} className='caller-icon' a href='#' />
                    <div className='talk-expert-txt-rect'>
                        <h5 className='talk-expert-txt' a href='#'>Talk To An Experts</h5>
                        <h5 className='talk-expert-txt1' a href='#'>0716475991</h5>
                    </div>
                </div>
                <div>
                    <button className='Login_in-main-btn'>Login</button>
                </div>
            </div>


        </div>
    )
}

export default homepage
