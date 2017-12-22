import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Flex } from "reflexbox";

import Nav from "./components/Nav";
import Styles from "./components/Styles/Styles";

import registerServiceWorker from "./utils/registerServiceWorker";

import "./index.css";

const Routes = props => (
  <Router>
    <Flex className="Wrapper" align="stretch" justify="stretch" column>
      <Nav pages={["data", "styles", "components", "layouts", "flows"]} />
      <Route path="/styles" component={Styles} />
    </Flex>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
