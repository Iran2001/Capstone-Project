import React from 'react'
import './head.css'
import logoImage1 from '../../assets/Campuslogo1.jpg';
import logoImage3 from '../../assets/logout.png';


const Head = () => {

    const logoStyle1 = {
        width: '100%',
        height: '110px',
    };

    const iconStyle1 = {
        width: '40px',
        height: '40px',
    };

    return (
        <div className='Container'>


            <div className='main-head'>
                <div className='main-logo'>
                    <img src={logoImage1} alt="Rectangle background image" style={logoStyle1} className='campus-logo' />
                </div>
                <div className='admin-photo'>
                    <h5 className='admin'>Hanwalle Paduma Thero</h5>
                </div>
            </div>


            <div className='side-panel'>

                <div className="dropdown">
                    <button className="topic-btn">
                        Dashboard
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Admin Dashboard</a>
                        <a href="#">Student Dashboard</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">
                        Students
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Student List</a>
                        <a href="#">Student Add</a>
                        <a href="#">Student Edit</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">
                        Teachers
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Teachers List</a>
                        <a href="#">Teachers Add</a>
                        <a href="#">Teachers Edit</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Courses
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Courses List</a>
                        <a href="#">Courses Add</a>
                        <a href="#">Courses Edit</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Events
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Events Add</a>
                        <a href="#">Events Edit</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Assing Duty
                    </button>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Sick Leave
                    </button>
                </div>

                <div className="dropdown">
                    <button className="topic-btn">
                        Leave Request
                    </button>
                </div>

                <div className='log-out'>
                    <img src={logoImage3} alt="Rectangle background image" style={iconStyle1} className='log-icon' />
                    <a href='/logout' className='lg-out'>Logout</a>
                </div>

                <div className='fot-tag'>
                    <h6>COPYRIGHT @ 2023 IUHS CAMPUS</h6>
                </div>

            </div>


        </div>
    )
}

export default Head
