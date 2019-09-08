import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

function CreateProject(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { auth } = props;

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  const handleChangeContent = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.createProject({
      title,
      content
    });
    props.history.push("/");
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChangeTitle} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={handleChangeContent}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
