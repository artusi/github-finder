import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Repos.module.css";

export function Repos({ github }) {
  const { error, username, repos } = github;
  const errorMessage = "Sorry but we couldn't find this user ;-(";

  if (error) return <div className={styles.repos}>{errorMessage}</div>;

  return (
    <div className={styles.repos}>{`Hey, ${username} has ${repos.total}.`}</div>
  );
}

const mapStateToProps = state => ({
  github: state.github
});

Repos.propTypes = {
  github: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    repos: PropTypes.object.isRequired
  }).isRequired
};

export default connect(mapStateToProps)(Repos);
