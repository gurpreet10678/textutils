import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a exact className={`navbar-brand text-${props.textMode}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.textMode}`} exact aria-current="page" href="#" >Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" exact to="/about">{props.aboutText}</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

          <button className="dot btn bg-dark mx-1 border border-white" value={"dark"} onClick={props.colorMode}></button>
          <button className="dot btn bg-light mx-1 border border-dark" value={"light"} onClick={props.colorMode}></button>
          <button className="dot btn bg-danger mx-1 border border-white" value={"danger"} onClick={props.colorMode}></button>
          

          
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set Title here",
  aboutText: "set About text here",
};
