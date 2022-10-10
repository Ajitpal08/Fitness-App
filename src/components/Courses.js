import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  window.scrollTo(0, 0);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    setCourse();
  }, [course]);

  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="course">
        <img
          src="./images/courses.jpg"
          className="Course-img"
          width="100%"
          height="650px"
        />
        <h1 className="course-head">My Courses</h1>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-md-4 mt-5">
          <img
            src="./images/bodybuilding.jpg"
            alt="img"
            width="100%"
            className="img1-course"
          />
          <h1 className="plans-head">Body Building</h1>
          <p>Don't be scared to LIFT HEAVY! ...</p>
          <button
            value="0"
            className="course-btn"
            onClick={(e) => navigate(`/form?healthValue=${e.target.value}`)}
          >
            Enroll Now
          </button>
        </div>
        <div className="col-md-4 mt-5">
          <img
            src="./images/fatloss.jpg"
            alt="img"
            width="100%"
            className="img2-course"
          />
          <h1 className="plans-head">Fat Loss</h1>
          <p>
            Fat loss refers to weight loss from fat, and it's a more specific
            and healthful goal than weight loss.
          </p>
          <button
            className="course-btn"
            value="1"
            onClick={(e) => navigate(`/form?healthValue=${e.target.value}`)}
          >
            Enroll Now
          </button>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-md-4 mt-5">
          <img
            src="./images/diet.jpg"
            alt="img"
            width="100%"
            className="img4-course"
          />
          <h1 className="plans-head">Get your Diet Plan</h1>
          <p>Eat healthy for healthy body</p>
          <button
            className="course-btn"
            value="2"
            onClick={(e) => navigate(`/form?healthValue=${e.target.value}`)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;

{
  /* <div className="row">
<div className="col-md-3">
  <img src="./images/bodybuilding.jpg" width="80%" height="100%" />
  <h2 className="head1">
    <span>Body Building</span>
  </h2>
  <h4>Don't be scared to LIFT HEAVY! ...</h4>
</div>
<div className="col-md-3">
  <img src="./images/fatloss.jpg" width="90%" height="100%" />
  <h2 className="head2">
    <span>Fat Loss</span>
  </h2>
  <h4>
    <span>
      Fat loss refers to weight loss from fat, and it's a more specific
      and healthful goal than weight loss.
    </span>
  </h4>
</div>
<div className="col-md-3">
  <img src="./images/personaltrainer.jpg" width="80%" height="100%" />
  <h2 className="head3">
    <span>Personal Training</span>
  </h2>
  <h4>
    Image result for why to have personal trainer Working out with a
    personal trainer can actually boost the success rate of achieving
    your fitness goals by more than 30 percent
  </h4>
</div> */
}
