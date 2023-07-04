import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";

export default class UserDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: "",
    };

  }

  componentDidMount() {

    fetch("http://localhost:5000/userData", {

      method: "POST",
      crossDomain: true,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })

      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });

  }

  render() {

    const { firstName, lastName } = this.state.userData;
    const fullName = `${firstName} ${lastName}`;

    return (
      <div>
        <h1>Name: {fullName}</h1>

        <br />

        <h1>Email: {this.state.userData.email}</h1><br></br>
        <Link to="/logout" className="btn btn-primary login-button">
          Log Out
        </Link>
      </div>
    );
  }
}