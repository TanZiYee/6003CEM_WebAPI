import React, { Component } from "react";
// import "./styles.css";
// import "./button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: "",
      showPassword: false,
      successMessage: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { firstName, lastName, email, password } = this.state;
    console.log(firstName, lastName, email, password);
    

    if (!firstName || !lastName || !email || !password) {
      this.setState({
        error: "*Please fill out all the fields.",
        successMessage: "",
      });
      return;
    }
    
    if (password.length < 6) {   
      this.setState({
        error: "*Password should be at least 6 characters long.",
        successMessage: "",
      });
      return;
    }

    
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
    
    .then((res) => res.json())
    
    .then((data) => {
      console.log(data, "userRegister");
      
      this.setState({
        successMessage: "Congratulations! Registration Successful!",
        error: "",
      });
    })
    
    .catch((error) => {
      console.error("Error:", error);
      
      this.setState({
        error: "An error occurred! Please try again later.",
        successMessage: "",
      });
    });
  }
  
  togglePasswordVisibility() {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }
  
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      error,
      successMessage,
      showPassword,
    } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="mb-3">
          <label style={{ fontSize: "20px" }}>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            style={{ fontSize: "16px" }}
            value={firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label style={{ fontSize: "20px" }}>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            style={{ fontSize: "16px" }}
            value={lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label style={{ fontSize: "20px" }}>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            style={{ fontSize: "16px" }}
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        {/* Hide Show Password */}
        <div className="mb-3">
          <label style={{ fontSize: "20px" }}>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}     // Toggle input type
              className="form-control"
              placeholder="Enter Password"
              style={{ fontSize: "16px" }}
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={this.togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="eye-icon"
              />
            </button>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>
        </div>

        <p className="login-link text-right">
          Already registered&nbsp;<a href="/loginForm">Sign In?</a>
        </p>
      </form>
    );
  }
}