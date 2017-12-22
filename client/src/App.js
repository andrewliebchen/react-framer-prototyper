import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import PropTypes from "prop-types";
import asteroid from "./asteroid";
import update from "immutability-helper";
import _ from "lodash";

import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Preview from "./Preview";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    asteroid.subscribe(this.props.page);

    this.state = {
      loading: true,
      elements: []
    };
  }

  componentWillMount() {
    // get initial collection
    asteroid
      .call(`get${_.capitalize(this.props.page)}`)
      .then(result =>
        this.setState({
          elements: result,
          selected: result[0]._id,
          loading: false
        })
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    // Need changed, removed... and extract these into a util
    asteroid.ddp.on("added", doc => {
      const docObj = Object.assign({}, doc.fields, { _id: doc.id });
      this.setState({
        elements: update(this.state.elements, { $push: [docObj] })
      });
    });
  }

  render() {
    return (
      <Flex className="App h100">
        <Box w={1 / 6}>
          <Sidebar
            selectElement={element => this.setState({ selected: element })}
            handleAddElement={() =>
              asteroid.call(`add${_.capitalize(this.props.page)}`, {
                createdAt: Date.now(),
                name: "untitled"
              })}
            {...this.state}
          />
        </Box>
        <Box auto>
          <Editor
            updateCode={value => console.log(value)}
            code={
              !this.state.loading
                ? _.find(this.state.elements, { _id: this.state.selected }).code
                : ""
            }
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
