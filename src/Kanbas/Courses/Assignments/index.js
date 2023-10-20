import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../../lib/bootstrap/bootstrap.css"
import "../../../lib/font-awesome/css/font-awesome.css"
import "../../../styles.css"
function Assignments() {
const { courseId } = useParams();
console.log("courseid",courseId)
const assignments = db.assignments;
const courseAssignments = assignments.filter(
(assignment) => assignment.course === courseId);
return (
<>
    <br/><br/>
    
         <div className="row" style={{width:'90%'}}>
        <nav style={{flexDirection: 'row', paddingLeft: '10px'}}>
                    <form className="form-group">
        <div className="d-flex justify-content-between">
                            <div>
                                <input className="form-control me-2 float-start" type="search" placeholder="Search for Assignment" aria-label="Search"></input>
                            </div>
                            <div>
                                <button className="btn btn-light btn-outline-secondary" style={{marginRight: '5px'}}type="submit">+ Group</button>
                                <button className="btn btn-light btn-outline-secondary wd-select-button"style={{marginRight: '5px'}} type="submit">+ Assignment</button>
                                <button className="btn btn-light btn-outline-secondary" type="submit"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        </form>   
                </nav>
                <br/><br/>
                <div className="wd-flex-grow-1 ">

            <ul className="list-group">
                <div className="list-group-item list-group-item-heading d-flex justify-content-between align-items-center" style={{ marginBottom: '30px', backgroundColor: ' #ececec'}}>

                    <div>
                        <i className="fa fa-ellipsis-v" style={{paddingLeft:'3px'}} aria-hidden="true"></i><i className="fa fa-ellipsis-v" style={{ paddingRight: '10px'}} aria-hidden="true"></i>
                        <i className="fa fa-caret-down" style={{paddingRight :'10px'}} aria-hidden="true"></i>
                        <b>Assignments</b>
                    </div>
                    <div style={{width: '200px'}}>
                        <button className="assignment-button" style={{marginRight: '5px'}}>40% of total</button>
                        <i className="fa fa-plus wd-padding-20-right"  style={{marginRight: '5px'}} aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-v wd-padding-20-right"  style={{marginRight: '5px'}} aria-hidden="true"></i>
                    </div>
    
                </div>     
                {courseAssignments.map((assignment) => (
                <Link
key={assignment._id}
to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
className="list-group-item d-flex justify-content-between align-items-center">

<div >
                        <i className="fa fa-ellipsis-v" style={{paddingLeft:'2px'}} aria-hidden="true"></i><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        <i className="fa fa-pencil-square-o wd-icon-green" style={{paddingLeft:'5px'}}  aria-hidden="true"></i>
                    </div>
                    <div>
                        <div className="fs-5">{assignment.title}</div>
                        <div className="fw-light">{assignment.description}</div>
                        <div className="fw-light">{assignment.dueDate}</div>
                    </div>
                    <div>
                        <i className="fa fa-check-circle wd-icon-green wd-padding-20-right"  style={{marginRight: '5px'}} aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-v wd-padding-20-right"  style={{marginRight: '5px'}} aria-hidden="true"></i>
                    </div>  
</Link>
                ))}


            </ul>
        </div>
        </div>        
        </>

);
}
export default Assignments;