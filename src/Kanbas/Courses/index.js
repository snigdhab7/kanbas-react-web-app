import db from "../../Kanbas/Database";
import { Navigate, Route, Routes,useParams, useLocation } from "react-router-dom";
import CourseNavigation from "../../Kanbas/CourseNavigation/index.js";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";

function Courses() {
const { courseId } = useParams();
const page = (useParams())['*'];
const course = db.courses.find((course) => course._id === courseId);
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('navbar-breadcrum');
    if (element) {
      element.style.setProperty('--bs-breadcrumb-divider', '>');
    }
  });
return (
<div>
<nav id="navbar-breadcrum" aria-label="breadcrumb"style={{marginLeft: '5px'}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" style={{textDecoration: 'none'}}><span style={{color : 'red'}}>CS 5610.11550.202410</span></a></li>
                <li className="breadcrumb-item active" aria-current="page">{page}</li>
            </ol>
        </nav>
{/* <h1>Course {course.name}</h1> */}
<CourseNavigation />
<div>
<div
className="overflow-y-scroll position-fixed bottom-0 end-0"
style={{
left: "250px",
top: "30px",
}}
>
<Routes>
<Route path="/" element={<Navigate to="Home" />} />
<Route path="Home" element={<Home/>} />
<Route path="Modules" element={<Modules/>} />
<Route path="Assignments" element={<Assignments/>} />
<Route path="Assignments/:assignmentId"
element={<AssignmentEditor/>}/>
<Route path="Grades" element={<Grades />} />
</Routes>
</div>
</div>

</div>
);
}
export default Courses;
