import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../../lib/bootstrap/bootstrap.css"
import "../../../lib/font-awesome/css/font-awesome.css"
import "../../../styles.css"
import { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
addAssignment,
deleteAssignment,
updateAssignment,
setAssignment,
setAssignments
} from "./assignmentsReducer";
import { findAssignmentsForCourse , createAssignment} from "./client";
import * as client from "./client";

function Assignments(
    ) {
const { courseId } = useParams();
const { assignmentId } = useParams();
const navigate = useNavigate();
const assignments = useSelector((state) => state.assignmentsReducer.assignments);
const [assignment, setAssignment] = useState(assignments.find((assignment) => assignment._id === Number(assignmentId)));

const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((newAssignment) => {
      dispatch(addAssignment(newAssignment));
     
      navigate(`${newAssignment._id}?fromAddButton=true`);
    });
  };
const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };


useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

const dispatch = useDispatch();
console.log("courseid",assignments)

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
                           
      <button className="btn btn-light btn-outline-secondary wd-select-button" style={{ marginRight: '5px' }} onClick={handleAddAssignment}>
    + Assignment</button>


      
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
                   
                <div
className="list-group-item d-flex justify-content-between align-items-center">

<div >
    
    
                        <i className="fa fa-ellipsis-v" style={{paddingLeft:'2px'}} aria-hidden="true"></i><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        <i className="fa fa-pencil-square-o wd-icon-green" style={{paddingLeft:'5px'}}  aria-hidden="true"></i>
                    </div>
                     
                <Link style={{textDecoration:'none', color: 'inherit'}}
key={assignment._id}
to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
>
                        <div className="fs-5" style={{marginRight:'170px'}}>{assignment.title}</div>
                        <div className="fw-light">{assignment.description}</div>
                        <div className="fw-light">Due :{assignment.dueDate} Available From:{assignment.availableFromDate} Available Until::{assignment.availableUntilDate}</div>
                    </Link>
                    <div>
                    <button className="assignment-button" onClick={() => handleDeleteAssignment(assignment._id)} style={{marginRight: '5px'}}>Delete</button>
                        <i className="fa fa-check-circle wd-icon-green wd-padding-20-right"  style={{marginRight: '5px'}} aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-v wd-padding-20-right"  style={{marginRight: '5px'}} aria-hidden="true"></i>
                       
                    </div>  
</div>
                ))}


            </ul>
        </div>
        </div>        
        </>

);
}
export default Assignments;