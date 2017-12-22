import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Sidebar.css";

const Sidebar = props => (
  <div className="Sidebar p1 h100">
    <button onClick={props.handleAddElement}>Add</button>
    {props.elements &&
      props.elements.map(element => (
        <div
          key={element._id}
          className={classnames({
            SidebarElement: true,
            p1: true,
            Selected: element.name === props.selected
          })}
          onClick={props.selectElement.bind(null, element._id)}
        >
          {element.name}
        </div>
      ))}
  </div>
);

Sidebar.propTypes = {
  selectElement: PropTypes.func,
  elements: PropTypes.array,
  selected: PropTypes.string,
  handleAddElement: PropTypes.func
};

export default Sidebar;
