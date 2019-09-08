import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { auth, authError } = props;

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeFirstName = e => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = e => {
    setLastName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signUp({
      email,
      password,
      firstName,
      lastName
    });
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container form">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChangeEmail} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChangeFirstName} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChangeLastName} />
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
          <button className="btn pink lighten-1 z-depth-0">SignUp</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

const mapSatetToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapSatetToProps,
  mapDispatchToProps
)(SignUp);
