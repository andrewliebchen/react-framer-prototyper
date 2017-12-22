import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Flex } from "reflexbox";

import Nav from "./Nav";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const Routes = props => (
  <Router>
    <Flex className="Wrapper" align="stretch" justify="stretch" column>
      <Nav {...props} />
      {props.pages.map(page => (
        <Route
          key={page}
          path={`/${page}`}
          render={() => <App page={page} />}
        />
      ))}
    </Flex>
  </Router>
);

ReactDOM.render(
  <Routes pages={["data", "styles", "components", "layouts", "flows"]} />,
  document.getElementById("root")
);
registerServiceWorker();
