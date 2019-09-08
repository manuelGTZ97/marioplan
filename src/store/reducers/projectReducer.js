const initState = {
  projects: [
    { id: "1", title: "Dummy content", content: "Example of redux." },
    { id: "2", title: "Dummy content", content: "Example of redux." },
    { id: "3", title: "Dummy content", content: "Example of redux." }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Create project");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
