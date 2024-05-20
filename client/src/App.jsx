import Admin_dashboard from './Pages/Admin_dashboard/admin'
import Student_dashboard from './Pages/Student_dashboard/student'
import Student_list from './Pages/Student_list/list'
import Student_add from './Pages/Student_add/add'
import Student_edit from './Pages/Student_edit/edit'
import Teacher_list from './Pages/Teacher_list/list1'
import Teacher_add from './Pages/Teacher_add/add1'
import Teacher_edit from './Pages/Teacher_edit/edit1'
import Course_list from './Pages/Course_list/list2'
import Course_add from './Pages/Course_add/add2'
import Course_edit from './Pages/Course_edit/edit2'
import Sign_up from './Pages/Sign_up/signup'
import Sign_in from './Pages/Sign_in/signin'
import Reset_psw from './Pages/Reset_psw/resetpsw'
import AdminReset_pwd from './Pages/AdminReset_pwd/adminre_pwd'
import Assign_duty from './Pages/Assign_duty/assignduty'
import User_profile from './Pages/User_profile/profile'
import Student_profile from './Pages/Student_profile/profile1'
import Teacher_profile from './Pages/Teacher_profile/profile2'
import Head from './Component/Head/head'
import Sign_side from './Component/Sign_side/side';


const App = () => {
  return (
    <div >
      <User_profile/>
    </div>
  )
}

export default App