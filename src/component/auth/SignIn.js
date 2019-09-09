import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

function SignIn(props) {
  // Create the state hooks.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authError, auth } = props;

  // Function that is listening for changes in the input fields.
  const handleChangeEmail = e => {
    // set the state
    setEmail(e.target.value);
  };

  // Function that is listening for changes in the input fields.
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // set the object
    props.signIn({
      email,
      password
    });
  };

  // If the uid is true, redirect to home
  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChangeEmail} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChangePassword}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

// Map the redux state to props.
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

// Get the dispatch function to props.
const mapDispatchToProps = dispath => {
  return {
    signIn: cred => dispath(signIn(cred))
  };
};

// High order component by redux.
// Connect it provides the component with the redux store, by default, mapStateToProps goes first, and then mapDispathToProps.
// If just want to pass the second function, pass null as the first.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
