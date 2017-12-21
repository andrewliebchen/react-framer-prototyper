import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import classnames from "classnames";

import "./App.css";

const navItems = ["Data", "Styles", "Components", "Layouts", "Flows"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Data"
    };
  }
  render() {
    return (
      <Flex className="App" align="stretch" justify="stretch" column>
        <Flex className="Nav">
          {navItems.map(item => (
            <Box
              key={item}
              auto
              className={classnames({
                NavItem: true,
                Selected: item === this.state.currentPage
              })}
            >
              {item}
            </Box>
          ))}
        </Flex>
        <Flex style={{ height: "100%" }}>
          <Box className="Sidebar" w={1 / 6}>
            Sidebar
          </Box>
          <Box className="Editor" auto>
            Editor
          </Box>
          <Box className="Preview" auto>
            Preview
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default App;
