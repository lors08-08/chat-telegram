import React from "react";
import ReactDOM from "react-dom";
import application from "./redux/application";
import contacts from "./redux/contacts";
import messages from "./redux/messages";
import profile from "./redux/profile";
import "./App.css";
import Root from "./Root";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";

const rootReducer = combineReducers({
  application,
  contacts,
  messages,
  profile,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
