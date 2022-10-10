import React from 'react'

const Contact = () => {
    
  return (
    <div class="main-block">
     
    {/* <div class="left-part">
      <i class="fas fa-envelope"></i>
      <i class="fas fa-at"></i>
      <i class="fas fa-mail-bulk"></i>
    </div> */}
    <div className='contact-form'>
    <form action="/">
      <h1>Contact Us</h1>
      <div class="info">
        <input class="fname" type="text" name="name" placeholder="Full name" />
        <input type="text" name="name" placeholder="Email"/>
        <input type="text" name="name" placeholder="Phone number"/>
        
      </div>
      <p>Message</p>
      <div>
        <textarea rows="4"></textarea>
      </div> 
       <button type="submit" href="/">Submit</button>
    </form> 
    </div>
    <div className="contact-img">
      <img src='./images/imgcontact.jpg' width="100%" height="500px"/>
      </div>
  </div>
  )
}

export default Contact