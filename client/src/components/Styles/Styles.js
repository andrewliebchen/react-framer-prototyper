import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Flex, Box } from "reflexbox";

import { callGetAllStyles } from "./StylesAsyncActions";

import Sidebar from "../Sidebar";
import Editor from "../Editor";
import Preview from "../Preview";

import "./Styles.css";

const Styles = props => (
  <Flex className="Styles h100">
    <Box w={1 / 6}>
      <Sidebar
        selectElement={() => console.log("select")}
        handleAddElement={() => console.log("add")}
        elements={props.styles}
      />
    </Box>
    <Box auto>
      <Editor updateCode={value => console.log("update")} code={"code"} />
    </Box>
    <Box auto>
      <Preview />
    </Box>
  </Flex>
);

Styles.propTypes = {
  styles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  styles: state.styles
});

const mapDispatchToProps = dispatch => ({
  dispatchCallGetAllStyles: () => dispatch(callGetAllStyles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Styles);
