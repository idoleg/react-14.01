import React from "react";
import PropTypes from "prop-types";
import "./Message.css";
import classnames from "classnames";

export const Message = ({ name, content }) => {
  const classNames = classnames("Message", {
    "Message--user": name === "Я"
  });
  return (
    <div className={classNames}>
      <strong>{name}: </strong>
      {content}
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
