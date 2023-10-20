import KanbasNavigation from "../KanbasNavigation/index.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/index.js";
import Courses from "./Courses/index.js";
import Account from "./Account/index.js";
function Kanbas() {
    return (
    <div className="d-flex">
    <KanbasNavigation />
    <div>
  {/*   <h1>Account</h1>
    <h1>Dashboard</h1>
    <h1>Courses</h1> */}
    <Routes>
<Route path="/" element={<Navigate to="Dashboard" />} />
<Route path="Account" element={<Account/>} />
<Route path="Dashboard" element={<Dashboard />} />
<Route path="Courses/:courseId/*" element={<Courses />} />
</Routes>
    </div>
    </div>
    );
    }
    export default Kanbas;

/* import {Link} from "react-router-dom";
import Nav from "../Nav_new";
import KanbasNavigation from "../KanbasNavigation/index.js";

function Kanbas() {
    return(
        <div className="container">
            <Nav/>
        <Link to="/hello">Hello</Link> |
        <Link to="/Labs/a3">A3</Link> |
        <Link to="/Kanbas">Kanbas</Link>
    <h1>Kanbas</h1>
    <KanbasNavigation />

    </div>
    );
    }
    export default Kanbas
     */