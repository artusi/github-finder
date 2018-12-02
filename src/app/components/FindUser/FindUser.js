import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { requestUserUpdate } from "store/state/github";
import { SearchField } from "ui";
import styles from "./FindUser.module.css";

export class FindUser extends Component {
  constructor() {
    super();
    this.requestUser = this.requestUser.bind(this);
  }

  componentDidMount() {
    // Initial request when we don't have any user yet
    this.requestUser(this.props.initialUser);
  }

  requestUser(username) {
    this.props.requestUserUpdate(username);
    this.props.onUpdateUser(username);
  }

  render() {
    return (
      <div className={styles.findUser}>
        <SearchField
          id="findUser"
          defaultValue={this.props.initialUser}
          onClick={this.requestUser}
          prefix="https://github.com/"
          label="Search a GitHub user:"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  github: state.github
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestUserUpdate
    },
    dispatch
  );
}

FindUser.propTypes = {
  requestUserUpdate: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  initialUser: PropTypes.string
};
FindUser.defaultProps = {
  initialUser: ""
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUser);
