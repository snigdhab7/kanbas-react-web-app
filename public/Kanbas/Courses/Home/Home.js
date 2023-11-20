
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js"
function Home(){
return(` 
<div class="d-block d-md-none">
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" onclick = "window.location.href='/Kanbas/Courses/CourseNavigation';">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
</div>
<div class="wd-flex-row-container">
    ${KanbasNavigation("Courses")}
    ${CourseNavigation("Home")}
    <div class="wd-flex-grow-1">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/Kanbas/Courses/Home/screen.html" style="text-decoration:none;"><span style="color:red;">CS 5610.11550.202410</span></a></li>
                <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
        </nav>
        <hr/>
        <div class="container">
            <div class="row">


                <div class="col-md-9">
                    <div class="mb-3 d-flex justify-content-end">
                        <button class="btn btn-secondary float-end" style="margin:5px;">Collapse All</button>
                        <button class="btn btn-secondary float-end" style="margin:5px;">View Progress</button>
                        <div class="dropdown float-end">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="publishDropdown"
                                    data-bs-toggle="dropdown" aria-expanded="false" style="margin:5px;">
                                Publish All
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="publishDropdown" style="margin:5px;">
                                <li><a class="dropdown-item" href="#">Publish all items and modules</a></li>
                                <li><a class="dropdown-item" href="#">UnPublish</a></li>
                            </ul>
                        </div>
                        <button class="btn btn-danger float-end" style="margin:5px;">+ Module</button>
                    </div>
                    <hr />
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-heading d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fa fa-ellipsis-v" style="padding-right: 1px" aria-hidden="true"></i><i class="fa fa-ellipsis-v" style="padding-right: 10px" aria-hidden="true"></i>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    <b>Week 0 - INTRO</b>
                                </div>
                                <div>
                                    <i class="fa fa-check-circle wd-icon-green" aria-hidden="true"></i>
                                    <i class="fa fa-plus wd-padding-20-right" aria-hidden="true"></i>
                                    <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                </div>        
                            </li>
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">LEARNING OBJECTIVES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Introduction to the course</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Learn what is Web Development</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Creating a development environment</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Creating a Web Application</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Getting started with the 1st assignment</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                            
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">READING</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 1 - Introduction</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                    
                            
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">SLIDES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Full Stack Developer - Chapter 1 - Introduction
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Creating an HTTP server with Node.js Links to an external site
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Creating a react Application Links to an external site
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                   
                            
                            <li class="list-group-item list-group-item-heading d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fa fa-ellipsis-v" style="padding-right: 1px" aria-hidden="true"></i><i class="fa fa-ellipsis-v" style="padding-right: 10px" aria-hidden="true"></i>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    <b>Week 1 - HTML</b>
                                </div>
                                <div>
                                    <i class="fa fa-check-circle wd-icon-green" aria-hidden="true"></i>
                                    <i class="fa fa-plus wd-padding-20-right" aria-hidden="true"></i>
                                    <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                </div>        
                            </li>
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">LEARNING OBJECTIVES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Learn how to create user interfaces with HTML</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Keep working on assignment 1</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Deploy the assignment to Netlify</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                    
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">READING</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 1 - Introduction</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                    
                            
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">SLIDES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Introduction to HTML and the DOM
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Formatting Web content with Headings and Paragraphs Links to an external site.
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Formatting content with Lists and Tables
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                   
                            
                            <li class="list-group-item list-group-item-heading d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fa fa-ellipsis-v" style="padding-right: 1px" aria-hidden="true"></i><i class="fa fa-ellipsis-v" style="padding-right: 10px" aria-hidden="true"></i>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    <b>Week 2 - CSS</b>
                                </div>
                                <div>
                                    <i class="fa fa-check-circle wd-icon-green" aria-hidden="true"></i>
                                    <i class="fa fa-plus wd-padding-20-right" aria-hidden="true"></i>
                                    <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                </div>        
                            </li>
                           
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">LEARNING OBJECTIVES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Introduction to CSS</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Selectors by tag ID, classes, and document structure</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Styling color and background color</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Styling dimensions and positions</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">The box model - styling margins, borders, and paddings</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                                                      

                      
                           
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">READING</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                    
                            
                           
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">SLIDES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Introduction to Cascading Style Sheets
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Styling with Colors
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            The Box Model
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                   
                       
                            <li class="list-group-item list-group-item-heading d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fa fa-ellipsis-v" style="padding-right: 1px" aria-hidden="true"></i><i class="fa fa-ellipsis-v" style="padding-right: 10px" aria-hidden="true"></i>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    <b>Week 3 - CSS Libraries</b>
                                </div>
                                <div>
                                    <i class="fa fa-check-circle wd-icon-green" aria-hidden="true"></i>
                                    <i class="fa fa-plus wd-padding-20-right" aria-hidden="true"></i>
                                    <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                </div>        
                            </li>
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">LEARNING OBJECTIVES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">CSS Libraries: Bootstrap, Tailwind</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Float and grid systems</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Media queries and responsive design</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Laying out content with Flex</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Final Project Requirements</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                                                 

                           
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">READING</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 4 - Styling Web Pages With The Bootstrap CSS Library</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <span class="ms-5">Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets</span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                  
                            
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <!-- <i class="fa fa-pencil-square-o wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i> -->
                                        <span class="fs-5 ms-2">SLIDES</span>                                        
                                    </div>                                                                        
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Introduction to Bootstrap
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Grid System
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>
                                <a href="#" class="list-group-item d-flex justify-content-between align-items-center">
                                    <div >
                                        <i class="fa fa-ellipsis-v" style="padding-right: 2px;" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>                                            
                                        <i class="fa fa-link wd-icon-green" style="padding-left: 5px;"  aria-hidden="true"></i>
                                        <span class="ms-2 wd-fg-kanbasred">
                                            Bootstrap Navigation
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </span>           
                                    </div>                                                                                                          
                                    <div>
                                        <i class="fa fa-check-circle wd-icon-green wd-padding-20-right" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i>
                                    </div>  
                                </a>                                     
                        </ul>
                    </div>  

</div>
            </div>
        </div>




    </div>
    <div class="d-none d-xl-block">
        <h5 class="mb-3">Course Status</h5>
        <div class="btn-group mb-3">
            <button class="btn btn-light btn-outline-secondary" style="margin-right:5px;"><i class="fa fa-ban" aria-hidden="true"></i>
                  Unpublish</button>
            <button class="btn btn-success"><i class="fa fa-check-circle" aria-hidden="true"></i>
                Publish</button>
        </div>

        <ul class="list-unstyled">

            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-download" aria-hidden="true"></i> Import Existing Content</button>
            </li>
            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-upload" aria-hidden="true"></i> Import From Commons</button></li>
            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-bullseye" aria-hidden="true"></i> Choose Home Page</button></li>
            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> View Course Stream</button></li>
            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-bullhorn" aria-hidden="true"></i> New Announcement</button></li>
            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> New Analytics</button></li>
            <li><button class="btn btn-light btn-outline-secondary" style="width:80%; margin:5px;">
                <i class="fa fa-bell" aria-hidden="true"></i> View Course Notification</button></li>
        </ul>
        <h5 class="mb-3">To Do</h5>
        <hr/>

            <span class="fa-stack">
  <i class="fa fa-circle fa-stack-2x" aria-hidden="true" style="color:red;"></i>
  <i class="fa fa-stack-1x" aria-hidden="true" style="color:white;">1</i>
</span>
            <a href="#" class="btn btn-link" style="text-decoration: none; color:red;">Grade A1 - ENV + HTML</a>  <i class="fa fa-times float-end" aria-hidden="true"></i>
           <br/> <sub>100 points . Sept 18 at 11:59 pm</sub><br/>


        <br/>
        <h5 class="mb-3">
             Coming Up <i class="fa fa-calendar float-end" aria-hidden="true"> <a href="#" class="btn btn-link" style="text-decoration: none; color:red;">View Calendar</a></i>
        </h5>
        <hr/>

        <ul class="list-unstyled">
            <li>
                <i class="fa fa-calendar" aria-hidden="true"> <a href="#" class="btn btn-link" style="text-decoration: none; color:red;">Lecture</a></i>
                <br/><sub>CS4550,12631,202410 Sep 7 at 11:45am</sub><br/>
            </li>
            <li>
                <i class="fa fa-calendar" aria-hidden="true"> <a href="#" class="btn btn-link" style="text-decoration: none; color:red;">CS5610 06 SP23 Lecture</a></i>
                <br/><sub>CS4550,12631,202410 Sep 11 at 11:45am</sub><br/>
            </li>
            <li>
                <i class="fa fa-calendar" aria-hidden="true"> <a href="#" class="btn btn-link" style="text-decoration: none; color:red;">CS5610 Web Development- Summer 2023</a></i>
                <br/><sub>CS5610 06 SP23 Lecture Sep 11 at 6pm</sub><br/>
            </li>
                 </ul>

    </div>
</div>
`)
}
export default Home;