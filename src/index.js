import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

import "bootstrap/scss/bootstrap.scss"
import "bootstrap/js/src/collapse"

import App from "./components/app";
import store from "./components/app/store"
import PushNotification from "./features/push-notification/push-notification";

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
      <PushNotification />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
