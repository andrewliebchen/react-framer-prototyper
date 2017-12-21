import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Flex } from "reflexbox";

import "./Nav.css";

const Nav = props => (
  <Flex className="Nav">
    {props.pages.map(page => (
      <Link
        key={page}
        to={`/${page}`}
        className={classnames({
          NavItem: true,
          p1: true
        })}
      >
        {page}
      </Link>
    ))}
  </Flex>
);

Nav.propTypes = {
  pages: PropTypes.array
};

export default Nav;
