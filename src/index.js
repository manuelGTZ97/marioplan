// Import all the dependencies
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

// Create the redux store.
// This is the information that redux will manage in all the application.
// 1.- load the root reduces.
// 2.- Pass the compose function. Inside load a thunk middleware that works async with the store and add extra arguments to the actions.
// 3.- ReduxFireStore load the firebase configuration.
// 4.- reactReduxFirebase load the firebase configuration and auth configuration.
// http://docs.react-redux-firebase.com/history/v2.0.0/docs/recipes/auth.html
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users", // firebase root where user profiles are stored
      attachAuthIsReady: true // attaches auth is ready promise to store
    })
  )
);

// Wait for the auth.
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
