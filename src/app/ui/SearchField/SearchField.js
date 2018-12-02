import React, { Component } from "react";
import PropTypes from "prop-types";
import { isNotEmpty } from "ui/helpers/validations";
import SubmitButton from "ui/SubmitButton";
import styles from "./SearchField.module.css";

export class SearchField extends Component {
  constructor(props) {
    super();
    this.state = {
      field: {
        value: props.defaultValue || "",
        valid: false,
        rules: [isNotEmpty]
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { field } = this.state;
    const valid = field.rules.every(rule => rule(value));

    this.setState({ field: { ...field, value, valid } });
  }

  handleSubmit() {
    if (!this.state.field.value) return;

    this.props.onClick(this.state.field.value);
  }

  render() {
    const { id, label, prefix } = this.props;
    const inputIsEmpty = !this.state.field.value;

    return (
      <div className={styles.searchField}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <div className={styles.inputContainer}>
          <span className={styles.prefix}>{prefix}</span>
          <input
            type="text"
            id={`${id}-input`}
            name={id}
            value={this.state.field.value}
            className={styles.fieldInput}
            onChange={this.handleChange}
          />
        </div>
        <SubmitButton
          onClick={this.handleSubmit}
          disabled={inputIsEmpty}
          id="submitSearchField"
        >
          Find!
        </SubmitButton>
      </div>
    );
  }
}

SearchField.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  defaultValue: PropTypes.string
};

SearchField.defaultProps = {
  defaultValue: "",
  prefix: ""
};

export default SearchField;
