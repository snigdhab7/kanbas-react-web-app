import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
const { courseId } = useParams();
const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
return (
<div className="wd-flex-grow-1">
{/* <h1>Grades</h1> */}
<hr/>
<div className="mb-3 d-flex justify-content-end" style={{marginRight:'20px'}}>
    <button className="btn btn-secondary me-2"><i className="fa fa-download" aria-hidden="true"></i> Import</button>
    <button className="btn btn-secondary me-2"><i className="fa fa-download" aria-hidden="true"></i> Export <i className="fa fa-chevron-down" aria-hidden="true"></i></button>
    <button className="btn btn-secondary"><i className="fa fa-cog" aria-hidden="true"></i></button>
</div>
<div className="row mb-3">
    <div className="col-sm-4">
    <label className="form-label">Student Names</label>

        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" title="Type the name of the student to search for" placeholder="Search Students"></input>
        </div>
            </div>

<div className="col-sm-4">
    <label className="form-label">Assignment Names</label>
    <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" title="Type the name of the assignments to search for" placeholder="Search Assignments"></input>
    </div>      </div>
    </div>
    <button class="btn btn-secondary">
        <i class="fa fa-filter"></i> Apply Filter
    </button>
<br/><br/>
<div className="table-responsive">
<table className="table table-striped">
<thead>
<th>Student Name</th>
{assignments.map((assignment) => (<th style={{textAlign:'center'}}>{assignment.title}</th>))}
</thead>
<tbody>
{enrollments.map((enrollment) => {
const user = db.users.find((user) => user._id === enrollment.user);
return (
<tr>
<td style={{color:'red'}}>{user.firstName} {user.lastName}</td>
{assignments.map((assignment) => {
const grade = db.grades.find(
(grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
return (<td style={{textAlign:'center'}}>{grade?.grade + " %" || ""}</td>);})}
</tr>);
})}
</tbody></table>
</div></div>);
}
export default Grades;
