import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      successMessage: "",
      showPassword: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    console.log(email, password);

    if (!email || !password) {
      this.setState({
        error: "*Please provide both email and password.",
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

    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if (data.status == "ok") {
          alert("Login Successful!");

          // Perform additional actions upon successful login
          window.localStorage.setItem("token", data.data);
          window.location.href = "./Home";
        }
        
        else {
          this.setState({
            error: "Invalid Credentials. Please try again.",
            successMessage: "",
          });
        }
      })

      .catch((error) => {
        console.error("Error:", error);
        this.setState({
          error: "An error occurred. Please try again later.",
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
    const { email, password, error, successMessage, showPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Welcome</h3>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="mb-3">
          <label style={{ fontSize: "20px" }}>Email address</label>
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
              type={showPassword ? "text" : "password"} // Toggle input type
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

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              &nbsp;Remember Me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary login-button">
            LOGIN
          </button>
        </div>

        <p className="register-link">
          Don't have an account? <a href="/signUpForm">Create new account</a>
        </p>

        <p className="register-link">
          <a href="/reset">Forgot Password?</a>
        </p>
      </form>
    );
  }
}
