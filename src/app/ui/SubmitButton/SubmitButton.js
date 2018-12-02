import React from "react";
import PropTypes from "prop-types";
import styles from "./SubmitButton.module.css";

export function SubmitButton({
  id,
  children,
  onClick,
  customClassName,
  disabled
}) {
  return (
    <button
      id={id}
      className={`${styles.submitButton} ${customClassName}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

SubmitButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
  disabled: PropTypes.bool
};

SubmitButton.defaultProps = {
  customClassName: "",
  disabled: false
};

export default SubmitButton;
