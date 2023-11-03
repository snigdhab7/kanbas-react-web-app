import Reactt, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../../lib/bootstrap/bootstrap.css"
import { useSelector, useDispatch } from "react-redux";
import {
addModule,
deleteModule,
updateModule,
setModule,
} from "./modulesReducer";

function ModuleList() {
const { courseId } = useParams();

const modules = useSelector((state) => state.modulesReducer.modules);
const module = useSelector((state) => state.modulesReducer.module);
const dispatch = useDispatch();

//const modules = db.modules;
               
return (



<ul className="list-group">
    <li className="list-group-item">
<button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
    Add</button>
<button onClick={() => dispatch(updateModule(module))}>
    Update
</button>
<input value={module.name}
onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
}
/>
<textarea value={module.description}
onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
/>
</li>
{
modules
.filter((module) => module.course === courseId)
.map((module, index) => (
<li key={index} className="list-group-item list-group-item-heading d-flex justify-content-between align-items-center" style={{ marginBottom: '30px', backgroundColor: ' #ececec'}}>

<div>
            <i className="fa fa-ellipsis-v" style={{marginRight: '1px'}} aria-hidden="true"></i><i className="fa fa-ellipsis-v" style={{marginRight: '10px'}} aria-hidden="true"></i>
            <i className="fa fa-caret-right" aria-hidden="true" style={{marginRight: '5px'}}></i>
            <b>{module.name}</b>
            <p>{module.description}</p>
        </div>
        <div>
        <button
onClick={() => dispatch(setModule(module))}>
Edit
</button>
        <button
onClick={() => dispatch(deleteModule(module._id))}>
Delete
</button>
</div>
        <div style={{width: '70px'}}>
            <i className="fa fa-check-circle wd-icon-green"style={{marginRight: '5px'}} aria-hidden="true"></i>
            <i className="fa fa-caret-down" style={{marginRight: '5px'}} aria-hidden="true"></i>
            <i className="fa fa-plus wd-padding-20-right" style={{marginRight: '5px'}} aria-hidden="true"></i>
            <i className="fa fa-ellipsis-v wd-padding-20-right" style={{marginRight: '5px'}}aria-hidden="true"></i>
        </div>   
           
</li>
))
}
</ul>

);
}
export default ModuleList;