import React, { useState } from "react";


const Form = () => {
  window.scrollTo(0, 0);

  console.log(window.location.search.split("=")[1]);

  let healthValue = window.location.search.split("=")[1];

  const [result, setResult] = useState(healthValue);

  const [booking, setBooking] = useState({ FullName: "", age: "", email: "" });
   
  
  const displayRazorpay = async(amount) => {
     
    const { FullName,age,email } = booking;

    if (!FullName || !age || !email) {
        alert("Please fill the fields");  
        return
    };

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      
      
    if(!res) { 
      alert('Razorpay SDK failed to load.Are you online?')
      return
    }
  
 
  const options = {
    key: "rzp_test_oLAGboy0bBBPcS",
    currency: "INR",
    amount: amount ? amount*100 : 100,
    name: `Fitness-Center`,
    description: "Thanks for purchasing",
    image: "",
    
    handler: function () {
        alert("payment is Successfull")
        
      
    },
    prefill: {
        name: "Ajit"
    }
}
const paymentObject = new window.Razorpay(options)

paymentObject.open()
  }

 const handleChange = (e) =>{
    
    // console.log(e.target.value);
    let name, value;
    // console.log(e)
    name = e.target.name
    value = e.target.value
    console.log(name, value)

    setBooking({ ...booking, [name]: value });
 }

  
  
  const data = ["Body Building", "Fat Loss", "Diet Plan"];
   
  const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script")
        script.src = src

        script.onload = () => {
            resolve(true)
        }

        script.onerror = () => {
            resolve(false)
        }

        document.body.appendChild(script)
    })


  

}

  return (
    <>
      <div className="form-container">
        <div>
          <h1 className="form-head">
            <span>Get Your {data[result]} Course</span> 
          </h1>
        </div>
        <div className="form">
          <form >
            <label>Full Name</label>
            <input type="text"  placeholder="name" name="FullName" value={booking.FullName}  className="name"  onChange={handleChange} />
            <br></br>
            <label>Age</label>
            <input type="number" placeholder="age" name="age" value={booking.age} className="age" onChange={handleChange}/>
            <br></br>
            <label>Email Address</label>
            <input type="email" placeholder="email address" name="" value={booking.email}  className="email" onChange={handleChange}/>
            <br></br>
           
            <label>Your Body Type</label>
            <select className="form-select" aria-label="Default select example">
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
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Course Type</option>
              <option value="0">Body Building</option>
              <option value="1">Fat Loss</option>
              <option value="2">Diet Plan</option>
            </select>
            
          </form>

        </div>
       <button className="buy-btn" onClick={(e) => { 
        e.preventDefault();
        displayRazorpay()}} target="blank">Buy Now</button>
      </div>
    </>
  );
};

export default Form;
