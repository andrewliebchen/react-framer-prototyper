import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Preview from "./Preview";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "One"
    };
  }

  render() {
    return (
      <Flex className="App h100">
        <Box w={1 / 6}>
          <Sidebar
            elements={["One", "Two"]}
            selectElement={element => this.setState({ selected: element })}
            selected={this.state.selected}
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
  pages: PropTypes.array
};

export default App;
