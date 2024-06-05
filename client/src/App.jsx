
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing Pages
import Admin_dashboard from './Pages/Admin_dashboard/admin';
import Student_dashboard from './Pages/Student_dashboard/student';
import Student_list from './Pages/Student_list/list';
import Student_add from './Pages/Student_add/add';
import Student_edit from './Pages/Student_edit/edit';
import Teacher_list from './Pages/Teacher_list/list1';
import Teacher_add from './Pages/Teacher_add/add1';
import Teacher_edit from './Pages/Teacher_edit/edit1';
import Course_list from './Pages/Course_list/list2';
import Course_add from './Pages/Course_add/add2';
import Course_edit from './Pages/Course_edit/edit2';
import Sign_up from './Pages/Sign_up/signup';
import Sign_in from './Pages/Sign_in/signin';
import Reset_psw from './Pages/Reset_psw/resetpsw';
import AdminReset_pwd from './Pages/AdminReset_pwd/adminre_pwd';
import Assign_duty from './Pages/Assign_duty/assignduty';
import User_profile from './Pages/User_profile/profile';
import Student_profile from './Pages/Student_profile/profile1';
import Teacher_profile from './Pages/Teacher_profile/profile2';
import Home_page from './Pages/Home_page/home';
import Courses from './Pages/Courses/courses';
import About_us from './Pages/About_us/aboutus';
import Contact_us from './Pages/Contact_us/contactus';
import Sick_leave from './Pages/Sick_leave/sickleave';
import Leave_request from './Pages/Leave_request/leavereq';
import Student_panel from './Pages/Student_panel/stpanel';
import Student_duty from './Pages/Student_duty/stduty';
import Reject_reason from './Pages/Reject_reason/rejreason';
import Stdsick_leave from './Pages/Stdsick_leave/stdsicklv';
import Stdleave_req from './Pages/Stdleave_req/leavereq';

// Importing Components

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/home' element={<Home_page />} />
        <Route path='/' element={<Home_page />} />
        <Route path='/signup' element={<Sign_up />} />
        <Route path='/signin' element={<Sign_in />} />
        <Route path='/resetpsw' element={<Reset_psw />} />
        <Route path='/admin-reset-pwd' element={<AdminReset_pwd />} />
        <Route path='/admin-dashboard' element={<Admin_dashboard />} />
        <Route path='/student-dashboard' element={<Student_dashboard />} />
        <Route path='/student-list' element={<Student_list />} />
        <Route path='/student-add' element={<Student_add />} />
        <Route path='/student-edit' element={<Student_edit />} />
        <Route path='/teacher-list' element={<Teacher_list />} />
        <Route path='/teacher-add' element={<Teacher_add />} />
        <Route path='/teacher-edit' element={<Teacher_edit />} />
        <Route path='/course-list' element={<Course_list />} />
        <Route path='/course-add' element={<Course_add />} />
        <Route path='/course-edit' element={<Course_edit />} />
        <Route path='/assign-duty' element={<Assign_duty />} />
        <Route path='/user-profile' element={<User_profile />} />
        <Route path='/student-profile' element={<Student_profile />} />
        <Route path='/teacher-profile' element={<Teacher_profile />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about-us' element={<About_us />} />
        <Route path='/contact-us' element={<Contact_us />} />
        <Route path='/sick-leave' element={<Sick_leave />} />
        <Route path='/leave-request' element={<Leave_request />} />
        <Route path='/student-panel' element={<Student_panel />} />
        <Route path='/student-duty' element={<Student_duty />} />
        <Route path='/reject-reason' element={<Reject_reason />} />
        <Route path='/student-sick-leave' element={<Stdsick_leave />} />
        <Route path='/student-leave-request' element={<Stdleave_req />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
