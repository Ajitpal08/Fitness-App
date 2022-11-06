import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        
         <div className='footer-left'>
            <h1>Fitness <span>Center</span></h1>
            <p className='footer-links'>
                <Link to="/" className='a'>Home |</Link>
                <Link to="/about" className='a'>About us |</Link>
                <Link to="/courses" className='a'>Courses |</Link>
                <Link to="/testimonials" className='a'>Testimonials |</Link>
                <Link to="/contact" className='a'>Contact us</Link>
            </p>
            <p className="footer-name">
            Copyright © 2022 <strong>FITNESS CENTER</strong> | All Rights
            Reserved </p>
         </div>
            
         <div className="footer-right">
          <div>
          <i class="c bi bi-geo-alt-fill"></i>
          <br></br>
            <p>
              <a href="#">
               Fitness Center,Kurla camp Road near Kali Mata Mandir,421005
              </a>
            </p>
          </div>

          <div>
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png"
              className="c"
              alt=""
            />
            <p>
              <a href="tel:+91 7823868805">+91 7823868805</a>
            </p>
          </div>

          <div>
          <i class="c bi bi-envelope"></i>
            <p>
              <a href="mailto:fitnesscenterclub@gmail.com">
              fitnesscenterclub@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* <div className="footer-right">
          <p className="footer-company-about">
            We Believe that
            <strong> FITNESS CENTER </strong> is about Being fair to all our
            customers,& business party & employees. For we believe good
            intentions yield good products & services is to make Tasty -
            Truckers Living proof that hard-work, integrity, innovation and
            continued support can lead to all levels of success
          </p>
</div> */}
        </div>
    
    </>
  )
}

export default Footer