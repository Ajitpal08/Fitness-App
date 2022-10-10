import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Exercises from "./components/Exercises"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
