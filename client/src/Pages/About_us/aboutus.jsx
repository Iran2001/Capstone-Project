import React from 'react';
import './aboutus.css';
import Homepage_head from '../../Component/Homepage_head/homepage';
import Homepage_footer from '../../Component/Homepage_footer/footer';
import Aboutus_photo from '../../assets/IT_dipphoto.jpg';

const aboutus = () => {
  return (
    <div>
      <Homepage_head/>
        <div className='aboutus-main-big-big-rect'>
            <div className='aboutus-main-big-rect'>
                <div className='aboutus-main-sub-rect1'>
                    <div className='aboutus-main-top-txt-rect'>
                        <h1 className='aboutus-main-top-txt'>Sri Lanka First Community Funded University</h1>
                    </div>
                    <div className='aboutus-sub-pharagraph-txt-rect'>
                        <p>
                        Nalanda – IUHS Campus is an initiative by Meth Bo Sewana <br></br><br></br>
                        International Meditation Center and has been supported by IUHS <br></br>
                        (Institute of Universal Higher Studies) since its inception. The campus <br></br>
                        is operated and managed by the Nalanda Campus Foundation, a non-<br></br>
                        profit organization. Nalanda Campus was established in October <br></br>
                        2022 with the ambition of providing students a fully – fledged free IT <br></br>
                        education. 
                        <br></br><br></br>
                        Nalanda – IUHS Campus currently offers a Diploma in IT as the very<br></br> 
                        first program of the campus with 150 student enrolments. The <br></br>
                        enrolled students come from diverse backgrounds, ethnicities and <br></br>
                        different parts of the country. The curriculum developed focuses on <br></br>
                        developing industry-specific skills and soft skills rather than exams-<br></br>
                        focused knowledge-based education as opposed to the country’s <br></br>
                        current system
                        <br></br><br></br>
                        In order to provide the benefit to a larger group of students Nalanda – <br></br>
                        IUHS Campus is rolling out an aggressive expansion strategy in the <br></br>
                        next ten years.  Despite the humble beginning with only 150 students <br></br>
                        it has its own plans to enroll 10,000 students by its 10th year.
                        </p>
                    </div>
                </div>
                <div className='aboutus-main-sub-rect2'>
                    <img src={Aboutus_photo} className='aboutus-img'/>
                </div>
            </div>
        </div>
      <Homepage_footer/>
    </div>
  )
}

export default aboutus
