import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { RepoCard } from "ui";
import styles from "./Repos.module.css";

export function Repos({ github }) {
  const { error, username, repos } = github;
  const { byId, all } = repos;
  const errorMessage = "Sorry but we couldn't find this user ;-(";

  if (error) return <div className={styles.repos}>{errorMessage}</div>;

  return (
    <div className={styles.repos}>
      <div className={styles.disclamer}>
        {`Hey, ${username} has ${repos.total} repositories.`}
      </div>
      <div className={styles.reposList}>
        {all.map(id => {
          const currentRepo = byId[id];
          const title = currentRepo.name;
          return (
            <div key={currentRepo.id} className={styles.reposListItem}>
              <RepoCard {...currentRepo} title={title} />
            </div>
          );
        })}
      </div>
    </div>
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
