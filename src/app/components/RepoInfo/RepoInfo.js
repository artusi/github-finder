import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { requestRepository } from "store/state/github";
import styles from "./RepoInfo.module.css";

export class RepoInfo extends Component {
  componentDidMount() {
    const { username, repositoryName } = this.props;

    this.props.requestRepository(username, repositoryName);
  }

  render() {
    const { username, repositoryName } = this.props;
    return (
      <div className={styles.repoInfo}>
        Hey you are seeing
        <span className={styles.infoItem}>{`  ${repositoryName} `}</span>
        from
        <span className={styles.infoItem}>{` ${username}`}</span>
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
      requestRepository
    },
    dispatch
  );
}

RepoInfo.propTypes = {
  username: PropTypes.string.isRequired,
  repositoryName: PropTypes.string.isRequired,
  requestRepository: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoInfo);
