import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleButton } from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)


  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <nav className="nav-container">
      <div className= "nav-child">
        <div className="logo">
          <span>Fitness Center</span>
        </div>
        <div className= {showMediaIcons ? "main-links mobile-menu-links" : "main-links" }>
          <span>
            <Link to="/" className="a">
              Home
            </Link>
          </span>
          <span>
            <Link to="/about" className="a">
              About
            </Link>
          </span>
          <span>
            <Link to="/courses" className="a">
              Courses
            </Link>
          </span>
          <span>
            <Link to="/testimonials" className="a">
              Testimonials
            </Link>
          </span>
          <span>
            <Link to="/contact" className="a">
              Contact
            </Link>
          </span>
        </div>
        <div className="nav-btn">
          {user?.displayName ? (
            <button className="signout-btn" onClick={handleSignOut}>
              Logout
            </button>
          ) : (
            <GoogleButton className="signin-btn" label="SignIn" onClick={handleGoogleSignIn}/>
          )}
        </div>
        <div className="hamburger-menu">
            <a href="#"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
             
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
