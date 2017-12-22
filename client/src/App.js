import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import PropTypes from "prop-types";
import asteroid from "./asteroid";
import _ from "lodash";

import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Preview from "./Preview";

import "./App.css";

let handler;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: null
    };
  }

  componentWillMount() {
    // Subscription
    handler = asteroid.call(`get${_.capitalize(this.props.page)}`);
    handler
      .then(result => {
        console.log("Success");
        this.setState({ elements: result });
      })
      .catch(error => {
        console.log("Error");
        console.error(error);
      });
  }

  componentWillUnmount() {
    // Not sure if this is necessary
    asteroid.unsubscribe(handler.id);
  }

  render() {
    return (
      <Flex className="App h100">
        <Box w={1 / 6}>
          <Sidebar
            selectElement={element => this.setState({ selected: element })}
            {...this.state}
          />
        </Box>
        <Box auto>
          <Editor
            code="<div>Hello world!</div>"
            updateCode={value => console.log(value)}
          />
        </Box>
        <Box auto>
          <Preview />
        </Box>
      </Flex>
    );
  }
}

App.propTypes = {
  page: PropTypes.string
};

export default App;
