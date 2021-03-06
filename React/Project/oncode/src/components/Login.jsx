import React from "react";
import { Link, withRouter as Router } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        } else return response.json();
      })
      .then(user => {
        this.props.loggedUserToken(
          user.message === "user login" ? user.token : ""
        );
        this.props.history.push("/");
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className='form-container sign-in-container'>
        <h1>Sign in</h1>
        <Link to='/signup'>Need an account?</Link>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
          />
          <button className='btn' type='submit'>
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Router(Login);
