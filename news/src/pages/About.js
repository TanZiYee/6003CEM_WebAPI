import React from "react";
import AboutUs from '../assets/about.png';

function About() {
  return <div className="about">
    <img src={AboutUs} />
    <br></br>
    <br></br>
    <h1> ABOUT US </h1>
    <br></br>
    <h2> Welcome to NewsWing!</h2>
    <p>
    Thank you for choosing NewsWing as your trusted source for news, weather, blogs images, and articles. We value your engagement and feedback, as it helps us improve and enhance your experience on our platform.

    Our team at NewsWing is dedicated to delivering a user-friendly interface, curated content of the highest quality, and continuous improvement.
    </p>
    <br></br>
    <br></br>
  </div>;
}

export default About