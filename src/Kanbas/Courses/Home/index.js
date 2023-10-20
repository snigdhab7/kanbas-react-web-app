import ModuleList from "../Modules/ModuleList";
import "../../../lib/bootstrap/bootstrap.css"
import "../../../lib/font-awesome/css/font-awesome.css"
import "../../../styles.css"
import "./index.css"
function Home() {
    return (
        <>
        <div class="row">

        <div class="col-md-8 d-flex justify-content-center">
            
                <button class="btn btn-secondary float-end" style={{margin:'5px'}}>Collapse All</button>
                <button class="btn btn-secondary float-end" style={{margin:'5px'}}>View Progress</button>
                <div class="dropdown float-end">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="publishDropdown"
                            data-bs-toggle="dropdown" aria-expanded="false" style={{margin:'5px'}}>
                        Publish All
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="publishDropdown" style={{margin:'5px'}}>
                        <li><a class="dropdown-item" href="#">Publish all items and modules</a></li>
                        <li><a class="dropdown-item" href="#">UnPublish</a></li>
                    </ul>
                </div>
                <button class="btn btn-danger float-end" style={{margin:'5px'}}>+ Module</button>
            </div>
            
            </div>
            <hr />
    <div className="wd-flex-row-container">
    <div class="col-md-8">
        
    <ModuleList />
    </div>
    <div class="col-md-4">
    <div className="d-none d-xl-block">
        <h5 className="mb-4">Course Status</h5>
        <div className="btn-group mb-4">
            <button className="btn btn-light btn-outline-secondary" style={{marginRight:'5px'}}><i className="fa fa-ban" aria-hidden="true"></i>
                  Unpublish</button>
            <button className="btn btn-success"><i className="fa fa-check-circle" aria-hidden="true"></i>
                Publish</button>
        </div>

        <ul className="list-unstyled">

            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-download" aria-hidden="true"></i> Import Existing Content</button>
            </li>
            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-upload" aria-hidden="true"></i> Import From Commons</button></li>
            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-bullseye" aria-hidden="true"></i> Choose Home Page</button></li>
            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-bar-chart" aria-hidden="true"></i> View Course Stream</button></li>
            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-bullhorn" aria-hidden="true"></i> New Announcement</button></li>
            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-bar-chart" aria-hidden="true"></i> New Analytics</button></li>
            <li><button className="btn btn-light btn-outline-secondary" style={{width:'100%', margin:'5px'}}>
                <i className="fa fa-bell" aria-hidden="true"></i> View Course Notification</button></li>
        </ul>
        <h5 className="mb-4">To Do</h5>
        <hr/>

            <span className="fa-stack">
  <i className="fa fa-circle fa-stack-2x" aria-hidden="true" style={{color:'red'}}></i>
  <i className="fa fa-stack-1x" aria-hidden="true" style={{color:'white'}}>1</i>
</span>
            <a href="#" className="btn btn-link" style={{textDecoration: 'none', color:'red'}}>Grade A1 - ENV + HTML</a>  <i className="fa fa-times float-end" aria-hidden="true"></i>
           <br/> <sub>100 points . Sept 18 at 11:59 pm</sub><br/>


        <br/>
        <h5 className="mb-4">
             Coming Up <i className="fa fa-calendar float-end" aria-hidden="true"> <a href="#" className="btn btn-link" style={{textDecoration: 'none', color:'red'}}>View Calendar</a></i>
        </h5>
        <hr/>

        <ul className="list-unstyled">
            <li>
                <i className="fa fa-calendar" aria-hidden="true"> <a href="#" className="btn btn-link" style={{textDecoration: 'none', color:'red'}}>Lecture</a></i>
                <br/><sub>CS4550,12631,202410 Sep 7 at 11:45am</sub><br/>
            </li>
            <li>
                <i className="fa fa-calendar" aria-hidden="true"> <a href="#" className="btn btn-link" style={{textDecoration: 'none', color:'red'}}>CS5610 06 SP23 Lecture</a></i>
                <br/><sub>CS4550,12631,202410 Sep 11 at 11:45am</sub><br/>
            </li>
            <li>
                <i className="fa fa-calendar" aria-hidden="true"> <a href="#" className="btn btn-link" style={{textDecoration: 'none', color:'red'}}>CS5610 Web Development- Summer 2023</a></i>
                <br/><sub>CS5610 06 SP23 Lecture Sep 11 at 6pm</sub><br/>
            </li>
                 </ul>
</div>
    </div>
    
    </div></>
    );
    }
    export default Home;