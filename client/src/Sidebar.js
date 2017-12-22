import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Sidebar.css";

const Sidebar = props => (
  <div className="Sidebar p1 h100">
    {props.elements.map(element => (
      <div
        key={element}
        className={classnames({
          SidebarElement: true,
          p1: true,
          Selected: element === props.selected
        })}
        onClick={props.selectElement.bind(null, element)}
      >
        {element}
      </div>
    ))}
  </div>
);

Sidebar.propTypes = {
  selectElement: PropTypes.func,
  elements: PropTypes.array,
  selected: PropTypes.string
};

export default Sidebar;
