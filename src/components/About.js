import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    window.scrollTo(0,0,) ;
  
  return (
    <div className="about">
      <div className="about-page">
        <img src="./images/imgAbout1.jpg" className="img-About" width="100%" height="100%"/>
        <h1 className="H-T">About us</h1>
      </div>

      <div className="row1">
        <img
          src="./images/me.jpg"
          width="600px"
          height="450px"
          className="about-me"
        />
        <p className="para">
        <h1 className="head-about"><span>Fitness Center</span></h1>
       
        <h4 className="para-h4">
          <ul>
            <li>
               <p>
                Men and Women Fitness and Workout</p>
            </li>
            <li>
               <p>Your Diet Plan</p>
            </li>
            <li>
               <p>Personal Training </p>
            </li>
          </ul>
        </h4>
        <button className="courses-btn" onClick={() => navigate('/courses')}>Mycourses</button>
        </p>
      </div>
    </div>
  );
};

export default About;
