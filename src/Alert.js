import React from "react";
import { Alert as ReactstrapAlert } from "reactstrap";

const Alert = (props) => {
  const { color, msg, isAlertOpen = false } = props;

  return (
    <ReactstrapAlert color={color} isOpen={isAlertOpen}>
      {msg}
    </ReactstrapAlert>
  );
};

export default Alert;
