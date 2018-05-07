import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ size, width, auto, extras }) => {
  const base = "col";

  const tokens = [];

  tokens.push("col");

  const calc = `${base}-${size ? size : ""}`;

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Col = ({ children, ...props }) => (
  <div className={buildClassName(props)}>
    {children}
  </div>
);

export default Col;

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
