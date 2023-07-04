import React, { useState } from 'react';
import Logo from '../assets/news.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/home">Home</Link>
        <div className={`dropdown ${openDropdown ? 'open' : ''}`}>
          <button className="dropbtn" onClick={toggleDropdown}>
            APIs
          </button>
          <div class="dropdown">
            <Link to="#"> APIs </Link>
            <div class="dropdown-content">
            <Link to="/news">News</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/image">Images</Link>
            <Link to="/errormessage">Search</Link>
            </div>
          </div>
        </div>
        <Link to="/about">About Us</Link>
        <Link to="/userDetails">Profile</Link>
        {/* <Link to="/loginForm">Login</Link>
        <Link to="/signUpForm">Register</Link> */}
      </div>
    </div>
  );
}

export default Navbar