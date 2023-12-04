import Assignment3 from "./a3";
import {Link} from "react-router-dom";
import Nav from "../Nav_new.js";
import Assignment4 from "./a4";
import {Routes, Route, Navigate} from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5/index.js";
import Assignment6 from "./a6/index.js";

function Labs() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
    ];
    console.log("Working with arrays")
    console.log("numberArray1",numberArray1)
    console.log("stringArray1",stringArray1)
    console.log("variableArray1",variableArray1)
return (
    <Provider store={store}>
<div className="container">

{/* <h1>Assignment 3</h1> */}
<Nav/>
<Routes>
<Route path="/"
element={<Navigate
to="a3"/>}/>
<Route path="a3"
element={<Assignment3/>}/>
<Route path="a4"
element={<Assignment4/>}/>
<Route path="a5"
element={<Assignment5/>}/>
<Route path="a6"
element={<Assignment6/>}/>

</Routes>
{/* <Link to="/hello">Hello</Link> |
<Link to="/Labs/a3">A3</Link> |
<Link to="/Kanbas">Kanbas</Link>
<Assignment3/> */}
</div>
</Provider>
);

}
export default Labs;
