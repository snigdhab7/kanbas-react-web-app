import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../../lib/bootstrap/bootstrap.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
deleteModule,
updateModule,
setModule,
setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
const { courseId } = useParams();
useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


const modules = useSelector((state) => state.modulesReducer.modules);
const module = useSelector((state) => state.modulesReducer.module);
const dispatch = useDispatch();

//const modules = db.modules;
               
return (



<ul className="list-group">
    <li className="list-group-item">

    <div className="mb-3">
      <div className="d-flex align-items-start">
        <label htmlFor="moduleName" className="form-label me-3">Module Name</label>
        <input
          type="text"
          className="form-control me-3"
          id="moduleName"
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />

        <label htmlFor="moduleDescription" className="form-label me-3">Module Description</label>
        <textarea
          className="form-control"
          id="moduleDescription"
          rows="1"
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </div>
    </div>

  

<button className="assignment-button" onClick={handleAddModule}>
    Add</button>
<button className="assignment-button" onClick={handleUpdateModule}>
    Update
</button>
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
       
</div>
        <div style={{width: '400px'}}>
        <button className="assignment-button" style={{marginRight: '10px'}} 
onClick={() => dispatch(setModule(module))}>
Edit
</button>
        <button className="assignment-button" style={{marginRight: '5px'}} 
onClick={() => handleDeleteModule(module._id)}>
Delete
</button>
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