import React from 'react'
import './sthead.css'
import logoImage1 from '../../assets/Campuslogo1.jpg';
import logoImage3 from '../../assets/logout.png';


const sthead = () => {

    const logoStyle1 = {
        width: '100%',
        height: '110px',
    };

    const iconStyle1 = {
        width: '40px',
        height: '40px',
    };

    return (
        <div className='stdhead-Container'>


            <div className='stdhead-main-head'>
                <div className='stdhead-main-logo'>
                    <img src={logoImage1} alt="Rectangle background image" style={logoStyle1} className='stdhead-campus-logo' />
                </div>
                <div className='stdhead-admin-photo'>
                    <h5 className='stdhead-admin'>M.A.Heshan Rashmika</h5>
                </div>
            </div>


            <div className='stdhead-side-panel'>

                <div className="stdhead-dropdown">
                    <button className="stdhead-topic-btn">
                        Dashboard
                    </button>
                </div>

                <div className="stdhead-dropdown">
                    <button className="stdhead-topic-btn">
                        Events
                    </button>
                </div>

                <div className="stdhead-dropdown">
                    <button className="stdhead-topic-btn">
                        My Duty
                    </button>
                </div>

                <div className="stdhead-dropdown">
                    <button className="stdhead-topic-btn">
                        Sick Leave
                    </button>
                </div>

                <div className="stdhead-dropdown">
                    <button className="stdhead-topic-btn">
                        Leave Request
                    </button>
                </div>

                <div className='stdhead-log-out'>
                    <img src={logoImage3} alt="Rectangle background image" style={iconStyle1} className='stdhead-log-icon' />
                    <a href='/logout' className='stdhead-lg-out'>Logout</a>
                </div>

                <div className='stdhead-fot-tag'>
                    <h6>COPYRIGHT @ 2023 IUHS CAMPUS</h6>
                </div>

            </div>


        </div>
    )
}

export default sthead
