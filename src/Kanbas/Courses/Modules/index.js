import ModuleList from "./ModuleList";
import "../../../lib/bootstrap/bootstrap.css"
import "../../../lib/font-awesome/css/font-awesome.css"
import "../../../styles.css"
function Modules() {
return (
    <div >
    <div className="container">
   
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
<ModuleList />
</div></div>
);
}
export default Modules;