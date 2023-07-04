import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/banner.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> News Aggregator Website </h1>
        <br></br>
        <br></br>
        <p> FIND WHAT YOU WANT TO KNOW </p>
        <Link to="/loginForm">
          <button> SIGN IN NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home