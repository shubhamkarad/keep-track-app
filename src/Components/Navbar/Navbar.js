import React, {Component} from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component{

    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">Keep Track</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
            <NavLink to="/" className="nav-link active " aria-current="page">Home</NavLink>
            <NavLink to="/create" className="nav-link">Create New Track</NavLink>
            <NavLink to="/user" className="nav-link">create New User</NavLink>
           
        </div>
        </div>
        </div>
</nav>
        )
    }
}
export default Navbar;