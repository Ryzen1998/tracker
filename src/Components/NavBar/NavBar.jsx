import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Authcontext from "../../Context/AuthContext";

const NavBar = () => {
  const {authHeader,logout } = useContext(Authcontext);

  return (
    <>
      <nav style={{ height: "70px" }} className="border fixed split-nav">
        <div className="nav-brand">
          <h3>
            <Link to="#">Faded</Link>
          </h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <label htmlFor="collapsible1">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
          <div className="collapsible-body">
            <ul className="inline">
              <li>  <Link to='/about'>About</Link></li>
              <li>
                {authHeader===''&&(window.location.pathname === "/login"||window.location.pathname === "/" ? (
                  <Link to="/register">Register</Link>
                ) : (
                  <Link to="/login">Login</Link>
                ))}
              

                {authHeader!==''&&(  <Link to='/login'  onClick={ logout}>Logout</Link>)}
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
