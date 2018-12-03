import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Report } from "ui";
import { commitReportParser } from "./parser";
import styles from "./CommitsList.module.css";

export function CommitsList({ commits, error }) {
  const errorMessage = "Sorry but we couldn't find this user or repository ;-(";

  if (error) return <div className={styles.commitsList}>{errorMessage}</div>;

  const parsed = commits.list.map(item => ({
      id: item.id,
      cells: commitReportParser(item, styles)
    }));

  return (
    <div className={styles.commitsList}>
      <p>List of commits:</p>
      <div className={styles.commitsReport}>
        <Report id="commits-report" list={parsed} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  commits: state.github.currentRepo.commits,
  error: state.github.error
});

CommitsList.propTypes = {
  commits: PropTypes.shape({
    total: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
  }).isRequired,
  error: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(CommitsList);
