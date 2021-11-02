import React from "react";
import "./Header.css";
import history from "../History";
import { BrowserRouter as Router} from "react-router-dom";

const Header = function(props){
    return(
        <>
        <Router>
        <div className = "header">
            <span className="heading">Food HUB</span>
            <span className="pageTitle" onClick={() => history.push('/')}>{props.title}</span>
        </div>
        </Router>
        </>
    )
}
export default Header