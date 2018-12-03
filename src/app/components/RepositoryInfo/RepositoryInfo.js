import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { requestRepository } from "store/state/github";
import styles from "./RepositoryInfo.module.css";

export class RepositoryInfo extends Component {
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

RepositoryInfo.propTypes = {
  username: PropTypes.string.isRequired,
  repositoryName: PropTypes.string.isRequired,
  requestRepository: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryInfo);
