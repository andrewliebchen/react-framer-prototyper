import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Preview from "./Preview";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Flex className="App h100">
        <Box w={1 / 6}>
          <Sidebar />
        </Box>
        <Box auto>
          <Editor />
        </Box>
        <Box auto>
          <Preview />
        </Box>
      </Flex>
    );
  }
}

App.propTypes = {
  pages: PropTypes.array
};

export default App;
