
import './homepage.css';
import Icon1 from '../../assets/Help.png';
import Icon2 from '../../assets/envelope.png';
import Campuslg2 from '../../assets/IUHS-Logo.png';
import callerIcon2 from '../../assets/phone-call.png';

const Homepage = () => {
    return (
        <div className='main-main-main-class'>
            <div className='top-top-head-bar-rect'>
                <div className='top-question_icon'>
                    <a href='#'>
                        <img src={Icon1} className='q-icon' />
                        <h5 className='any-q-txt'>Have any questions</h5>
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
                        <h5 className='enroll-now-txt'>Enroll Now</h5>
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
                        <h5 className='nav-bar-txt'>Home</h5>
                    </a>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <a href='#'>
                        <h5 className='nav-bar-txt'>Course</h5>
                    </a>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <a href='#'>
                        <h5 className='nav-bar-txt'>About Us</h5>
                    </a>
                </div>
                <div className='navbar-txt-main-rect1'>
                    <a href='#'>
                        <h5 className='nav-bar-txt'>Contact Us</h5>
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
                    <button className='Login_in-main-btn'>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
