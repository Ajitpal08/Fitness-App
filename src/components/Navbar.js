import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="nav-container" >
      <div className="nav-child">
      <div className="logo">
        <span>Fitness Center</span>
      </div>
      <div className="main-links">
        <span>
          <Link to="/" className="a">Home</Link>
        </span>
        <span>
          <Link to="/about" className="a">About</Link>
        </span>
        <span>
          <Link to="/courses" className="a">Courses</Link>
        </span>
        <span>
          <Link to="/testimonials" className="a">Testimonials</Link>
        </span>
        <span>
          <Link to="/contact" className="a">Contact</Link>
        </span>
      </div>
      {/* <div>
        <button >
          <Link to="/contact">Contact Me</Link>
        </button>
      </div> */}

      </div>
    </nav>
  );
};

export default Navbar;
