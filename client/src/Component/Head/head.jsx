import React from 'react';
import { Link } from 'react-router-dom';
import './head.css';
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
                    <img src={logoImage1} alt="Campus Logo" style={logoStyle1} className='campus-logo' />
                </div>
                <div className='admin-photo'>
                    <h5 className='admin'>Hanwalle Paduma Thero</h5>
                </div>
            </div>

            <div className='side-panel'>
                <Link to="/admin" className="topic-btn">Dashboard</Link>
                <div className="dropdown">
                    <button className="topic-btn">Students</button>
                    <div className="dropdown-content">
                        <Link to="/student-list">Student List</Link>
                        <Link to="/student-add">Student Add</Link>
                        <Link to="/student-edit">Student Edit</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">Teachers</button>
                    <div className="dropdown-content">
                        <Link to="/teacher-list">Teachers List</Link>
                        <Link to="/teacher-add">Teachers Add</Link>
                        <Link to="/teacher-edit">Teachers Edit</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">Courses</button>
                    <div className="dropdown-content">
                        <Link to="/course-list">Courses List</Link>
                        <Link to="/course-add">Courses Add</Link>
                        <Link to="/course-edit">Courses Edit</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">Events</button>
                    <div className="dropdown-content">
                        <Link to="/admin/events/add">Events Add</Link>
                        <Link to="/admin/events/edit">Events Edit</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">Assing Duty</button>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">Sick Leave</button>
                </div>
                <div className="dropdown">
                    <button className="topic-btn">Leave Request</button>
                </div>
                <div className='log-out'>
                    <img src={logoImage3} alt="Logout" style={iconStyle1} className='log-icon' />
                    <a href='/logout' className='lg-out'>Logout</a>
                </div>
                <div className='fot-tag'>
                    <h6>COPYRIGHT @ 2023 IUHS CAMPUS</h6>
                </div>
            </div>
        </div>
    );
};

export default Head;
