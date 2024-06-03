import React from 'react';
import './about.css';
import Head from "./header"
import Image from './../assets/nalanda.jpg'


export default function about() {
  return (
   <>
   <Head></Head>
     <div className="App">
    <div className="content-wrapper">
        <div className='topic'>Sri lanka's First Community Funded University</div><div className='paragraph'><p>Nalanda-IUHS Campus is an initiative by Meth Bo Sewana International 
          Meditation Center and has been supported by IUHS since its inception. The campus is operated and managed by the Nalanda Campus Foundation,
           a non-profit organization. Nalanda Campus was established in October 2022 with the ambition of providing students with fully-fledged free IT education.</p>
        <p>Nalanda-IUHS Campus currently offers a Diploma in IT as the very first program of the campus, with 150 students enrolled. The enrolled students 
          come from diverse backgrounds, ethnicities, and different parts of the country.</p>
        <p>The curriculum developed focuses on developing industry-specific skills and soft skills rather than exams-focused knowledge-based education, 
          unlike the country's current system, in order to provide benefit to a larger group of students. Nalanda-IUHS Campus is rolling out an aggressive
           expansion strategy in the next ten years. Despite its humble beginning with only 150 students, it has its own plan to enroll 10,000 students by its 10th year.</p></div></div>
       <div className="image">
        <img  src={Image}></img>
        </div> 
        </div>  

      <footer>
        <p>@IUHS Campus</p>
      </footer>
   
   
   </>
  );
}

