import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () =>{

    const location = useLocation();

    return (
    <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to='/' className = {location.pathname === '/' ? "nav-link active" : "nav-link"}>Zackariah Shone</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
      <li className="nav-item active">
      <Link to='/' className = {location.pathname === '/' ? "nav-link active" : "nav-link"}>Home</Link>
      </li>
      <li className="nav-item">
      <Link to='/about' className = {location.pathname === '/about' ? "nav-link active" : "nav-link"}>About</Link>
      </li>
      <li className="nav-item">
      <Link to='/projects' className = {location.pathname === '/projects' ? "nav-link active" : "nav-link"}>Projects</Link>
      </li>
      <li className="nav-item">
      <Link to='/blog' className = {location.pathname === '/blog' ? "nav-link active" : "nav-link"}>Blog</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
    </div>        
        /* // <ul className= "nav nav-tabs float-right">
        //     <li className= "nav-item">
        //         <Link to='/' className = {location.pathname === '/' ? "nav-link active" : "nav-link"}>
        //             Home
        //         </Link>
        //     </li>
        //     <li className= "nav-item">
        //         <Link to='/about' className = {location.pathname === '/about' ? "nav-link active" : "nav-link"}>
        //             About Me
        //         </Link>
        //     </li>
        //     <li className= "nav-item">
        //         <Link to='/projects' className = {location.pathname === '/projects' ? "nav-link active" : "nav-link"}>
        //             Pojects Ive Worked On
        //         </Link>
        //     </li>
        //     <li className= "nav-item">
        //         <Link to='/blog' className = {location.pathname === '/blog' ? "nav-link active" : "nav-link"}>
        //             BLOG!!
        //         </Link>
        //     </li>
            
        //  </ul> */
    )

}

export default NavBar;