import "./header.css"
import Image from './../assets/nalanda.jpg'
export default function header(){

    return(
        <header>
        <div className="top-header">
          <span className="question-icon">? Have any questions</span>
          <span className="email">adminsupport@example.com</span>
          <span className="message">Only Few Seats Left - <button className="enroll"> Enroll Now </button></span>
        </div>
        <div className="main-header">
          <div className="logo">Campus Logo</div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          <div className="contact-info">
            <span className="phone">Talk To An Experts <br></br>07164759991</span>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </header>
    )
}