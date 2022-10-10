import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Form = () => {
  window.scrollTo(0, 0);

  console.log(window.location.search.split("=")[1]);

  let healthValue = window.location.search.split("=")[1];

  const [result, setResult] = useState(healthValue);

  // const data= {
  //   first:  "Body Building",
  //   second: "Fat loss",
  //   third: "Diet Plan"
  // }
  const data = ["Body Building", "Fat Loss", "Diet Plan"];

  return (
    <>
      <div className="form-container">
        <div>
          <h1 className="form-head">
            <span>Get Your {data[result]} Course</span>
          </h1>
        </div>
        <div className="form">
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="name" className="name" />
            <br></br>
            <label>Age</label>
            <input type="number" placeholder="age" className="age" />
            <br></br>
            <label>Email Address</label>
            <input type="email" placeholder="email address" className="email" />
            <br></br>
            <label>Your Body Type</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>select yout body type</option>
              <option value="1">Skinny</option>
              <option value="2">Muscular</option>
              <option value="3">Overweight</option>
            </select>
            <br></br>
            <label>Course Type</label>
            <select
              value={result}
              onChange={(e) => setResult(e.target.value)}
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>Course Type</option>
              <option value="0">Body Building</option>
              <option value="1">Fat Loss</option>
              <option value="2">Diet Plan</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
