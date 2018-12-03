import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./OptionSelect.module.css";

export class OptionSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    const { id, customClassName, disabled, options } = this.props;

    return (
      <select
        id={id}
        className={`${styles.optionSelect} ${customClassName}`}
        disabled={disabled}
        onChange={this.handleChange}
        value={this.state.value}
      >
        {options.map(item => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }
}

OptionSelect.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  customClassName: PropTypes.string,
  initialValue: PropTypes.string,
  disabled: PropTypes.bool
};

OptionSelect.defaultProps = {
  customClassName: "",
  initialValue: "",
  disabled: false
};

export default OptionSelect;
