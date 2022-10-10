import React, { useRef, useState } from "react";
import "../Styles/style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Testimonials.css";
import { TestimonialsData } from "./TestimonialsData";

const Home = () => {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialsData.length;

  const transition= {type:'string',duration :3}

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fwaj9tm",
        "template_5c157lg",
        form.current,
        "2qtsypj4cFOTYB1HW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  
  return (
    <>
      <div className="home-img1">
        <img
          src="./images/home-img.jpg"
          width="100%"
          height="120%"
          className="home-img"
        />
        <div className="upper-content">
          <h1 className="home-head">Fitness Center</h1>
          <p className="inner-content">
            <motion.div
              initial={{ left: "200px" }}
              whileInView={{ left: "8px" }}
              transition={{...transition,type:'tween'}}
            ></motion.div>
            <span>Sweat, Smile and Repeat</span>
          </p>
        </div>

        <div className="upper-content-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you shape and build your ideal body and live
              up your life to fullest
            </span>
          </div>
        </div>
        <div className="review">
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Coaches</span>
          </div>
          <div>
            <span>+678</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        </div>
      </div>
      <div className="container-t">
        <div className="Testimonials">
          <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>say about us</span>
            <motion.span 
              key={selected}
              initial={{opacity:0, x: -100}}
              animate={{opacity:1, x: 0}}
              exit={{opacity:0, x:100}}
              transition={transition}>{TestimonialsData[selected].review}</motion.span>
            <span>
              <span className="t-name">{TestimonialsData[selected].name} </span>{" "}
              - {TestimonialsData[selected].status}
            </span>
          </div>
          <div className="right-t">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
          ></motion.div>
           <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
          ></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity:0, x: 100}}
            animate={{opacity:1, x: 0}}
            exit={{opacity:0, x:-100}}
            transition={transition}
            src={TestimonialsData[selected].image} />
            <div className="arrows">
              <i
                onClick={() => {
                  selected === 0
                    ? setSelected(tLength - 1)
                    : setSelected((prev) => prev - 1);
                }}
                class="bi bi-arrow-left-circle"
              ></i>
              <i
                onClick={() => {
                  selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                class="bi bi-arrow-right-circle"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">READY TO </span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className="stroke-text">WITH US?</span>
          </div>
        </div>
        <div className="right-j">
          <form
            ref={form}
            action=""
            className="email-container"
            onSubmit={sendEmail}
          >
            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email-address"
            />
            <button className="btn btn-j">Join now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
