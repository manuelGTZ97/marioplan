import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

function ProjectDetail(props) {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  return project ? (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>
            Posted By {project.authorFirstName} {project.authorLastName}{" "}
          </div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container center">
      <p>Loading Project...</p>
    </div>
  );
}

// Ownprops specified the props provided by the parent
const mapStateToProps = (state, ownProps) => {
  // Get the router id
  const id = ownProps.match.params.id;
  // Get the firebaseConnect data.
  const projects = state.firestore.data.projects;
  //If project is true, get the project with the correctly id, if not, set to null.
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
