const initState = {
  projects: [
    { id: "1", title: "Dummy content", content: "Example of redux." },
    { id: "2", title: "Dummy content", content: "Example of redux." },
    { id: "3", title: "Dummy content", content: "Example of redux." }
  ]
};
const projectReducer = (state = initState, action) => {
  // Evaluate the type of the dispatch function
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Create project");
      // Return the initial state.
      // Here is where the redux state is updated, but the project data works with firebaseStoreConnect and is not using the redux store.
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
