import React, { Component } from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";

import "brace/mode/jsx";
import "brace/theme/tomorrow_night_eighties";

import "./Editor.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }

  _resizeEditor() {
    const editor = ReactDOM.findDOMNode(this.refs.Editor);
    this.setState({ width: editor.offsetWidth, height: editor.offsetHeight });
  }

  componentDidMount() {
    this._resizeEditor();
  }

  render() {
    return (
      <div className="Editor h100" ref="Editor">
        <AceEditor
          width={`${this.state.width}px`}
          height={`${this.state.height}px`}
          mode="jsx"
          theme="tomorrow_night_eighties"
          fontSize={16}
          focus
          tabSize={2}
          options={{
            displayIndentGuides: true
          }}
          onChange={value => console.log(value)}
          style={{ position: "absolute" }}
        />
      </div>
    );
  }
}

export default Editor;
