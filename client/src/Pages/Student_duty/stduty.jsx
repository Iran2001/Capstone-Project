import React from 'react'
import './stduty.css'
import Student_head from '../../Component/Student_head/sthead'
import duty_icon1 from '../../assets/refresh.png';
import duty_icon2 from '../../assets/moon.png';
import duty_icon3 from '../../assets/person.png';
import duty_icon4 from '../../assets/lecturer.png';
import Button from '@mui/material/Button';

const stduty = () => {
  return (
    <div>
      <Student_head />
      <div className='stduty-big-rect1'>
        <div>
          <h2 className='stduty-top-head1'>Welcome To Duty Panel!</h2>
        </div>

        <div className='stduty-top-main-rect'>

          <div className='stduty-m-rect1'>
            <h3 className='stduty-tp1'>Recent Monthly Duty</h3>
            <div className='stduty-lbl-11'>
              <img src={duty_icon1} className='stduty-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5></h5>
              </div>
            </div>
            <div className='stduty-lbl-21'>
              <img src={duty_icon1} className='stduty-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5></h5>
              </div>
            </div>
            <div className='stduty-lbl-21'>
              <img src={duty_icon1} className='stduty-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5></h5>
              </div>
            </div>
          </div>

          <div className='stduty-m-rect1'>
            <h3 className='stduty-tp1'>Upcoming Events</h3>
            <div className='stduty-lbl-11'>
              <img src={duty_icon2} className='stduty-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5>Poya Day In Chaithya At 12.00p.m.</h5>
              </div>
            </div>
            <div className='stduty-lbl-21'>
              <img src={duty_icon3} className='stduty-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5>Sharamadana 23/04/2024</h5>
              </div>
            </div>
            <div className='stduty-lbl-21'>
              <img src={duty_icon4} className='stduty-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5>Guest lecture 24/04/2024</h5>
              </div>
            </div>
          </div>

        </div>

        <div className='stduty-bottom-main-rect'>
          <div className='stduty-bottom-m-rect1'>
            <h3 className='stduty-tp1'>Upcoming Events</h3>
            <div className='stduty-bottom-lbl-11'>
              <img src={duty_icon2} className='stduty-bottom-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5>Poya Day In Chaithya At 12.00p.m.</h5>
              </div>
              <div className='stduty-accept-btn'>
                <Button variant="contained" size="small" color="success">
                  Accept
                </Button>
              </div>
              <div className='stduty-reject-btn'>
                <Button variant="contained" size="small" color="error">
                  Reject
                </Button>
              </div>
            </div>
            <div className='stduty-bottom-lbl-21'>
              <img src={duty_icon3} className='stduty-bottom-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5>Sharamadana 23/04/2024</h5>
              </div>
              <div className='stduty-accept-btn1'>
                <Button variant="contained" size="small" color="success">
                  Accept
                </Button>
              </div>
              <div className='stduty-reject-btn1'>
                <Button variant="contained" size="small" color="error">
                  Reject
                </Button>
              </div>
            </div>
            <div className='stduty-bottom-lbl-21'>
              <img src={duty_icon4} className='stduty-bottom-lbl-icon1' />
              <div className='stduty-lbl-detail1'>
                <h5>Guest lecture 24/04/2024</h5>
              </div>
              <div className='stduty-accept-btn2'>
                <Button variant="contained" size="small" color="success">
                  Accept
                </Button>
              </div>
              <div className='stduty-reject-btn2'>
                <Button variant="contained" size="small" color="error">
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default stduty
